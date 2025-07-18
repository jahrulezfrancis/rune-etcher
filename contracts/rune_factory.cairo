use starknet::ContractAddress;

#[starknet::interface]
trait IRuneFactory<TContractState> {
    fn create_rune(
        ref self: TContractState,
        name: ByteArray,
        symbol: ByteArray,
        total_supply: u256,
        premine_amount: u256,
        bitcoin_tx_hash: felt252,
    ) -> ContractAddress;
    fn get_rune_by_symbol(self: @TContractState, symbol: ByteArray) -> ContractAddress;
    fn is_symbol_taken(self: @TContractState, symbol: ByteArray) -> bool;
    fn get_user_runes(self: @TContractState, user: ContractAddress) -> Array<ContractAddress>;
    fn get_total_runes(self: @TContractState) -> u256;
    fn set_bridge_address(ref self: TContractState, bridge_address: ContractAddress);
}

#[starknet::contract]
mod RuneFactory {
    use openzeppelin::access::ownable::OwnableComponent;
    use starknet::{ContractAddress, get_caller_address, deploy_syscall, ClassHash};
    use core::array::ArrayTrait;

    component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);

    #[abi(embed_v0)]
    impl OwnableImpl = OwnableComponent::OwnableImpl<ContractState>;
    impl OwnableInternalImpl = OwnableComponent::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        #[substorage(v0)]
        ownable: OwnableComponent::Storage,
        rune_class_hash: ClassHash,
        bridge_address: ContractAddress,
        symbol_to_rune: LegacyMap<felt252, ContractAddress>,
        user_runes: LegacyMap<ContractAddress, Array<ContractAddress>>,
        total_runes: u256,
        rune_list: LegacyMap<u256, ContractAddress>,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        OwnableEvent: OwnableComponent::Event,
        RuneCreated: RuneCreated,
    }

    #[derive(Drop, starknet::Event)]
    struct RuneCreated {
        #[key]
        creator: ContractAddress,
        #[key]
        rune_address: ContractAddress,
        symbol: ByteArray,
        total_supply: u256,
        bitcoin_tx: felt252,
    }

    #[constructor]
    fn constructor(
        ref self: ContractState,
        owner: ContractAddress,
        rune_class_hash: ClassHash,
        bridge_address: ContractAddress,
    ) {
        self.ownable.initializer(owner);
        self.rune_class_hash.write(rune_class_hash);
        self.bridge_address.write(bridge_address);
        self.total_runes.write(0);
    }

    #[abi(embed_v0)]
    impl RuneFactoryImpl of super::IRuneFactory<ContractState> {
        fn create_rune(
            ref self: ContractState,
            name: ByteArray,
            symbol: ByteArray,
            total_supply: u256,
            premine_amount: u256,
            bitcoin_tx_hash: felt252,
        ) -> ContractAddress {
            let caller = get_caller_address();
            
            // Check if symbol is already taken
            let symbol_hash = self._hash_symbol(@symbol);
            assert(self.symbol_to_rune.read(symbol_hash).is_zero(), 'Symbol already taken');
            
            // Prepare constructor calldata
            let mut constructor_calldata = ArrayTrait::new();
            name.serialize(ref constructor_calldata);
            symbol.serialize(ref constructor_calldata);
            total_supply.serialize(ref constructor_calldata);
            caller.serialize(ref constructor_calldata);
            premine_amount.serialize(ref constructor_calldata);
            bitcoin_tx_hash.serialize(ref constructor_calldata);
            self.bridge_address.read().serialize(ref constructor_calldata);
            
            // Deploy new Rune token
            let (rune_address, _) = deploy_syscall(
                self.rune_class_hash.read(),
                0, // salt
                constructor_calldata.span(),
                false
            ).unwrap();
            
            // Store mapping
            self.symbol_to_rune.write(symbol_hash, rune_address);
            
            // Update user runes
            let mut user_runes = self.user_runes.read(caller);
            user_runes.append(rune_address);
            self.user_runes.write(caller, user_runes);
            
            // Update total count
            let total = self.total_runes.read();
            self.rune_list.write(total, rune_address);
            self.total_runes.write(total + 1);
            
            // Emit event
            self.emit(RuneCreated {
                creator: caller,
                rune_address: rune_address,
                symbol: symbol,
                total_supply: total_supply,
                bitcoin_tx: bitcoin_tx_hash,
            });
            
            rune_address
        }

        fn get_rune_by_symbol(self: @ContractState, symbol: ByteArray) -> ContractAddress {
            let symbol_hash = self._hash_symbol(@symbol);
            self.symbol_to_rune.read(symbol_hash)
        }

        fn is_symbol_taken(self: @ContractState, symbol: ByteArray) -> bool {
            let symbol_hash = self._hash_symbol(@symbol);
            !self.symbol_to_rune.read(symbol_hash).is_zero()
        }

        fn get_user_runes(self: @ContractState, user: ContractAddress) -> Array<ContractAddress> {
            self.user_runes.read(user)
        }

        fn get_total_runes(self: @ContractState) -> u256 {
            self.total_runes.read()
        }

        fn set_bridge_address(ref self: ContractState, bridge_address: ContractAddress) {
            self.ownable.assert_only_owner();
            self.bridge_address.write(bridge_address);
        }
    }

    #[generate_trait]
    impl InternalImpl of InternalTrait {
        fn _hash_symbol(self: @ContractState, symbol: @ByteArray) -> felt252 {
            // Simple hash function for symbol (in production, use proper hashing)
            let mut hash: felt252 = 0;
            let mut i = 0;
            loop {
                if i >= symbol.len() {
                    break;
                }
                // This is a simplified hash - use proper hashing in production
                hash = hash + symbol.at(i).unwrap().into();
                i += 1;
            };
            hash
        }
    }
}
