import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WalletProvider } from "./contexts/wallet-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rune Etcher - Bitcoin Runes Mint + Bridge DApp",
  description: "Etch Bitcoin Runes and bridge them atomically to Starknet. Make it memeable. Make it legendary.",
  keywords: "Bitcoin, Runes, Starknet, Bridge, DApp, Meme, Crypto",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <WalletProvider>{children}</WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
