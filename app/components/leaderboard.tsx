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
    <div className="max-w-6xl mx-auto">
      <Card className="bg-black/40 backdrop-blur-sm border-purple-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-400">
            <Trophy className="h-6 w-6" />🏆 Rune Leaderboard
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Tabs value={sortBy} onValueChange={(value) => setSortBy(value as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-800/50">
              <TabsTrigger value="supply" className="data-[state=active]:bg-purple-500">
                <Zap className="h-4 w-4 mr-2" />
                By Supply
              </TabsTrigger>
              <TabsTrigger value="volume" className="data-[state=active]:bg-blue-500">
                <TrendingUp className="h-4 w-4 mr-2" />
                By Volume
              </TabsTrigger>
              <TabsTrigger value="holders" className="data-[state=active]:bg-green-500">
                <Users className="h-4 w-4 mr-2" />
                By Holders
              </TabsTrigger>
            </TabsList>

            <div className="space-y-4">
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
        return <span className="text-2xl">🥇</span>
      case 2:
        return <span className="text-2xl">🥈</span>
      case 3:
        return <span className="text-2xl">🥉</span>
      default:
        return <span className="text-lg font-bold text-gray-400">#{rank}</span>
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
    <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
      <div className="flex items-center gap-4">
        {getRankIcon(entry.rank)}
        <div>
          <div className="flex items-center gap-2">
            <Badge className="bg-orange-500 text-white font-bold">{entry.ticker}</Badge>
            <span className="text-sm text-gray-400">by {entry.creator}</span>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div className="text-sm">
              <span className="text-gray-400">Supply:</span>
              <span className="text-white ml-1">{formatNumber(entry.totalSupply)}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-400">Bridged:</span>
              <span className="text-green-400 ml-1">{formatNumber(entry.bridgedAmount)}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-400">Holders:</span>
              <span className="text-blue-400 ml-1">{formatNumber(entry.holders)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-right">
        <div className={`text-lg font-bold ${highlightedMetric.color}`}>{highlightedMetric.value}</div>
        <div className="text-sm text-gray-400">{highlightedMetric.label}</div>
      </div>
    </div>
  )
}
