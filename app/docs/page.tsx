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
  Home,
} from "lucide-react"
import Link from "next/link"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative min-h-screen flex flex-col">
        <Header />

        <div className="flex-1 container mx-auto px-4 py-4 md:py-8 max-w-full overflow-x-hidden">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm mb-6 overflow-x-auto">
            <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-orange-400">Documentation</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="h-6 md:h-8 w-6 md:w-8 text-orange-400" />
              <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900">
                Documentation
              </h1>
            </div>
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 light:text-gray-600">
                Complete guide to using Rune Etcher - from basic concepts to advanced integrations
              </p>
            </div>
          </div>

          <div className="w-full max-w-full overflow-x-hidden">
            <Tabs defaultValue="getting-started" className="w-full">
              <div className="overflow-x-auto mb-6 md:mb-8">
                <TabsList className="grid w-full grid-cols-5 bg-black/20 backdrop-blur-sm dark:bg-black/20 light:bg-white/80 min-w-max md:min-w-0">
                  <TabsTrigger value="getting-started" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">
                    <span className="hidden sm:inline">Getting Started</span>
                    <span className="sm:hidden">Start</span>
                  </TabsTrigger>
                  <TabsTrigger value="concepts" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">
                    <span className="hidden sm:inline">Core Concepts</span>
                    <span className="sm:hidden">Concepts</span>
                  </TabsTrigger>
                  <TabsTrigger value="tutorials" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">
                    Tutorials
                  </TabsTrigger>
                  <TabsTrigger value="troubleshooting" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">
                    <span className="hidden sm:inline">Troubleshooting</span>
                    <span className="sm:hidden">Help</span>
                  </TabsTrigger>
                  <TabsTrigger value="faq" className="text-xs md:text-sm whitespace-nowrap px-2 md:px-4">
                    FAQ
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="w-full overflow-x-hidden">
                <TabsContent value="getting-started">
                  <div className="grid gap-6">
                    <Card className="bg-black/40 backdrop-blur-sm border-orange-500/30 dark:bg-black/40 light:bg-white/80">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-400 text-lg md:text-xl">
                          <Zap className="h-5 w-5 md:h-6 md:w-6" />
                          Quick Start Guide
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6 p-4 md:p-6">
                        <Alert className="border-blue-500/30 bg-blue-500/10">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription className="text-blue-400 text-sm">
                            <strong>Prerequisites:</strong> You'll need a Starknet wallet (Argent X or Braavos) and some
                            testnet ETH for transaction fees.
                          </AlertDescription>
                        </Alert>

                        <div className="space-y-4">
                          <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                              1
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2">
                                Connect Your Wallet
                              </h3>
                              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3 text-sm md:text-base">
                                Click "Connect Wallet" and choose your preferred Starknet wallet. Make sure you're on
                                Sepolia testnet.
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  Argent X
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  Braavos
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  Web Wallet
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                              2
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2">
                                Choose Your Rune
                              </h3>
                              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3 text-sm md:text-base">
                                Either create a custom Rune or use one of our meme templates for quick deployment.
                              </p>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-orange-500/30 text-orange-400 bg-transparent text-xs"
                              >
                                Browse Templates
                              </Button>
                            </div>
                          </div>

                          <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                              3
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2">
                                Etch & Bridge
                              </h3>
                              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm md:text-base">
                                Fill in your Rune details and click "Etch & Bridge" to create your Rune on Bitcoin and
                                bridge it to Starknet atomically.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30 dark:bg-black/40 light:bg-white/80">
                        <CardHeader>
                          <CardTitle className="text-purple-400 text-lg">Testnet Resources</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 p-4 md:p-6">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                              Starknet Sepolia Faucet
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => window.open("https://starknet-faucet.vercel.app/", "_blank")}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                              Bitcoin Testnet Faucet
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => window.open("https://coinfaucet.eu/en/btc-testnet/", "_blank")}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                              Starkscan Explorer
                            </span>
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

                      <Card className="bg-black/40 backdrop-blur-sm border-green-500/30 dark:bg-black/40 light:bg-white/80">
                        <CardHeader>
                          <CardTitle className="text-green-400 text-lg">Next Steps</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 p-4 md:p-6">
                          <Link href="/docs/architecture">
                            <Button
                              variant="ghost"
                              className="w-full justify-start text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white text-sm"
                            >
                              <ArrowRight className="h-4 w-4 mr-2" />
                              Learn the Architecture
                            </Button>
                          </Link>
                          <Link href="/docs/bridge-guide">
                            <Button
                              variant="ghost"
                              className="w-full justify-start text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white text-sm"
                            >
                              <ArrowRight className="h-4 w-4 mr-2" />
                              Bridge Guide
                            </Button>
                          </Link>
                          <Link href="/docs/api">
                            <Button
                              variant="ghost"
                              className="w-full justify-start text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white text-sm"
                            >
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
                    <Card className="bg-black/40 backdrop-blur-sm border-blue-500/30 dark:bg-black/40 light:bg-white/80">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-blue-400 text-lg md:text-xl">
                          <Bitcoin className="h-5 w-5 md:h-6 md:w-6" />
                          Bitcoin Runes
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 p-4 md:p-6">
                        <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm md:text-base">
                          Bitcoin Runes are a new token standard built on Bitcoin, similar to how ERC-20 tokens work on
                          Ethereum. They use Bitcoin's UTXO model and are embedded in Bitcoin transactions through the
                          witness field.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              Key Features
                            </h4>
                            <ul className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 space-y-1">
                              <li>• Native Bitcoin integration</li>
                              <li>• UTXO-based transactions</li>
                              <li>• Witness field embedding</li>
                              <li>• Minimal blockchain bloat</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              Use Cases
                            </h4>
                            <ul className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 space-y-1">
                              <li>• Meme tokens</li>
                              <li>• Digital collectibles</li>
                              <li>• Gaming assets</li>
                              <li>• Community tokens</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30 dark:bg-black/40 light:bg-white/80">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-purple-400 text-lg md:text-xl">
                          <Bridge className="h-5 w-5 md:h-6 md:w-6" />
                          Atomic Bridging
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 p-4 md:p-6">
                        <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm md:text-base">
                          Our atomic bridging technology ensures that Rune creation and Starknet bridging happen in a
                          single, indivisible operation. This eliminates the risk of failed partial transactions.
                        </p>
                        <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                          <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-3 text-sm md:text-base">
                            Bridge Flow
                          </h4>
                          <div className="flex flex-col md:flex-row items-center gap-2 text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 overflow-x-auto">
                            <span className="px-2 py-1 bg-orange-500/20 rounded whitespace-nowrap">Bitcoin Etch</span>
                            <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
                            <span className="px-2 py-1 bg-blue-500/20 rounded whitespace-nowrap">Starkgate</span>
                            <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
                            <span className="px-2 py-1 bg-purple-500/20 rounded whitespace-nowrap">Starknet Token</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/40 backdrop-blur-sm border-green-500/30 dark:bg-black/40 light:bg-white/80">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-400 text-lg md:text-xl">
                          <Code className="h-5 w-5 md:h-6 md:w-6" />
                          Smart Contracts
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 p-4 md:p-6">
                        <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm md:text-base">
                          Rune Etcher uses a suite of Cairo smart contracts deployed on Starknet to manage Rune tokens,
                          factory operations, and bridging functionality.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm">
                              RuneToken
                            </h4>
                            <p className="text-xs text-gray-300 dark:text-gray-300 light:text-gray-600">
                              ERC-20 compatible token with Rune-specific metadata
                            </p>
                          </div>
                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm">
                              RuneFactory
                            </h4>
                            <p className="text-xs text-gray-300 dark:text-gray-300 light:text-gray-600">
                              Deploys new Rune tokens and manages creation
                            </p>
                          </div>
                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm">
                              RuneBridge
                            </h4>
                            <p className="text-xs text-gray-300 dark:text-gray-300 light:text-gray-600">
                              Handles atomic bridging operations
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="tutorials">
                  <div className="grid gap-6">
                    <Card className="bg-black/40 backdrop-blur-sm border-orange-500/30 dark:bg-black/40 light:bg-white/80">
                      <CardHeader>
                        <CardTitle className="text-orange-400 text-lg md:text-xl">Step-by-Step Tutorials</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6 p-4 md:p-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              🚀 Creating Your First Meme Rune
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3 text-xs md:text-sm">
                              Learn how to create a viral meme Rune from scratch using our templates.
                            </p>
                            <div className="flex gap-2">
                              <Badge variant="secondary" className="text-xs">
                                Beginner
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                5 min
                              </Badge>
                            </div>
                          </div>

                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              ⚡ Advanced Rune Configuration
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3 text-xs md:text-sm">
                              Deep dive into custom supply mechanics, premine strategies, and tokenomics.
                            </p>
                            <div className="flex gap-2">
                              <Badge variant="secondary" className="text-xs">
                                Advanced
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                15 min
                              </Badge>
                            </div>
                          </div>

                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              🌉 Understanding the Bridge
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3 text-xs md:text-sm">
                              How atomic bridging works and how to monitor your transactions.
                            </p>
                            <div className="flex gap-2">
                              <Badge variant="secondary" className="text-xs">
                                Intermediate
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                10 min
                              </Badge>
                            </div>
                          </div>

                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              📊 Analyzing Rune Performance
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3 text-xs md:text-sm">
                              Use the leaderboard and analytics to track your Rune's success.
                            </p>
                            <div className="flex gap-2">
                              <Badge variant="secondary" className="text-xs">
                                Intermediate
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                8 min
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="troubleshooting">
                  <div className="grid gap-6">
                    <Card className="bg-black/40 backdrop-blur-sm border-red-500/30 dark:bg-black/40 light:bg-white/80">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-red-400 text-lg md:text-xl">
                          <AlertTriangle className="h-5 w-5 md:h-6 md:w-6" />
                          Common Issues
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 p-4 md:p-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              Wallet Connection Failed
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-2 text-xs md:text-sm">
                              If your wallet won't connect:
                            </p>
                            <ul className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 space-y-1 ml-4">
                              <li>• Ensure you're on Starknet Sepolia testnet</li>
                              <li>• Refresh the page and try again</li>
                              <li>• Check if your wallet extension is enabled</li>
                              <li>• Try a different wallet (Argent X, Braavos)</li>
                            </ul>
                          </div>

                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              Transaction Failed
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-2 text-xs md:text-sm">
                              If your Rune creation fails:
                            </p>
                            <ul className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 space-y-1 ml-4">
                              <li>• Check you have enough ETH for gas fees</li>
                              <li>• Verify the ticker isn't already taken</li>
                              <li>• Ensure total supply is greater than premine</li>
                              <li>• Wait for network congestion to clear</li>
                            </ul>
                          </div>

                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              Bridge Stuck
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-2 text-xs md:text-sm">
                              If bridging takes too long:
                            </p>
                            <ul className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 space-y-1 ml-4">
                              <li>• Bitcoin confirmations can take 10-60 minutes</li>
                              <li>• Check transaction status on block explorers</li>
                              <li>• Contact support if stuck for over 2 hours</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/40 backdrop-blur-sm border-green-500/30 dark:bg-black/40 light:bg-white/80">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-400 text-lg md:text-xl">
                          <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />
                          Getting Help
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 p-4 md:p-6">
                        <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm md:text-base">
                          Still having issues? Here's how to get support:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Button
                            variant="outline"
                            className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 bg-transparent text-sm"
                          >
                            Join Discord
                          </Button>
                          <Button
                            variant="outline"
                            className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 bg-transparent text-sm"
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
                    <Card className="bg-black/40 backdrop-blur-sm border-yellow-500/30 dark:bg-black/40 light:bg-white/80">
                      <CardHeader>
                        <CardTitle className="text-yellow-400 text-lg md:text-xl">Frequently Asked Questions</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6 p-4 md:p-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              What are Bitcoin Runes?
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-xs md:text-sm">
                              Bitcoin Runes are a new token standard on Bitcoin that allows for the creation of fungible
                              tokens directly on the Bitcoin blockchain using the UTXO model.
                            </p>
                          </div>

                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              How much does it cost to create a Rune?
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-xs md:text-sm">
                              You only pay network fees - Bitcoin transaction fees for etching and Starknet gas fees for
                              bridging. There are no additional platform fees.
                            </p>
                          </div>

                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              Can I use my Runes in DeFi?
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-xs md:text-sm">
                              Yes! Once bridged to Starknet, your Runes become ERC-20 compatible tokens that can be used
                              in any Starknet DeFi protocol.
                            </p>
                          </div>

                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              Is this safe?
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-xs md:text-sm">
                              Our smart contracts use OpenZeppelin components and follow security best practices.
                              However, this is testnet software - only use testnet funds.
                            </p>
                          </div>

                          <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                            <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                              Can I bridge back to Bitcoin?
                            </h3>
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-xs md:text-sm">
                              Currently, bridging is one-way from Bitcoin to Starknet. Two-way bridging is planned for
                              future releases.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
