"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EtchingInterface } from "./components/etching-interface"
import { LiveFeed } from "./components/live-feed"
import { Leaderboard } from "./components/leaderboard"
import { Templates } from "./components/templates"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("etch")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative">
        <Header />

        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
              ⚡ Rune Etcher ⚡
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Etch Bitcoin Runes and bridge them atomically to Starknet.
              <br />
              <span className="text-orange-400 font-semibold">Make it memeable. Make it legendary.</span>
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-black/20 backdrop-blur-sm">
              <TabsTrigger value="etch" className="data-[state=active]:bg-orange-500">
                🪬 Etch Runes
              </TabsTrigger>
              <TabsTrigger value="feed" className="data-[state=active]:bg-blue-500">
                📡 Live Feed
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="data-[state=active]:bg-purple-500">
                🏆 Leaderboard
              </TabsTrigger>
              <TabsTrigger value="templates" className="data-[state=active]:bg-pink-500">
                🚀 Templates
              </TabsTrigger>
            </TabsList>

            <TabsContent value="etch">
              <EtchingInterface />
            </TabsContent>

            <TabsContent value="feed">
              <LiveFeed />
            </TabsContent>

            <TabsContent value="leaderboard">
              <Leaderboard />
            </TabsContent>

            <TabsContent value="templates">
              <Templates />
            </TabsContent>
          </Tabs>
        </main>

        <Footer />
      </div>
    </div>
  )
}
