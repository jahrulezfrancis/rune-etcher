use starknet::ContractAddress;

#[starknet::interface]
trait IRuneBridge<TContractState> {
    fn bridge_rune(ref self: TContractState, rune_token: ContractAddress, amount: u256) -> bool;
    fn get_bridge_fee(self: @TContractState) -> u256;
    fn set_bridge_fee(ref self: TContractState, fee: u256);
    fn get_user_bridge_history(self: @TContractState, user: ContractAddress) -> Array<(ContractAddress, u256, u64)>;
    fn withdraw_fees(ref self: TContractState, recipient: ContractAddress);
}

#[starknet::contract]
mod RuneBridge {
    use openzeppelin::access::ownable::OwnableComponent;
    use openzeppelin::security::reentrancyguard::ReentrancyGuardComponent;
    use openzeppelin::token::erc20::interface::{IERC20Dispatcher, IERC20DispatcherTrait};
    use starknet::{ContractAddress, get_caller_address, get_block_timestamp};
    use core::array::ArrayTrait;

    component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);
    component!(path: ReentrancyGuardComponent, storage: reentrancy_guard, event: ReentrancyGuardEvent);

    #[abi(embed_v0)]
    impl OwnableImpl = OwnableComponent::OwnableImpl<ContractState>;
    #[abi(embed_v0)]
    impl ReentrancyGuardImpl = ReentrancyGuardComponent::ReentrancyGuardImpl<ContractState>;

    impl OwnableInternalImpl = OwnableComponent::InternalImpl<ContractState>;
    impl ReentrancyGuardInternalImpl = ReentrancyGuardComponent::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        #[substorage(v0)]
        ownable: OwnableComponent::Storage,
        #[substorage(v0)]
        reentrancy_guard: ReentrancyGuardComponent::Storage,
        bridge_fee: u256,
        collected_fees: u256,
        user_bridge_history: LegacyMap<ContractAddress, Array<(ContractAddress, u256, u64)>>,
        total_bridged: LegacyMap<ContractAddress, u256>,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        OwnableEvent: OwnableComponent::Event,
        #[flat]
        ReentrancyGuardEvent: ReentrancyGuardComponent::Event,
        RuneBridged: RuneBridged,
        FeesWithdrawn: FeesWithdrawn,
    }

    #[derive(Drop, starknet::Event)]
    struct RuneBridged {
        #[key]
        user: ContractAddress,
        #[key]
        rune_token: ContractAddress,
        amount: u256,
        fee: u256,
        timestamp: u64,
    }

    #[derive(Drop, starknet::Event)]
    struct FeesWithdrawn {
        #[key]
        recipient: ContractAddress,
        amount: u256,
    }

    #[constructor]
    fn constructor(
        ref self: ContractState,
        owner: ContractAddress,
        initial_bridge_fee: u256,
    ) {
        self.ownable.initializer(owner);
        self.reentrancy_guard.initializer();
        self.bridge_fee.write(initial_bridge_fee);
        self.collected_fees.write(0);
    }

    #[abi(embed_v0)]
    impl RuneBridgeImpl of super::IRuneBridge<ContractState> {
        fn bridge_rune(ref self: ContractState, rune_token: ContractAddress, amount: u256) -> bool {
            self.reentrancy_guard.start();
            
            let caller = get_caller_address();
            let fee = self.bridge_fee.read();
            let timestamp = get_block_timestamp();
            
            // Check user has enough tokens
            let token = IERC20Dispatcher { contract_address: rune_token };
            let user_balance = token.balance_of(caller);
            assert(user_balance >= amount, 'Insufficient balance');
            
            // Transfer tokens to bridge
            let success = token.transfer_from(caller, starknet::get_contract_address(), amount);
            assert(success, 'Transfer failed');
            
            // Collect fee (in ETH or STRK)
            // Note: In production, implement proper fee collection mechanism
            
            // Update bridge history
            let mut history = self.user_bridge_history.read(caller);
            history.append((rune_token, amount, timestamp));
            self.user_bridge_history.write(caller, history);
            
            // Update total bridged for this token
            let current_total = self.total_bridged.read(rune_token);
            self.total_bridged.write(rune_token, current_total + amount);
            
            // Update collected fees
            self.collected_fees.write(self.collected_fees.read() + fee);
            
            // Emit event
            self.emit(RuneBridged {
                user: caller,
                rune_token: rune_token,
                amount: amount,
                fee: fee,
                timestamp: timestamp,
            });
            
            self.reentrancy_guard.end();
            true
        }

        fn get_bridge_fee(self: @ContractState) -> u256 {
            self.bridge_fee.read()
        }

        fn set_bridge_fee(ref self: ContractState, fee: u256) {
            self.ownable.assert_only_owner();
            self.bridge_fee.write(fee);
        }

        fn get_user_bridge_history(self: @ContractState, user: ContractAddress) -> Array<(ContractAddress, u256, u64)> {
            self.user_bridge_history.read(user)
        }

        fn withdraw_fees(ref self: ContractState, recipient: ContractAddress) {
            self.ownable.assert_only_owner();
            let fees = self.collected_fees.read();
            assert(fees > 0, 'No fees to withdraw');
            
            // Reset collected fees
            self.collected_fees.write(0);
            
            // In production, implement proper ETH/STRK transfer
            // For now, just emit event
            self.emit(FeesWithdrawn {
                recipient: recipient,
                amount: fees,
            });
        }
    }
}
