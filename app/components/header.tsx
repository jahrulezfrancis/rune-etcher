"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Wallet,
  ExternalLink,
  ChevronDown,
  Copy,
  Check,
  Menu,
  Home,
  BookOpen,
  Layers,
  BracketsIcon as Bridge,
  Code,
  Loader2,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useAccount, useDisconnect, useNetwork } from "@starknet-react/core"
import { WalletConnectionModal } from "./wallet-connection-modal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import HeaderLogo from "@/public/header_logo.png"







export function Header() {
  const [showWalletModal, setShowWalletModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const { theme, setTheme } = useTheme()
  const { address, isConnected, isConnecting } = useAccount()
  const { disconnect } = useDisconnect()
  const { chain } = useNetwork()
  const pathname = usePathname()

  // Smart navbar visibility on scroll
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Always show navbar at top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide navbar when scrolling down (after 100px)
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Show navbar when scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

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

  const getNetworkBadge = () => {
    if (!chain) return { name: "Unknown", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" }

    switch (chain.name.toLowerCase()) {
      case "sepolia":
        return { name: "Sepolia", color: "bg-green-500/20 text-green-400 border-green-500/30" }
      case "mainnet":
        return { name: "Mainnet", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" }
      default:
        return { name: chain.name, color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" }
    }
  }

  const networkBadge = getNetworkBadge()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Docs", href: "/docs", icon: BookOpen },
    { name: "Architecture", href: "/docs/architecture", icon: Layers },
    { name: "Bridge Guide", href: "/docs/bridge-guide", icon: Bridge },
    { name: "API Reference", href: "/docs/api", icon: Code },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-sm transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src={HeaderLogo} alt="Rune Etcher Logo" width={200} height={60} />
              <Badge variant="secondary" className={`hidden sm:flex ${networkBadge.color} text-xs`}>
                {networkBadge.name}
              </Badge>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`flex items-center gap-2 ${isActive(item.href)
                        ? "bg-orange-500/20 text-orange-400"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden xl:inline">{item.name}</span>
                    </Button>
                  </Link>
                )
              })}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              {/* Theme toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-300 hover:text-white hover:bg-white/10"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* GitHub link - hidden on mobile */}
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent text-xs"
                onClick={() => window.open("https://github.com/your-repo/rune-etcher", "_blank")}
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                GitHub
              </Button>

              {/* Wallet Connection */}
              {isConnected && address ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-orange-500 text-orange-400 hover:bg-orange-500/10 bg-transparent"
                    >
                      <Wallet className="h-3 w-3 mr-1" />
                      <span className="hidden sm:inline">{formatAddress(address)}</span>
                      <ChevronDown className="h-3 w-3 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-900 border-gray-700 dark:bg-gray-900 dark:border-gray-700 light:bg-white light:border-gray-300">
                    <DropdownMenuItem
                      onClick={copyAddress}
                      className="text-gray-300 hover:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 light:text-gray-700 light:hover:bg-gray-100"
                    >
                      {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                      {copied ? "Copied!" : "Copy Address"}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        const explorerUrl =
                          chain?.name.toLowerCase() === "sepolia"
                            ? `https://sepolia.starkscan.co/contract/${address}`
                            : `https://starkscan.co/contract/${address}`
                        window.open(explorerUrl, "_blank")
                      }}
                      className="text-gray-300 hover:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 light:text-gray-700 light:hover:bg-gray-100"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on Explorer
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => disconnect()}
                      className="text-red-400 hover:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/10"
                    >
                      Disconnect Wallet
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  onClick={() => setShowWalletModal(true)}
                  size="sm"
                  disabled={isConnecting}
                  className="bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50"
                >
                  <Wallet className="h-3 w-3 mr-1" />
                  {isConnecting ? (
                    <>
                      <Loader2 className="h-3 w-3 animate-spin" />
                      <span className="hidden sm:inline ml-1">Connecting...</span>
                    </>
                  ) : (
                    <span className="hidden sm:inline">Connect</span>
                  )}
                </Button>
              )}

              {/* Mobile menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden text-gray-300 hover:text-white">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-80 bg-gray-900 border-gray-700 dark:bg-gray-900 dark:border-gray-700 light:bg-white light:border-gray-300"
                >
                  <div className="flex flex-col space-y-4 mt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">
                        Navigation
                      </h2>
                      <Badge className={`${networkBadge.color} text-xs`}>{networkBadge.name}</Badge>
                    </div>

                    {navigation.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                          <Button
                            variant="ghost"
                            className={`w-full justify-start ${isActive(item.href)
                              ? "bg-orange-500/20 text-orange-400"
                              : "text-gray-300 hover:text-white hover:bg-white/10 dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900"
                              }`}
                          >
                            <Icon className="h-4 w-4 mr-3" />
                            {item.name}
                          </Button>
                        </Link>
                      )
                    })}

                    <div className="border-t border-gray-700 dark:border-gray-700 light:border-gray-300 pt-4">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/10 dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900"
                        onClick={() => window.open("https://github.com/your-repo/rune-etcher", "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-3" />
                        GitHub Repository
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[73px]" />

      <WalletConnectionModal isOpen={showWalletModal} onClose={() => setShowWalletModal(false)} />
    </>
  )
}

