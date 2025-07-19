"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, TrendingUp, Users, Zap } from "lucide-react"

interface LeaderboardEntry {
  rank: number
  ticker: string
  creator: string
  totalSupply: number
  preminePercent: number
  bridgedAmount: number
  holders: number
  volume24h: number
}

export function Leaderboard() {
  const [sortBy, setSortBy] = useState<"supply" | "volume" | "holders">("supply")

  const mockLeaderboard: LeaderboardEntry[] = [
    {
      rank: 1,
      ticker: "$MOON",
      creator: "0x1234...5678",
      totalSupply: 21000000,
      preminePercent: 10,
      bridgedAmount: 15000000,
      holders: 1250,
      volume24h: 500000,
    },
    {
      rank: 2,
      ticker: "$FIREGOD",
      creator: "0x9876...5432",
      totalSupply: 10000000,
      preminePercent: 5,
      bridgedAmount: 8500000,
      holders: 890,
      volume24h: 350000,
    },
    {
      rank: 3,
      ticker: "$CATGOD",
      creator: "0x5555...1111",
      totalSupply: 50000000,
      preminePercent: 15,
      bridgedAmount: 30000000,
      holders: 2100,
      volume24h: 750000,
    },
    {
      rank: 4,
      ticker: "$DOGE",
      creator: "0x7777...3333",
      totalSupply: 100000000,
      preminePercent: 20,
      bridgedAmount: 60000000,
      holders: 3500,
      volume24h: 1200000,
    },
    {
      rank: 5,
      ticker: "$PEPE",
      creator: "0x2222...8888",
      totalSupply: 1000000000,
      preminePercent: 8,
      bridgedAmount: 800000000,
      holders: 5200,
      volume24h: 2100000,
    },
  ]

  // Properly implement filtering with useMemo for performance
  const sortedLeaderboard = useMemo(() => {
    const sorted = [...mockLeaderboard].sort((a, b) => {
      switch (sortBy) {
        case "supply":
          return b.totalSupply - a.totalSupply
        case "volume":
          return b.volume24h - a.volume24h
        case "holders":
          return b.holders - a.holders
        default:
          return 0
      }
    })

    // Update ranks based on current sorting
    return sorted.map((entry, index) => ({
      ...entry,
      rank: index + 1,
    }))
  }, [mockLeaderboard, sortBy])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toLocaleString()
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
      <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30 dark:bg-black/40 light:bg-white/80">
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-purple-400 text-base sm:text-lg md:text-xl">
            <Trophy className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
            🏆 <span className="hidden xs:inline">Rune Leaderboard</span>
            <span className="xs:hidden">Leaderboard</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-2 sm:p-4 md:p-6">
          <Tabs value={sortBy} onValueChange={(value) => setSortBy(value as any)} className="w-full">
            <div className="overflow-x-auto mb-4 sm:mb-6">
              <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200 min-w-[280px] sm:min-w-[400px]">
                <TabsTrigger value="supply" className="data-[state=active]:bg-purple-500 text-xs sm:text-sm px-2">
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="hidden sm:inline">By Supply</span>
                  <span className="sm:hidden">Supply</span>
                </TabsTrigger>
                <TabsTrigger value="volume" className="data-[state=active]:bg-blue-500 text-xs sm:text-sm px-2">
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="hidden sm:inline">By Volume</span>
                  <span className="sm:hidden">Volume</span>
                </TabsTrigger>
                <TabsTrigger value="holders" className="data-[state=active]:bg-green-500 text-xs sm:text-sm px-2">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="hidden sm:inline">By Holders</span>
                  <span className="sm:hidden">Holders</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {sortedLeaderboard.map((entry) => (
                <LeaderboardRow key={entry.ticker} entry={entry} sortBy={sortBy} />
              ))}
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function LeaderboardRow({ entry, sortBy }: { entry: LeaderboardEntry; sortBy: string }) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <span className="text-lg sm:text-2xl">🥇</span>
      case 2:
        return <span className="text-lg sm:text-2xl">🥈</span>
      case 3:
        return <span className="text-lg sm:text-2xl">🥉</span>
      default:
        return <span className="text-sm sm:text-lg font-bold text-gray-400">#{rank}</span>
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toLocaleString()
  }

  const getHighlightedMetric = () => {
    switch (sortBy) {
      case "supply":
        return { label: "Supply", value: formatNumber(entry.totalSupply), color: "text-purple-400" }
      case "volume":
        return { label: "24h Volume", value: `$${formatNumber(entry.volume24h)}`, color: "text-blue-400" }
      case "holders":
        return { label: "Holders", value: formatNumber(entry.holders), color: "text-green-400" }
      default:
        return { label: "Supply", value: formatNumber(entry.totalSupply), color: "text-white" }
    }
  }

  const highlightedMetric = getHighlightedMetric()

  return (
    <div className="p-3 sm:p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg hover:bg-gray-800/50 dark:hover:bg-gray-800/50 light:hover:bg-gray-200 transition-colors">
      
      {/* Mobile Layout (< sm) */}
      <div className="block sm:hidden">
        {/* Top Row: Rank + Ticker + Main Metric */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">{getRankIcon(entry.rank)}</div>
            <div>
              <Badge className="bg-orange-500 text-white font-bold text-sm mb-1">{entry.ticker}</Badge>
              <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 truncate">
                {entry.creator}
              </div>
            </div>
          </div>
          <div className={`text-right ${highlightedMetric.color}`}>
            <div className="text-xl font-bold leading-tight">{highlightedMetric.value}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">{highlightedMetric.label}</div>
          </div>
        </div>
        
        {/* Bottom Row: Key Metrics in Clean Cards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50 rounded-md p-2 text-center">
            <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mb-1">Supply</div>
            <div className="text-sm font-semibold text-white dark:text-white light:text-gray-900">
              {formatNumber(entry.totalSupply)}
            </div>
          </div>
          <div className="bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50 rounded-md p-2 text-center">
            <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mb-1">Holders</div>
            <div className="text-sm font-semibold text-blue-400">
              {formatNumber(entry.holders)}
            </div>
          </div>
          <div className="bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50 rounded-md p-2 text-center">
            <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mb-1">Volume</div>
            <div className="text-sm font-semibold text-purple-400">
              ${formatNumber(entry.volume24h)}
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout (sm to md) */}
      <div className="hidden sm:block md:hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">{getRankIcon(entry.rank)}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-orange-500 text-white font-bold text-sm">{entry.ticker}</Badge>
              </div>
              <span className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                by {entry.creator}
              </span>
            </div>
          </div>
          <div className={`text-right ${highlightedMetric.color}`}>
            <div className="text-xl font-bold">{highlightedMetric.value}</div>
            <div className="text-sm text-gray-400">{highlightedMetric.label}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Supply:</span>
            <span className="text-white dark:text-white light:text-gray-900">
              {formatNumber(entry.totalSupply)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Bridged:</span>
            <span className="text-green-400">{formatNumber(entry.bridgedAmount)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Holders:</span>
            <span className="text-blue-400">{formatNumber(entry.holders)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Volume:</span>
            <span className="text-purple-400">${formatNumber(entry.volume24h)}</span>
          </div>
        </div>
      </div>

      {/* Desktop Layout (>= md) */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <div className="flex-shrink-0">{getRankIcon(entry.rank)}</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-orange-500 text-white font-bold text-sm">{entry.ticker}</Badge>
              <span className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 truncate">
                by {entry.creator}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-sm">
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Supply:</span>
                <span className="text-white dark:text-white light:text-gray-900 ml-1">
                  {formatNumber(entry.totalSupply)}
                </span>
              </div>
              <div className="text-sm">
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Bridged:</span>
                <span className="text-green-400 ml-1">{formatNumber(entry.bridgedAmount)}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Holders:</span>
                <span className="text-blue-400 ml-1">{formatNumber(entry.holders)}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Volume:</span>
                <span className="text-purple-400 ml-1">${formatNumber(entry.volume24h)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-right flex-shrink-0 ml-4">
          <div className={`text-xl font-bold ${highlightedMetric.color}`}>{highlightedMetric.value}</div>
          <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
            {highlightedMetric.label}
          </div>
        </div>
      </div>
    </div>
  )
}