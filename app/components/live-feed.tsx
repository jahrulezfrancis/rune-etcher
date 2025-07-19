"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw, ExternalLink, Zap, Activity } from "lucide-react"

interface FeedItem {
  id: string
  type: "etch" | "bridge" | "trade"
  ticker: string
  amount?: string
  location?: string
  timestamp: Date
  txHash: string
  user: string
}

export function LiveFeed() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const mockFeedItems: FeedItem[] = [
    {
      id: "1",
      type: "etch",
      ticker: "$MOON",
      amount: "1,000,000",
      location: "Tokyo",
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      txHash: "a1b2c3d4e5f6789012345678901234567890123456789012345678901234567890",
      user: "0x1234567890abcdef1234567890abcdef12345678",
    },
    {
      id: "2",
      type: "bridge",
      ticker: "$FIREGOD",
      amount: "500,000",
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      txHash: "0x789abc012def345678901234567890abcdef123456789012345678901234567890",
      user: "0x9876543210fedcba9876543210fedcba98765432",
    },
    {
      id: "3",
      type: "etch",
      ticker: "$CATGOD",
      amount: "2,000,000",
      location: "New York",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      txHash: "def456789012345678901234567890abcdef123456789012345678901234567890",
      user: "0x5555666677778888999900001111222233334444",
    },
    {
      id: "4",
      type: "bridge",
      ticker: "$DOGE",
      amount: "10,000,000",
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      txHash: "0x012345678901234567890abcdef123456789012345678901234567890abcdef12",
      user: "0x7777888899990000111122223333444455556666",
    },
    {
      id: "5",
      type: "etch",
      ticker: "$PEPE",
      amount: "5,000,000",
      location: "London",
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      txHash: "jkl012345678901234567890abcdef123456789012345678901234567890abcdef",
      user: "0x2222333344445555666677778888999900001111",
    },
  ]

  useEffect(() => {
    setFeedItems(mockFeedItems)
  }, [])

  const refreshFeed = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Add a new mock item
    const newItem: FeedItem = {
      id: Date.now().toString(),
      type: Math.random() > 0.5 ? "etch" : "bridge",
      ticker: `$${["MOON", "FIRE", "DOGE", "PEPE", "CHAD"][Math.floor(Math.random() * 5)]}`,
      amount: `${Math.floor(Math.random() * 10000000).toLocaleString()}`,
      location: ["Tokyo", "New York", "London", "Berlin", "Sydney"][Math.floor(Math.random() * 5)],
      timestamp: new Date(),
      txHash: Math.random().toString(36).substring(2, 15),
      user: `0x${Math.random().toString(16).substring(2, 6)}...${Math.random().toString(16).substring(2, 6)}`,
    }

    setFeedItems((prev) => [newItem, ...prev])
    setIsLoading(false)
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "etch":
        return <Zap className="h-4 w-4 text-orange-400 flex-shrink-0" />
      case "bridge":
        return <Activity className="h-4 w-4 text-purple-400 flex-shrink-0" />
      default:
        return <Zap className="h-4 w-4 text-blue-400 flex-shrink-0" />
    }
  }

  const getActivityText = (item: FeedItem) => {
    switch (item.type) {
      case "etch":
        return `🪬 ${item.ticker} etched${item.location ? ` from ${item.location}` : ""}`
      case "bridge":
        return `🔥 ${item.ticker} bridged to Starknet`
      default:
        return `${item.ticker} activity`
    }
  }

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
    return `${Math.floor(diffInMinutes / 1440)}d ago`
  }

  const openTxLink = (item: FeedItem) => {
    if (item.type === "etch") {
      // Bitcoin testnet transaction
      window.open(`https://mempool.space/testnet/tx/${item.txHash}`, "_blank")
    } else {
      // Starknet Sepolia transaction
      window.open(`https://sepolia.starkscan.co/tx/${item.txHash}`, "_blank")
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
      <Card className="bg-black/40 backdrop-blur-sm border-blue-500/30 dark:bg-black/40 light:bg-white/80">
        <CardHeader className="pb-3 sm:pb-6">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="flex items-center gap-2 text-blue-400 text-base sm:text-lg md:text-xl">
              📡 <span className="hidden xs:inline">Live Rune Activity</span>
              <span className="xs:hidden">Activity</span>
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={refreshFeed}
              disabled={isLoading}
              className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 bg-transparent px-2 sm:px-3"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""} sm:mr-2`} />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-2 sm:p-4 md:p-6">
          <div className="space-y-3 sm:space-y-4">
            {feedItems.map((item) => (
              <div
                key={item.id}
                className="p-3 sm:p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg hover:bg-gray-800/50 dark:hover:bg-gray-800/50 light:hover:bg-gray-200 transition-colors"
              >
                {/* Mobile Layout (< sm) */}
                <div className="block sm:hidden">
                  <div className="flex items-start gap-3 mb-2">
                    {getActivityIcon(item.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-white dark:text-white light:text-gray-900 font-medium text-sm leading-tight">
                        {getActivityText(item)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openTxLink(item)}
                      className="text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900 p-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between gap-2 ml-7">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 truncate">
                        by {item.user.slice(0, 6)}...{item.user.slice(-4)}
                      </span>
                      {item.amount && (
                        <Badge variant="secondary" className="text-xs whitespace-nowrap">
                          {item.amount}
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 whitespace-nowrap">
                      {formatTimeAgo(item.timestamp)}
                    </span>
                  </div>
                </div>

                {/* Desktop Layout (>= sm) */}
                <div className="hidden sm:flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    {getActivityIcon(item.type)}
                    <div className="min-w-0 flex-1">
                      <p className="text-white dark:text-white light:text-gray-900 font-medium text-sm md:text-base truncate">
                        {getActivityText(item)}
                      </p>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-xs md:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 truncate">
                          by {item.user}
                        </span>
                        {item.amount && (
                          <Badge variant="secondary" className="text-xs">
                            {item.amount} tokens
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs md:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                      {formatTimeAgo(item.timestamp)}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openTxLink(item)}
                      className="text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900 p-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {feedItems.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm sm:text-base">
                No activity yet. Be the first to etch a Rune!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}