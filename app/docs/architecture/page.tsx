"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Bitcoin, BracketsIcon as Bridge, Database, Globe, Code, ArrowDown } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Layers className="h-8 w-8 text-purple-400" />
              <h1 className="text-4xl font-bold text-white">Architecture</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep dive into Rune Etcher's technical architecture and cross-chain infrastructure
            </p>
          </div>

          {/* System Overview */}
          <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30 mb-8">
            <CardHeader>
              <CardTitle className="text-purple-400">System Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bitcoin className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Bitcoin Layer</h3>
                  <p className="text-sm text-gray-300">Rune etching using witness fields and UTXO model</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bridge className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Bridge Layer</h3>
                  <p className="text-sm text-gray-300">Starkgate + Utu Relay for atomic cross-chain operations</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Starknet Layer</h3>
                  <p className="text-sm text-gray-300">Cairo smart contracts for token management and DeFi</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Architecture Diagram */}
          <Card className="bg-black/40 backdrop-blur-sm border-blue-500/30 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-400">Data Flow Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Frontend Layer */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <Globe className="h-6 w-6 text-green-400" />
                    <div className="text-left">
                      <h3 className="font-semibold text-white">Frontend (Next.js + React)</h3>
                      <p className="text-sm text-gray-300">User interface, wallet integration, real-time updates</p>
                    </div>
                  </div>
                </div>

                <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />

                {/* API Layer */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-5 w-5 text-yellow-400" />
                      <h3 className="font-semibold text-white">Starknet RPC</h3>
                    </div>
                    <p className="text-sm text-gray-300">Contract interactions, transaction monitoring</p>
                  </div>
                  <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Bitcoin className="h-5 w-5 text-orange-400" />
                      <h3 className="font-semibold text-white">Bitcoin RPC</h3>
                    </div>
                    <p className="text-sm text-gray-300">Rune etching, transaction broadcasting</p>
                  </div>
                </div>

                <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />

                {/* Smart Contract Layer */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
                    <h3 className="font-semibold text-white mb-2">RuneFactory</h3>
                    <p className="text-sm text-gray-300">Token deployment and management</p>
                  </div>
                  <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
                    <h3 className="font-semibold text-white mb-2">RuneToken</h3>
                    <p className="text-sm text-gray-300">ERC-20 compatible Rune tokens</p>
                  </div>
                  <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
                    <h3 className="font-semibold text-white mb-2">RuneBridge</h3>
                    <p className="text-sm text-gray-300">Cross-chain bridging logic</p>
                  </div>
                </div>

                <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />

                {/* Infrastructure Layer */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Starknet Sepolia</h3>
                    <p className="text-sm text-gray-300">L2 execution environment</p>
                  </div>
                  <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Bitcoin Testnet</h3>
                    <p className="text-sm text-gray-300">L1 settlement layer</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Components */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <Card className="bg-black/40 backdrop-blur-sm border-orange-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-400">
                  <Bitcoin className="h-6 w-6" />
                  Bitcoin Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-gray-800/30 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Broly Toolkit</h4>
                  <p className="text-sm text-gray-300">Bitcoin Runes parsing and witness field manipulation</p>
                </div>
                <div className="p-3 bg-gray-800/30 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">UTXO Management</h4>
                  <p className="text-sm text-gray-300">Efficient handling of Bitcoin's unspent transaction outputs</p>
                </div>
                <div className="p-3 bg-gray-800/30 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Witness Field Encoding</h4>
                  <p className="text-sm text-gray-300">Embedding Rune data in Bitcoin transactions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <Database className="h-6 w-6" />
                  Starknet Contracts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-gray-800/30 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Cairo Language</h4>
                  <p className="text-sm text-gray-300">Zero-knowledge proof compatible smart contracts</p>
                </div>
                <div className="p-3 bg-gray-800/30 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">OpenZeppelin Components</h4>
                  <p className="text-sm text-gray-300">Battle-tested security patterns and access control</p>
                </div>
                <div className="p-3 bg-gray-800/30 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Event-Driven Architecture</h4>
                  <p className="text-sm text-gray-300">Real-time updates through contract events</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bridge Architecture */}
          <Card className="bg-black/40 backdrop-blur-sm border-blue-500/30 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-400">
                <Bridge className="h-6 w-6" />
                Bridge Architecture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-300">
                  The atomic bridging system ensures that Rune creation and Starknet deployment happen as a single,
                  indivisible operation using a combination of Starkgate and Utu Relay.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-white">Starkgate Integration</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">Official Starknet bridge protocol</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">Ethereum L1 settlement</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">Merkle proof verification</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-white">Utu Relay</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Cross-chain message passing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">State synchronization</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Atomic transaction coordination</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Considerations */}
          <Card className="bg-black/40 backdrop-blur-sm border-red-500/30 mb-8">
            <CardHeader>
              <CardTitle className="text-red-400">Security Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-3">Smart Contract Security</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• OpenZeppelin security components</li>
                    <li>• Reentrancy protection</li>
                    <li>• Access control patterns</li>
                    <li>• Input validation and sanitization</li>
                    <li>• Event logging for transparency</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-3">Bridge Security</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
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
          <Card className="bg-black/40 backdrop-blur-sm border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400">Performance & Scalability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Transaction Speed</h3>
                  <p className="text-2xl font-bold text-green-400 mb-1">~10s</p>
                  <p className="text-sm text-gray-300">Starknet confirmation</p>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Bridge Time</h3>
                  <p className="text-2xl font-bold text-blue-400 mb-1">~30min</p>
                  <p className="text-sm text-gray-300">Bitcoin confirmation</p>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Gas Costs</h3>
                  <p className="text-2xl font-bold text-purple-400 mb-1">~$0.01</p>
                  <p className="text-sm text-gray-300">Starknet transaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
