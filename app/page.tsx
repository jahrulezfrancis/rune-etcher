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

      <div className="relative min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 w-full">
          <div className="container mx-auto px-4 py-4 md:py-8">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4 px-4">
                ⚡ Rune Etcher ⚡
              </h1>
              <div className="max-w-2xl mx-auto px-4">
                <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 light:text-gray-600">
                  Etch Bitcoin Runes and bridge them atomically to Starknet.
                  <br />
                  <span className="text-orange-400 font-semibold">Make it memeable. Make it legendary.</span>
                </p>
              </div>
            </div>

            <div className="w-full">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="mb-6 md:mb-8">
                  <div className="w-full overflow-x-auto">
                    <TabsList className="grid w-full grid-cols-4 bg-black/20 backdrop-blur-sm dark:bg-black/20 light:bg-white/80 min-w-[600px] mx-auto">
                      <TabsTrigger
                        value="etch"
                        className="data-[state=active]:bg-orange-500 text-xs md:text-sm px-2 md:px-4 py-2 whitespace-nowrap"
                      >
                        <span className="hidden sm:inline">🪬 Etch Runes</span>
                        <span className="sm:hidden">🪬 Etch</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="feed"
                        className="data-[state=active]:bg-blue-500 text-xs md:text-sm px-2 md:px-4 py-2 whitespace-nowrap"
                      >
                        <span className="hidden sm:inline">📡 Live Feed</span>
                        <span className="sm:hidden">📡 Feed</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="leaderboard"
                        className="data-[state=active]:bg-purple-500 text-xs md:text-sm px-2 md:px-4 py-2 whitespace-nowrap"
                      >
                        <span className="hidden sm:inline">🏆 Leaderboard</span>
                        <span className="sm:hidden">🏆 Board</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="templates"
                        className="data-[state=active]:bg-pink-500 text-xs md:text-sm px-2 md:px-4 py-2 whitespace-nowrap"
                      >
                        <span className="hidden sm:inline">🚀 Templates</span>
                        <span className="sm:hidden">🚀 Templates</span>
                      </TabsTrigger>
                    </TabsList>
                  </div>
                </div>

                <div className="w-full">
                  <TabsContent value="etch" className="w-full mt-0">
                    <div className="w-full">
                      <EtchingInterface />
                    </div>
                  </TabsContent>

                  <TabsContent value="feed" className="w-full mt-0">
                    <div className="w-full">
                      <LiveFeed />
                    </div>
                  </TabsContent>

                  <TabsContent value="leaderboard" className="w-full mt-0">
                    <div className="w-full">
                      <Leaderboard />
                    </div>
                  </TabsContent>

                  <TabsContent value="templates" className="w-full mt-0">
                    <div className="w-full">
                      <Templates />
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
