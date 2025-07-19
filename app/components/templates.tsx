"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, Zap, TrendingUp, Star } from "lucide-react"

interface Template {
  id: string
  name: string
  ticker: string
  description: string
  totalSupply: number
  preminePercent: number
  category: "meme" | "trending" | "featured"
  emoji: string
  popularity: number
}

export function Templates() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "meme" | "trending" | "featured">("all")

  const templates: Template[] = [
    {
      id: "1",
      name: "Moon Mission",
      ticker: "$MOON",
      description: "To the moon and beyond! Classic crypto meme with astronomical potential.",
      totalSupply: 21000000,
      preminePercent: 10,
      category: "meme",
      emoji: "🌙",
      popularity: 95,
    },
    {
      id: "2",
      name: "Fire God",
      ticker: "$FIREGOD",
      description: "Burn everything in your path. For the true degens.",
      totalSupply: 10000000,
      preminePercent: 5,
      category: "trending",
      emoji: "🔥",
      popularity: 88,
    },
    {
      id: "3",
      name: "Cat God",
      ticker: "$CATGOD",
      description: "The ultimate feline deity. Meow your way to riches.",
      totalSupply: 50000000,
      preminePercent: 15,
      category: "meme",
      emoji: "🐱",
      popularity: 92,
    },
    {
      id: "4",
      name: "Diamond Hands",
      ticker: "$DIAMOND",
      description: "For those who never sell. True diamond hands only.",
      totalSupply: 1000000,
      preminePercent: 20,
      category: "featured",
      emoji: "💎",
      popularity: 97,
    },
    {
      id: "5",
      name: "Rocket Fuel",
      ticker: "$ROCKET",
      description: "Fuel for your journey to financial freedom.",
      totalSupply: 100000000,
      preminePercent: 8,
      category: "trending",
      emoji: "🚀",
      popularity: 85,
    },
    {
      id: "6",
      name: "Pepe Classic",
      ticker: "$PEPE",
      description: "The original meme frog. Feels good man.",
      totalSupply: 1000000000,
      preminePercent: 12,
      category: "meme",
      emoji: "🐸",
      popularity: 90,
    },
  ]

  const filteredTemplates =
    selectedCategory === "all" ? templates : templates.filter((t) => t.category === selectedCategory)

  const handleMintTemplate = (template: Template) => {
    // This would typically navigate to the etching interface with pre-filled data
    console.log("Minting template:", template)
    // For now, just show an alert
    alert(`Minting ${template.ticker} template! This would pre-fill the etching form.`)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "meme":
        return <span className="text-lg">😂</span>
      case "trending":
        return <TrendingUp className="h-4 w-4 text-green-400" />
      case "featured":
        return <Star className="h-4 w-4 text-yellow-400" />
      default:
        return null
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

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Card className="bg-black/40 backdrop-blur-sm border-pink-500/30 dark:bg-black/40 light:bg-white/80 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-pink-400 text-lg md:text-xl">
            <Rocket className="h-5 w-5 md:h-6 md:w-6" />🚀 Rune Templates
          </CardTitle>
          <CardDescription className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm md:text-base">
            Quick-start templates for popular meme Runes. One-click to mint!
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 md:p-6">
          <div className="mb-6">
            <div className="overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                  className={`${
                    selectedCategory === "all" ? "bg-pink-500" : "border-gray-600 text-gray-300"
                  } text-xs md:text-sm whitespace-nowrap`}
                >
                  All Templates
                </Button>
                <Button
                  variant={selectedCategory === "meme" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("meme")}
                  className={`${
                    selectedCategory === "meme" ? "bg-pink-500" : "border-gray-600 text-gray-300"
                  } text-xs md:text-sm whitespace-nowrap`}
                >
                  😂 Memes
                </Button>
                <Button
                  variant={selectedCategory === "trending" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("trending")}
                  className={`${
                    selectedCategory === "trending" ? "bg-pink-500" : "border-gray-600 text-gray-300"
                  } text-xs md:text-sm whitespace-nowrap`}
                >
                  🔥 Trending
                </Button>
                <Button
                  variant={selectedCategory === "featured" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("featured")}
                  className={`${
                    selectedCategory === "featured" ? "bg-pink-500" : "border-gray-600 text-gray-300"
                  } text-xs md:text-sm whitespace-nowrap`}
                >
                  ⭐ Featured
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredTemplates.map((template) => (
              <Card
                key={template.id}
                className="bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 border-gray-600 dark:border-gray-600 light:border-gray-300 hover:border-pink-500/50 transition-colors"
              >
                <CardHeader className="pb-3 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{template.emoji}</span>
                      <Badge className="bg-orange-500 text-white font-bold text-xs md:text-sm">{template.ticker}</Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      {getCategoryIcon(template.category)}
                      <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 capitalize">
                        {template.category}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-base md:text-lg text-white dark:text-white light:text-gray-900">
                    {template.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 p-4">
                  <p className="text-xs md:text-sm text-gray-300 dark:text-gray-300 light:text-gray-600">
                    {template.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Supply:</span>
                      <span className="text-white dark:text-white light:text-gray-900 ml-1">
                        {formatNumber(template.totalSupply)}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Premine:</span>
                      <span className="text-yellow-400 ml-1">{template.preminePercent}%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">Popularity:</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(template.popularity / 20)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-green-400 font-bold">{template.popularity}% hot</span>
                  </div>

                  <Button
                    onClick={() => handleMintTemplate(template)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-xs md:text-sm"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Mint {template.ticker}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
