"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import {
  BracketsIcon as Bridge,
  Bitcoin,
  Clock,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Zap,
  Eye,
} from "lucide-react"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Breadcrumb } from "../../components/breadcrumb"

export default function BridgeGuidePage() {
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
              <Bridge className="h-6 md:h-8 w-6 md:w-8 text-blue-400" />
              <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900">
                Bridge Guide
              </h1>
            </div>
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 light:text-gray-600">
                Complete guide to bridging Bitcoin Runes to Starknet using atomic cross-chain technology
              </p>
            </div>
          </div>

          {/* Bridge Process Overview */}
          <Card className="bg-black/40 backdrop-blur-sm border-blue-500/30 dark:bg-black/40 light:bg-white/80 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-400 text-lg md:text-xl">How Atomic Bridging Works</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-6">
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm md:text-base">
                  Rune Etcher uses atomic bridging to ensure that Rune creation on Bitcoin and token deployment on
                  Starknet happen as a single, indivisible operation. This eliminates the risk of partial failures.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-400 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      Etch Rune
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                      Create Rune on Bitcoin using witness field
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-400 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      Lock & Verify
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                      Lock Runes and generate proof of creation
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-400 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      Bridge Transfer
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                      Relay proof through Starkgate bridge
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-400 font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      Mint on Starknet
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                      Deploy ERC-20 token on Starknet
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step-by-Step Guide */}
          <Card className="bg-black/40 backdrop-blur-sm border-green-500/30 dark:bg-black/40 light:bg-white/80 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400 text-lg md:text-xl">
                <Zap className="h-5 md:h-6 w-5 md:w-6" />
                Step-by-Step Bridging
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-4 md:p-6">
              <Alert className="border-blue-500/30 bg-blue-500/10">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-blue-400 text-sm">
                  <strong>Before you start:</strong> Ensure you have testnet ETH for gas fees and your wallet is
                  connected to Starknet Sepolia.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4 p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      Configure Your Rune
                    </h3>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3 text-xs md:text-sm">
                      Fill in the etching form with your Rune details:
                    </p>
                    <ul className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 space-y-1 ml-4">
                      <li>
                        • <strong>Ticker:</strong> Choose a unique symbol (e.g., $MOON, FIRE)
                      </li>
                      <li>
                        • <strong>Total Supply:</strong> Maximum number of tokens
                      </li>
                      <li>
                        • <strong>Premine:</strong> Tokens minted to creator (optional)
                      </li>
                      <li>
                        • <strong>Description:</strong> Brief description of your Rune
                      </li>
                    </ul>
                    <div className="mt-3">
                      <Badge variant="secondary" className="text-xs">
                        Auto-bridge enabled by default
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      Initiate Bridge Transaction
                    </h3>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3 text-xs md:text-sm">
                      Click "Etch & Bridge Rune" to start the atomic process:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs md:text-sm">
                        <Clock className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                          Validating parameters...
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm">
                        <Clock className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                          Creating Bitcoin transaction...
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs md:text-sm">
                        <Clock className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">
                          Broadcasting to network...
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      Monitor Bridge Progress
                    </h3>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3 text-xs md:text-sm">
                      Track your transaction through multiple confirmations:
                    </p>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-700/30 rounded">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                            Bitcoin Confirmation
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            10-60 min
                          </Badge>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div className="p-3 bg-gray-700/30 rounded">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                            Starknet Deployment
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            1-5 min
                          </Badge>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4 p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                      Bridge Complete
                    </h3>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3 text-xs md:text-sm">
                      Your Rune is now available on both networks:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded">
                        <div className="flex items-center gap-2 mb-1">
                          <Bitcoin className="h-4 w-4 text-orange-400" />
                          <span className="text-xs md:text-sm font-semibold text-white dark:text-white light:text-gray-900">
                            Bitcoin Rune
                          </span>
                        </div>
                        <p className="text-xs text-gray-300 dark:text-gray-300 light:text-gray-600">
                          Original Rune on Bitcoin network
                        </p>
                      </div>
                      <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded">
                        <div className="flex items-center gap-2 mb-1">
                          <Bridge className="h-4 w-4 text-purple-400" />
                          <span className="text-xs md:text-sm font-semibold text-white dark:text-white light:text-gray-900">
                            Starknet Token
                          </span>
                        </div>
                        <p className="text-xs text-gray-300 dark:text-gray-300 light:text-gray-600">
                          ERC-20 compatible token
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monitoring Tools */}
          <Card className="bg-black/40 backdrop-blur-sm border-yellow-500/30 dark:bg-black/40 light:bg-white/80 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400 text-lg md:text-xl">
                <Eye className="h-5 md:h-6 w-5 md:w-6" />
                Monitoring Your Bridge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 md:p-6">
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm md:text-base">
                Use these tools to track your bridge transaction across both networks:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 text-sm md:text-base">
                    Bitcoin Network
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded">
                      <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                        Mempool.space
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open("https://mempool.space/testnet", "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded">
                      <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                        Blockstream Explorer
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open("https://blockstream.info/testnet/", "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 text-sm md:text-base">
                    Starknet Network
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded">
                      <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">Starkscan</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open("https://sepolia.starkscan.co/", "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded">
                      <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">Voyager</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open("https://sepolia.voyager.online/", "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card className="bg-black/40 backdrop-blur-sm border-red-500/30 dark:bg-black/40 light:bg-white/80 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-400 text-lg md:text-xl">
                <AlertTriangle className="h-5 md:h-6 w-5 md:w-6" />
                Common Bridge Issues
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 md:p-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Bridge Taking Too Long
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-2 text-xs md:text-sm">
                    If your bridge is stuck:
                  </p>
                  <ul className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 space-y-1 ml-4">
                    <li>• Bitcoin confirmations can take 10-60 minutes during high congestion</li>
                    <li>• Check transaction status on block explorers</li>
                    <li>• Ensure sufficient gas fees were paid</li>
                    <li>• Contact support if stuck for over 2 hours</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Transaction Failed
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-2 text-xs md:text-sm">
                    Common failure reasons:
                  </p>
                  <ul className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 space-y-1 ml-4">
                    <li>• Insufficient ETH for gas fees</li>
                    <li>• Ticker already exists</li>
                    <li>• Invalid Rune parameters</li>
                    <li>• Network congestion</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-2 text-sm md:text-base">
                    Partial Bridge
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-2 text-xs md:text-sm">
                    If only one side completed:
                  </p>
                  <ul className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 space-y-1 ml-4">
                    <li>• This shouldn't happen with atomic bridging</li>
                    <li>• Check both explorers for transaction status</li>
                    <li>• Contact support immediately</li>
                    <li>• Provide both transaction hashes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="bg-black/40 backdrop-blur-sm border-green-500/30 dark:bg-black/40 light:bg-white/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400 text-lg md:text-xl">
                <CheckCircle className="h-5 md:h-6 w-5 md:w-6" />
                Bridge Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-3 text-sm md:text-base">
                    Before Bridging
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    <li>• Ensure wallet is connected to Sepolia testnet</li>
                    <li>• Have sufficient ETH for gas fees (~$0.01)</li>
                    <li>• Double-check Rune ticker availability</li>
                    <li>• Verify total supply and premine amounts</li>
                    <li>• Test with small amounts first</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 mb-3 text-sm md:text-base">
                    During Bridge
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    <li>• Don't close browser during process</li>
                    <li>• Monitor transaction on both networks</li>
                    <li>• Be patient - Bitcoin confirmations take time</li>
                    <li>• Save transaction hashes for reference</li>
                    <li>• Contact support if issues arise</li>
                  </ul>
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
