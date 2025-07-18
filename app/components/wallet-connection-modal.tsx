"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Smartphone, Monitor, AlertTriangle } from "lucide-react"
import { useWallet } from "../contexts/wallet-context"

interface WalletConnectionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WalletConnectionModal({ isOpen, onClose }: WalletConnectionModalProps) {
  const { connectWallet, isConnecting, error, isMobile } = useWallet()

  const handleConnect = async (walletId: string) => {
    await connectWallet(walletId)
    if (!error) {
      onClose()
    }
  }

  const wallets = [
    {
      id: "argentX",
      name: "Argent X",
      description: "Most popular Starknet wallet",
      icon: "🦊",
      color: "bg-orange-500",
      available: typeof window !== "undefined" && (window as any).starknet_argentX,
    },
    {
      id: "braavos",
      name: "Braavos",
      description: "Advanced Starknet wallet",
      icon: "🛡️",
      color: "bg-blue-500",
      available: typeof window !== "undefined" && (window as any).starknet_braavos,
    },
    {
      id: "argentWebWallet",
      name: "Argent Web Wallet",
      description: "Browser-based wallet",
      icon: "🌐",
      color: "bg-purple-500",
      available: true,
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            {isMobile ? <Smartphone className="h-5 w-5" /> : <Monitor className="h-5 w-5" />}
            Connect Starknet Wallet
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Choose your preferred Starknet wallet to connect to Sepolia testnet
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {error && (
            <Alert className="border-red-500/30 bg-red-500/10">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-red-400">{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid gap-3">
            {wallets.map((wallet) => (
              <Button
                key={wallet.id}
                onClick={() => handleConnect(wallet.id)}
                disabled={isConnecting || (!wallet.available && !isMobile)}
                className="flex items-center justify-between p-4 h-auto bg-gray-800 hover:bg-gray-700 border border-gray-600"
                variant="outline"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${wallet.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-sm">{wallet.icon}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-white">{wallet.name}</div>
                    <div className="text-sm text-gray-400">{wallet.description}</div>
                    {!wallet.available && !isMobile && <div className="text-xs text-red-400">Not installed</div>}
                  </div>
                </div>
                {isConnecting && <Loader2 className="h-4 w-4 animate-spin" />}
              </Button>
            ))}
          </div>

          <div className="text-center text-sm text-gray-400 mt-4">
            <p>Make sure you're connected to Starknet Sepolia testnet</p>
            {isMobile && (
              <p className="mt-2">Don't have a wallet? Tap on your preferred option to install from the app store.</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
