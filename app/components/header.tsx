"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, Wallet, ExternalLink, ChevronDown, Copy, Check } from "lucide-react"
import { useTheme } from "next-themes"
import { useWallet } from "../contexts/wallet-context"
import { WalletConnectionModal } from "./wallet-connection-modal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [showWalletModal, setShowWalletModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const { theme, setTheme } = useTheme()
  const { isConnected, address, disconnectWallet } = useWallet()

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  return (
    <>
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-orange-400">⚡ Rune Etcher</div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                Sepolia
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-300 hover:text-white"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                onClick={() => window.open("https://github.com/your-repo/rune-etcher", "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                GitHub
              </Button>

              {isConnected ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-orange-500 text-orange-400 hover:bg-orange-500/10 bg-transparent"
                    >
                      <Wallet className="h-4 w-4 mr-2" />
                      {address && formatAddress(address)}
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-900 border-gray-700">
                    <DropdownMenuItem onClick={copyAddress} className="text-gray-300 hover:bg-gray-800">
                      {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                      {copied ? "Copied!" : "Copy Address"}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => window.open(`https://sepolia.starkscan.co/contract/${address}`, "_blank")}
                      className="text-gray-300 hover:bg-gray-800"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on Explorer
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={disconnectWallet} className="text-red-400 hover:bg-red-500/10">
                      Disconnect Wallet
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  onClick={() => setShowWalletModal(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Wallet className="h-4 w-4 mr-2" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <WalletConnectionModal isOpen={showWalletModal} onClose={() => setShowWalletModal(false)} />
    </>
  )
}
