use starknet::ContractAddress;

#[starknet::interface]
trait IRuneToken<TContractState> {
    fn name(self: @TContractState) -> ByteArray;
    fn symbol(self: @TContractState) -> ByteArray;
    fn decimals(self: @TContractState) -> u8;
    fn total_supply(self: @TContractState) -> u256;
    fn balance_of(self: @TContractState, account: ContractAddress) -> u256;
    fn allowance(self: @TContractState, owner: ContractAddress, spender: ContractAddress) -> u256;
    fn transfer(ref self: TContractState, recipient: ContractAddress, amount: u256) -> bool;
    fn transfer_from(ref self: TContractState, sender: ContractAddress, recipient: ContractAddress, amount: u256) -> bool;
    fn approve(ref self: TContractState, spender: ContractAddress, amount: u256) -> bool;
    
    // Rune-specific functions
    fn bitcoin_tx_hash(self: @TContractState) -> felt252;
    fn creator(self: @TContractState) -> ContractAddress;
    fn premine_amount(self: @TContractState) -> u256;
    fn bridge_address(self: @TContractState) -> ContractAddress;
    fn is_bridged(self: @TContractState) -> bool;
    fn bridge_to_starknet(ref self: TContractState, amount: u256) -> bool;
}

#[starknet::contract]
mod RuneToken {
    use openzeppelin::token::erc20::ERC20Component;
    use openzeppelin::access::ownable::OwnableComponent;
    use starknet::{ContractAddress, get_caller_address};

    component!(path: ERC20Component, storage: erc20, event: ERC20Event);
    component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);

    #[abi(embed_v0)]
    impl ERC20Impl = ERC20Component::ERC20Impl<ContractState>;
    #[abi(embed_v0)]
    impl ERC20MetadataImpl = ERC20Component::ERC20MetadataImpl<ContractState>;
    #[abi(embed_v0)]
    impl OwnableImpl = OwnableComponent::OwnableImpl<ContractState>;

    impl ERC20InternalImpl = ERC20Component::InternalImpl<ContractState>;
    impl OwnableInternalImpl = OwnableComponent::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        #[substorage(v0)]
        erc20: ERC20Component::Storage,
        #[substorage(v0)]
        ownable: OwnableComponent::Storage,
        bitcoin_tx_hash: felt252,
        creator: ContractAddress,
        premine_amount: u256,
        bridge_address: ContractAddress,
        is_bridged: bool,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        ERC20Event: ERC20Component::Event,
        #[flat]
        OwnableEvent: OwnableComponent::Event,
        RuneBridged: RuneBridged,
    }

    #[derive(Drop, starknet::Event)]
    struct RuneBridged {
        #[key]
        from: ContractAddress,
        amount: u256,
        bitcoin_tx: felt252,
    }

    #[constructor]
    fn constructor(
        ref self: ContractState,
        name: ByteArray,
        symbol: ByteArray,
        total_supply: u256,
        creator: ContractAddress,
        premine_amount: u256,
        bitcoin_tx_hash: felt252,
        bridge_address: ContractAddress,
    ) {
        self.erc20.initializer(name, symbol);
        self.ownable.initializer(creator);
        
        self.creator.write(creator);
        self.premine_amount.write(premine_amount);
        self.bitcoin_tx_hash.write(bitcoin_tx_hash);
        self.bridge_address.write(bridge_address);
        self.is_bridged.write(false);
        
        // Mint total supply to creator
        self.erc20._mint(creator, total_supply);
    }

    #[abi(embed_v0)]
    impl RuneTokenImpl of super::IRuneToken<ContractState> {
        fn name(self: @ContractState) -> ByteArray {
            self.erc20.name()
        }

        fn symbol(self: @ContractState) -> ByteArray {
            self.erc20.symbol()
        }

        fn decimals(self: @ContractState) -> u8 {
            self.erc20.decimals()
        }

        fn total_supply(self: @ContractState) -> u256 {
            self.erc20.total_supply()
        }

        fn balance_of(self: @ContractState, account: ContractAddress) -> u256 {
            self.erc20.balance_of(account)
        }

        fn allowance(self: @ContractState, owner: ContractAddress, spender: ContractAddress) -> u256 {
            self.erc20.allowance(owner, spender)
        }

        fn transfer(ref self: ContractState, recipient: ContractAddress, amount: u256) -> bool {
            self.erc20.transfer(recipient, amount)
        }

        fn transfer_from(ref self: ContractState, sender: ContractAddress, recipient: ContractAddress, amount: u256) -> bool {
            self.erc20.transfer_from(sender, recipient, amount)
        }

        fn approve(ref self: ContractState, spender: ContractAddress, amount: u256) -> bool {
            self.erc20.approve(spender, amount)
        }

        fn bitcoin_tx_hash(self: @ContractState) -> felt252 {
            self.bitcoin_tx_hash.read()
        }

        fn creator(self: @ContractState) -> ContractAddress {
            self.creator.read()
        }

        fn premine_amount(self: @ContractState) -> u256 {
            self.premine_amount.read()
        }

        fn bridge_address(self: @ContractState) -> ContractAddress {
            self.bridge_address.read()
        }

        fn is_bridged(self: @ContractState) -> bool {
            self.is_bridged.read()
        }

        fn bridge_to_starknet(ref self: ContractState, amount: u256) -> bool {
            let caller = get_caller_address();
            let bridge_addr = self.bridge_address.read();
            
            // Transfer tokens to bridge
            self.erc20.transfer(bridge_addr, amount);
            
            // Mark as bridged
            self.is_bridged.write(true);
            
            // Emit event
            self.emit(RuneBridged {
                from: caller,
                amount: amount,
                bitcoin_tx: self.bitcoin_tx_hash.read(),
            });
            
            true
        }
    }
}
