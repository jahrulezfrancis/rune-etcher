"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  BookOpen,
  Zap,
  Bitcoin,
  BracketsIcon as Bridge,
  Code,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-orange-400" />
              <h1 className="text-4xl font-bold text-white">Documentation</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete guide to using Rune Etcher - from basic concepts to advanced integrations
            </p>
          </div>

          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-black/20 backdrop-blur-sm">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="concepts">Core Concepts</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started">
              <div className="grid gap-6">
                <Card className="bg-black/40 backdrop-blur-sm border-orange-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-400">
                      <Zap className="h-6 w-6" />
                      Quick Start Guide
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Alert className="border-blue-500/30 bg-blue-500/10">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription className="text-blue-400">
                        <strong>Prerequisites:</strong> You'll need a Starknet wallet (Argent X or Braavos) and some
                        testnet ETH for transaction fees.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          1
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">Connect Your Wallet</h3>
                          <p className="text-gray-300 mb-3">
                            Click "Connect Wallet" and choose your preferred Starknet wallet. Make sure you're on
                            Sepolia testnet.
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="secondary">Argent X</Badge>
                            <Badge variant="secondary">Braavos</Badge>
                            <Badge variant="secondary">Web Wallet</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          2
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">Choose Your Rune</h3>
                          <p className="text-gray-300 mb-3">
                            Either create a custom Rune or use one of our meme templates for quick deployment.
                          </p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-orange-500/30 text-orange-400 bg-transparent"
                          >
                            Browse Templates
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          3
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">Etch & Bridge</h3>
                          <p className="text-gray-300">
                            Fill in your Rune details and click "Etch & Bridge" to create your Rune on Bitcoin and
                            bridge it to Starknet atomically.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-purple-400">Testnet Resources</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Starknet Sepolia Faucet</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open("https://starknet-faucet.vercel.app/", "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Bitcoin Testnet Faucet</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open("https://coinfaucet.eu/en/btc-testnet/", "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Starkscan Explorer</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open("https://sepolia.starkscan.co/", "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/40 backdrop-blur-sm border-green-500/30">
                    <CardHeader>
                      <CardTitle className="text-green-400">Next Steps</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Link href="/docs/architecture">
                        <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          Learn the Architecture
                        </Button>
                      </Link>
                      <Link href="/docs/bridge-guide">
                        <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          Bridge Guide
                        </Button>
                      </Link>
                      <Link href="/docs/api">
                        <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          API Reference
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="concepts">
              <div className="grid gap-6">
                <Card className="bg-black/40 backdrop-blur-sm border-blue-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-400">
                      <Bitcoin className="h-6 w-6" />
                      Bitcoin Runes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Bitcoin Runes are a new token standard built on Bitcoin, similar to how ERC-20 tokens work on
                      Ethereum. They use Bitcoin's UTXO model and are embedded in Bitcoin transactions through the
                      witness field.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">Key Features</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Native Bitcoin integration</li>
                          <li>• UTXO-based transactions</li>
                          <li>• Witness field embedding</li>
                          <li>• Minimal blockchain bloat</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">Use Cases</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Meme tokens</li>
                          <li>• Digital collectibles</li>
                          <li>• Gaming assets</li>
                          <li>• Community tokens</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-400">
                      <Bridge className="h-6 w-6" />
                      Atomic Bridging
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Our atomic bridging technology ensures that Rune creation and Starknet bridging happen in a
                      single, indivisible operation. This eliminates the risk of failed partial transactions.
                    </p>
                    <div className="p-4 bg-gray-800/30 rounded-lg">
                      <h4 className="font-semibold text-white mb-3">Bridge Flow</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="px-2 py-1 bg-orange-500/20 rounded">Bitcoin Etch</span>
                        <ArrowRight className="h-4 w-4" />
                        <span className="px-2 py-1 bg-blue-500/20 rounded">Starkgate</span>
                        <ArrowRight className="h-4 w-4" />
                        <span className="px-2 py-1 bg-purple-500/20 rounded">Starknet Token</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-sm border-green-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-400">
                      <Code className="h-6 w-6" />
                      Smart Contracts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Rune Etcher uses a suite of Cairo smart contracts deployed on Starknet to manage Rune tokens,
                      factory operations, and bridging functionality.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">RuneToken</h4>
                        <p className="text-sm text-gray-300">ERC-20 compatible token with Rune-specific metadata</p>
                      </div>
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">RuneFactory</h4>
                        <p className="text-sm text-gray-300">Deploys new Rune tokens and manages creation</p>
                      </div>
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h4 className="font-semibold text-white mb-2">RuneBridge</h4>
                        <p className="text-sm text-gray-300">Handles atomic bridging operations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tutorials">
              <div className="grid gap-6">
                <Card className="bg-black/40 backdrop-blur-sm border-orange-500/30">
                  <CardHeader>
                    <CardTitle className="text-orange-400">Step-by-Step Tutorials</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">🚀 Creating Your First Meme Rune</h3>
                        <p className="text-gray-300 mb-3">
                          Learn how to create a viral meme Rune from scratch using our templates.
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="secondary">Beginner</Badge>
                          <Badge variant="secondary">5 min</Badge>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">⚡ Advanced Rune Configuration</h3>
                        <p className="text-gray-300 mb-3">
                          Deep dive into custom supply mechanics, premine strategies, and tokenomics.
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="secondary">Advanced</Badge>
                          <Badge variant="secondary">15 min</Badge>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">🌉 Understanding the Bridge</h3>
                        <p className="text-gray-300 mb-3">
                          How atomic bridging works and how to monitor your transactions.
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="secondary">Intermediate</Badge>
                          <Badge variant="secondary">10 min</Badge>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">📊 Analyzing Rune Performance</h3>
                        <p className="text-gray-300 mb-3">
                          Use the leaderboard and analytics to track your Rune's success.
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="secondary">Intermediate</Badge>
                          <Badge variant="secondary">8 min</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="troubleshooting">
              <div className="grid gap-6">
                <Card className="bg-black/40 backdrop-blur-sm border-red-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-400">
                      <AlertTriangle className="h-6 w-6" />
                      Common Issues
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">Wallet Connection Failed</h3>
                        <p className="text-gray-300 mb-2">If your wallet won't connect:</p>
                        <ul className="text-sm text-gray-300 space-y-1 ml-4">
                          <li>• Ensure you're on Starknet Sepolia testnet</li>
                          <li>• Refresh the page and try again</li>
                          <li>• Check if your wallet extension is enabled</li>
                          <li>• Try a different wallet (Argent X, Braavos)</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">Transaction Failed</h3>
                        <p className="text-gray-300 mb-2">If your Rune creation fails:</p>
                        <ul className="text-sm text-gray-300 space-y-1 ml-4">
                          <li>• Check you have enough ETH for gas fees</li>
                          <li>• Verify the ticker isn't already taken</li>
                          <li>• Ensure total supply is greater than premine</li>
                          <li>• Wait for network congestion to clear</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">Bridge Stuck</h3>
                        <p className="text-gray-300 mb-2">If bridging takes too long:</p>
                        <ul className="text-sm text-gray-300 space-y-1 ml-4">
                          <li>• Bitcoin confirmations can take 10-60 minutes</li>
                          <li>• Check transaction status on block explorers</li>
                          <li>• Contact support if stuck for over 2 hours</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-sm border-green-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="h-6 w-6" />
                      Getting Help
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">Still having issues? Here's how to get support:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 bg-transparent"
                      >
                        Join Discord
                      </Button>
                      <Button
                        variant="outline"
                        className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 bg-transparent"
                      >
                        Open GitHub Issue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <div className="grid gap-6">
                <Card className="bg-black/40 backdrop-blur-sm border-yellow-500/30">
                  <CardHeader>
                    <CardTitle className="text-yellow-400">Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">What are Bitcoin Runes?</h3>
                        <p className="text-gray-300">
                          Bitcoin Runes are a new token standard on Bitcoin that allows for the creation of fungible
                          tokens directly on the Bitcoin blockchain using the UTXO model.
                        </p>
                      </div>

                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">How much does it cost to create a Rune?</h3>
                        <p className="text-gray-300">
                          You only pay network fees - Bitcoin transaction fees for etching and Starknet gas fees for
                          bridging. There are no additional platform fees.
                        </p>
                      </div>

                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">Can I use my Runes in DeFi?</h3>
                        <p className="text-gray-300">
                          Yes! Once bridged to Starknet, your Runes become ERC-20 compatible tokens that can be used in
                          any Starknet DeFi protocol.
                        </p>
                      </div>

                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">Is this safe?</h3>
                        <p className="text-gray-300">
                          Our smart contracts use OpenZeppelin components and follow security best practices. However,
                          this is testnet software - only use testnet funds.
                        </p>
                      </div>

                      <div className="p-4 bg-gray-800/30 rounded-lg">
                        <h3 className="font-semibold text-white mb-2">Can I bridge back to Bitcoin?</h3>
                        <p className="text-gray-300">
                          Currently, bridging is one-way from Bitcoin to Starknet. Two-way bridging is planned for
                          future releases.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
