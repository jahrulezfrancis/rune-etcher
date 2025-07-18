"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Code, Rocket, Calendar, Users, Zap, Bell, ExternalLink, Github, Mail, MessageCircle } from "lucide-react"

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code className="h-8 w-8 text-green-400" />
              <h1 className="text-4xl font-bold text-white">API Reference</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive API documentation for integrating with Rune Etcher
            </p>
          </div>

          {/* Coming Soon Hero */}
          <Card className="bg-black/40 backdrop-blur-sm border-green-500/30 mb-8">
            <CardContent className="text-center py-16">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-12 w-12 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">API Documentation Coming Soon!</h2>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                We're working hard to bring you comprehensive API documentation that will allow developers to integrate
                Rune Etcher's functionality into their own applications.
              </p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <Calendar className="h-4 w-4 mr-1" />
                  Expected: Q2 2024
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* What's Coming */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <Card className="bg-black/40 backdrop-blur-sm border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <Zap className="h-6 w-6" />
                  Planned API Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Rune Creation API</h4>
                      <p className="text-sm text-gray-300">Programmatically create and deploy Runes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Bridge Status API</h4>
                      <p className="text-sm text-gray-300">Monitor bridge transactions in real-time</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Analytics API</h4>
                      <p className="text-sm text-gray-300">Access leaderboard and performance data</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Webhook Integration</h4>
                      <p className="text-sm text-gray-300">Real-time notifications for events</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <Code className="h-6 w-6" />
                  SDK & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">JavaScript SDK</h4>
                      <p className="text-sm text-gray-300">Full-featured SDK for web applications</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Python Library</h4>
                      <p className="text-sm text-gray-300">Python bindings for backend integration</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">React Components</h4>
                      <p className="text-sm text-gray-300">Pre-built UI components for React apps</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">CLI Tools</h4>
                      <p className="text-sm text-gray-300">Command-line interface for developers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Early Access */}
          <Card className="bg-black/40 backdrop-blur-sm border-orange-500/30 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-400">
                <Bell className="h-6 w-6" />
                Get Early Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-3">Developer Preview</h3>
                  <p className="text-gray-300 mb-4">
                    Join our developer preview program to get early access to API documentation, SDKs, and direct
                    feedback channels with our engineering team.
                  </p>
                  <Alert className="border-orange-500/30 bg-orange-500/10 mb-4">
                    <AlertDescription className="text-orange-400">
                      <strong>Limited spots available!</strong> Priority given to active contributors and early
                      adopters.
                    </AlertDescription>
                  </Alert>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Users className="h-4 w-4 mr-2" />
                    Join Developer Preview
                  </Button>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3">What You'll Get</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Early access to API documentation</li>
                    <li>• Beta SDK releases and testing</li>
                    <li>• Direct communication with dev team</li>
                    <li>• Influence on API design decisions</li>
                    <li>• Priority support and bug fixes</li>
                    <li>• Exclusive developer community access</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Preview */}
          <Card className="bg-black/40 backdrop-blur-sm border-gray-500/30 mb-8">
            <CardHeader>
              <CardTitle className="text-gray-400">API Preview (Coming Soon)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Rune Creation Endpoint</h3>
                  <div className="bg-gray-900/50 p-3 rounded font-mono text-sm">
                    <div className="text-green-400">POST /api/v1/runes</div>
                    <div className="text-gray-400 mt-2">
                      {`{
  "ticker": "MOON",
  "totalSupply": "1000000",
  "premineAmount": "100000",
  "description": "To the moon!",
  "enableBridge": true
}`}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Bridge Status Endpoint</h3>
                  <div className="bg-gray-900/50 p-3 rounded font-mono text-sm">
                    <div className="text-blue-400">GET /api/v1/bridge/status/:txHash</div>
                    <div className="text-gray-400 mt-2">
                      {`{
  "status": "confirmed",
  "bitcoinTx": "abc123...",
  "starknetTx": "0x456def...",
  "confirmations": 6
}`}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Leaderboard Endpoint</h3>
                  <div className="bg-gray-900/50 p-3 rounded font-mono text-sm">
                    <div className="text-purple-400">GET /api/v1/leaderboard?sortBy=volume</div>
                    <div className="text-gray-400 mt-2">
                      {`{
  "runes": [
    {
      "ticker": "MOON",
      "volume24h": 500000,
      "holders": 1250
    }
  ]
}`}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Community */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black/40 backdrop-blur-sm border-blue-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <MessageCircle className="h-6 w-6" />
                  Discord
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Join our developer community for real-time discussions and support.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10 bg-transparent"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Join Discord
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <Github className="h-6 w-6" />
                  GitHub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Contribute to the project, report issues, and track development progress.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 bg-transparent"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Repository
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <Mail className="h-6 w-6" />
                  Email Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Get notified when API documentation and SDKs are released.</p>
                <Button
                  variant="outline"
                  className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
