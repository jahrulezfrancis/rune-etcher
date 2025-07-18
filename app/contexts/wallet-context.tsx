"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { connect, disconnect } from "starknetkit"
import type { AccountInterface, ProviderInterface } from "starknet"

interface WalletContextType {
  isConnected: boolean
  address: string | null
  account: AccountInterface | null
  provider: ProviderInterface | null
  isConnecting: boolean
  error: string | null
  connectWallet: (walletId: string) => Promise<void>
  disconnectWallet: () => void
  isMobile: boolean
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [account, setAccount] = useState<AccountInterface | null>(null)
  const [provider, setProvider] = useState<ProviderInterface | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      )
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Auto-reconnect if previously connected
    const autoConnect = async () => {
      try {
        const lastUsedConnector = localStorage.getItem("lastUsedConnector")
        if (lastUsedConnector) {
          const { wallet } = await connect({
            modalMode: "neverAsk",
            webWalletUrl: "https://web.argent.xyz",
            argentMobileOptions: {
              dappName: "Rune Etcher",
              url: window.location.hostname,
              chainId: "SN_SEPOLIA",
            },
          })

          if (wallet && wallet.isConnected) {
            setAccount(wallet.account)
            setProvider(wallet.provider)
            setAddress(wallet.selectedAddress)
            setIsConnected(true)
          }
        }
      } catch (error) {
        console.log("Auto-connect failed:", error)
      }
    }

    autoConnect()

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const connectWallet = async (walletId: string) => {
    setIsConnecting(true)
    setError(null)

    try {
      const { wallet } = await connect({
        webWalletUrl: "https://web.argent.xyz",
        argentMobileOptions: {
          dappName: "Rune Etcher",
          url: window.location.hostname,
          chainId: "SN_SEPOLIA",
        },
        modalMode: "canAsk",
        modalTheme: "dark",
        storeVersion: "chrome",
      })

      if (wallet && wallet.isConnected) {
        setAccount(wallet.account)
        setProvider(wallet.provider)
        setAddress(wallet.selectedAddress)
        setIsConnected(true)

        // Store the connector for auto-reconnect
        localStorage.setItem("lastUsedConnector", walletId)
      } else {
        throw new Error("Failed to connect wallet")
      }
    } catch (err: any) {
      console.error("Wallet connection error:", err)
      setError(err.message || "Failed to connect wallet. Please try again.")
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = async () => {
    try {
      await disconnect()
      setIsConnected(false)
      setAddress(null)
      setAccount(null)
      setProvider(null)
      setError(null)

      // Clear stored connector
      localStorage.removeItem("lastUsedConnector")
    } catch (error) {
      console.error("Disconnect error:", error)
    }
  }

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        address,
        account,
        provider,
        isConnecting,
        error,
        connectWallet,
        disconnectWallet,
        isMobile,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}
