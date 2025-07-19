"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Bitcoin, BracketsIcon as Bridge, Database, Globe, Code, ArrowDown } from "lucide-react"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Breadcrumb } from "../../components/breadcrumb"

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative min-h-screen flex flex-col">
        <Header />

        <div className="flex-1 container mx-auto px-4 py-4 md:py-8 max-w-full overflow-x-hidden">
          <Breadcrumb />

          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Layers className="h-6 md:h-8 w-6 md:w-8 text-purple-400" />
              <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900">
                Architecture
              </h1>
            </div>
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 light:text-gray-600">
                Deep dive into Rune Etcher's technical architecture and cross-chain infrastructure
              </p>
            </div>
          </div>

          {/* System Overview */}
          <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30 dark:bg-black/40 light:bg-white/80 mb-8">
            <CardHeader>
              <CardTitle className="text-purple-400 text-lg md:text-xl">System Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bitcoin className="h-6 md:h-8 w-6 md:w-8 text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Bitcoin Layer
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Rune etching using witness fields and UTXO model
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bridge className="h-6 md:h-8 w-6 md:w-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Bridge Layer
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Starkgate + Utu Relay for atomic cross-chain operations
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="h-6 md:h-8 w-6 md:w-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Starknet Layer
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Cairo smart contracts for token management and DeFi
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Architecture Diagram */}
          <Card className="bg-black/40 backdrop-blur-sm border-blue-500/30 dark:bg-black/40 light:bg-white/80 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-400 text-lg md:text-xl">Data Flow Architecture</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-6 md:space-y-8">
                {/* Frontend Layer */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-4 p-3 md:p-4 bg-green-500/10 border border-green-500/30 rounded-lg max-w-full">
                    <Globe className="h-5 md:h-6 w-5 md:w-6 text-green-400 flex-shrink-0" />
                    <div className="text-left min-w-0">
                      <h3 className="font-semibold text-white dark:text-white light:text-gray-900 text-sm md:text-base">
                        Frontend (Next.js + React)
                      </h3>
                      <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                        User interface, wallet integration, real-time updates
                      </p>
                    </div>
                  </div>
                </div>

                <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />

                {/* API Layer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 md:p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 md:h-5 w-4 md:w-5 text-yellow-400" />
                      <h3 className="font-semibold text-white dark:text-white light:text-gray-900 text-sm md:text-base">
                        Starknet RPC
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                      Contract interactions, transaction monitoring
                    </p>
                  </div>
                  <div className="p-3 md:p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Bitcoin className="h-4 md:h-5 w-4 md:w-5 text-orange-400" />
                      <h3 className="font-semibold text-white dark:text-white light:text-gray-900 text-sm md:text-base">
                        Bitcoin RPC
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                      Rune etching, transaction broadcasting
                    </p>
                  </div>
                </div>

                <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />

                {/* Smart Contract Layer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 md:p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      RuneFactory
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                      Token deployment and management
                    </p>
                  </div>
                  <div className="p-3 md:p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      RuneToken
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                      ERC-20 compatible Rune tokens
                    </p>
                  </div>
                  <div className="p-3 md:p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      RuneBridge
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                      Cross-chain bridging logic
                    </p>
                  </div>
                </div>

                <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />

                {/* Infrastructure Layer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 md:p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      Starknet Sepolia
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                      L2 execution environment
                    </p>
                  </div>
                  <div className="p-3 md:p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      Bitcoin Testnet
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                      L1 settlement layer
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Components */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="bg-black/40 backdrop-blur-sm border-orange-500/30 dark:bg-black/40 light:bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-400 text-lg md:text-xl">
                  <Bitcoin className="h-5 md:h-6 w-5 md:w-6" />
                  Bitcoin Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 md:p-6">
                <div className="p-3 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Broly Toolkit
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Bitcoin Runes parsing and witness field manipulation
                  </p>
                </div>
                <div className="p-3 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    UTXO Management
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Efficient handling of Bitcoin's unspent transaction outputs
                  </p>
                </div>
                <div className="p-3 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Witness Field Encoding
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Embedding Rune data in Bitcoin transactions
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30 dark:bg-black/40 light:bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400 text-lg md:text-xl">
                  <Database className="h-5 md:h-6 w-5 md:w-6" />
                  Starknet Contracts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 md:p-6">
                <div className="p-3 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Cairo Language
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Zero-knowledge proof compatible smart contracts
                  </p>
                </div>
                <div className="p-3 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    OpenZeppelin Components
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Battle-tested security patterns and access control
                  </p>
                </div>
                <div className="p-3 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Event-Driven Architecture
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Real-time updates through contract events
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bridge Architecture */}
          <Card className="bg-black/40 backdrop-blur-sm border-blue-500/30 dark:bg-black/40 light:bg-white/80 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-400 text-lg md:text-xl">
                <Bridge className="h-5 md:h-6 w-5 md:w-6" />
                Bridge Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-6">
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm md:text-base">
                  The atomic bridging system ensures that Rune creation and Starknet deployment happen as a single,
                  indivisible operation using a combination of Starkgate and Utu Relay.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 text-sm md:text-base">
                      Starkgate Integration
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs md:text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                          Official Starknet bridge protocol
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                          Ethereum L1 settlement
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                          Merkle proof verification
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 text-sm md:text-base">
                      Utu Relay
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs md:text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                          Cross-chain message passing
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                          State synchronization
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                          Atomic transaction coordination
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Considerations */}
          <Card className="bg-black/40 backdrop-blur-sm border-red-500/30 dark:bg-black/40 light:bg-white/80 mb-8">
            <CardHeader>
              <CardTitle className="text-red-400 text-lg md:text-xl">Security Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-3 text-sm md:text-base">
                    Smart Contract Security
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    <li>• OpenZeppelin security components</li>
                    <li>• Reentrancy protection</li>
                    <li>• Access control patterns</li>
                    <li>• Input validation and sanitization</li>
                    <li>• Event logging for transparency</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-3 text-sm md:text-base">
                    Bridge Security
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    <li>• Atomic transaction guarantees</li>
                    <li>• Multi-signature validation</li>
                    <li>• Time-locked operations</li>
                    <li>• Fraud proof mechanisms</li>
                    <li>• Emergency pause functionality</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance & Scalability */}
          <Card className="bg-black/40 backdrop-blur-sm border-green-500/30 dark:bg-black/40 light:bg-white/80">
            <CardHeader>
              <CardTitle className="text-green-400 text-lg md:text-xl">Performance & Scalability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Transaction Speed
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-green-400 mb-1">~10s</p>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Starknet confirmation
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Bridge Time
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-blue-400 mb-1">~30min</p>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Bitcoin confirmation
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Gas Costs
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-purple-400 mb-1">~$0.01</p>
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    Starknet transaction
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  )
}
