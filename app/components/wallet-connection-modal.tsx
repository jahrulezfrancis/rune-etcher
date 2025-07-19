"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertTriangle, Wallet, X } from "lucide-react"
import { useConnect, useDisconnect } from "@starknet-react/core"
import { useState, useEffect } from "react"

interface WalletConnectionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WalletConnectionModal({ isOpen, onClose }: WalletConnectionModalProps) {
  const { connect, connectors, isPending, error } = useConnect()
  const { disconnect } = useDisconnect()
  const [isConnecting, setIsConnecting] = useState(false)

  // Close modal when connection is successful
  useEffect(() => {
    if (!isPending && !error && isConnecting) {
      setIsConnecting(false)
      onClose()
    }
  }, [isPending, error, isConnecting, onClose])

  const handleConnect = async (connector: any) => {
    try {
      setIsConnecting(true)
      // Disconnect any existing connection first
      await disconnect()
      // Connect with the selected connector
      connect({ connector })
    } catch (err) {
      console.error("Connection failed:", err)
      setIsConnecting(false)
    }
  }

  const getWalletIcon = (connectorId: string) => {
    switch (connectorId) {
      case "argentX":
        return "🦊"
      case "braavos":
        return "🛡️"
      case "argentWebWallet":
        return "🌐"
      default:
        return "👛"
    }
  }

  const getWalletColor = (connectorId: string) => {
    switch (connectorId) {
      case "argentX":
        return "bg-orange-500"
      case "braavos":
        return "bg-blue-500"
      case "argentWebWallet":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getWalletDescription = (connectorId: string) => {
    switch (connectorId) {
      case "argentX":
        return "Most popular Starknet wallet"
      case "braavos":
        return "Advanced Starknet wallet with additional features"
      case "argentWebWallet":
        return "Browser-based wallet solution"
      default:
        return "Starknet wallet"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 dark:bg-gray-900 dark:border-gray-700 light:bg-white light:border-gray-300 max-w-[95vw] mx-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-white dark:text-white light:text-gray-900">
              <Wallet className="h-5 w-5" />
              Connect Wallet
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6 text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-gray-300 dark:text-gray-300 light:text-gray-600">
            Choose your preferred Starknet wallet to connect to Sepolia testnet
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 p-1">
          {error && (
            <Alert className="border-red-500/30 bg-red-500/10">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-red-400 text-sm">
                {error.message || "Failed to connect wallet. Please try again."}
              </AlertDescription>
            </Alert>
          )}

          <div className="grid gap-3">
            {connectors.map((connector) => (
              <Button
                key={connector.id}
                onClick={() => handleConnect(connector)}
                disabled={isPending || isConnecting}
                className="flex items-center justify-between p-4 h-auto bg-gray-800 hover:bg-gray-700 border border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 light:bg-gray-50 light:hover:bg-gray-100 light:border-gray-300 w-full"
                variant="outline"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 ${getWalletColor(connector.id)} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white text-sm">{getWalletIcon(connector.id)}</span>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <div className="font-medium text-white dark:text-white light:text-gray-900 text-sm">
                      {connector.name}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 truncate">
                      {getWalletDescription(connector.id)}
                    </div>
                  </div>
                </div>
                {(isPending || isConnecting) && (
                  <Loader2 className="h-4 w-4 animate-spin flex-shrink-0 text-orange-400" />
                )}
              </Button>
            ))}
          </div>

          {connectors.length === 0 && (
            <div className="text-center py-8">
              <Wallet className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                No Starknet wallets detected. Please install Argent X or Braavos.
              </p>
              <div className="flex gap-2 justify-center mt-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open("https://www.argent.xyz/argent-x/", "_blank")}
                  className="text-xs"
                >
                  Install Argent X
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open("https://braavos.app/", "_blank")}
                  className="text-xs"
                >
                  Install Braavos
                </Button>
              </div>
            </div>
          )}

          <div className="text-center text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mt-4 space-y-1">
            <p>Make sure you're connected to Starknet Sepolia testnet</p>
            <p>Need testnet ETH? Visit the Starknet faucet</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
