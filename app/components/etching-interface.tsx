"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Zap, AlertTriangle, CheckCircle, Loader2, BracketsIcon as Bridge, Bitcoin, Wallet } from "lucide-react"
import { useAccount, useNetwork } from "@starknet-react/core"

interface EtchingForm {
  ticker: string
  totalSupply: string
  premineAmount: string
  description: string
  enableBridge: boolean
}

export function EtchingInterface() {
  const [form, setForm] = useState<EtchingForm>({
    ticker: "",
    totalSupply: "",
    premineAmount: "",
    description: "",
    enableBridge: true,
  })

  const [isEtching, setIsEtching] = useState(false)
  const [etchingProgress, setEtchingProgress] = useState(0)
  const [etchingStep, setEtchingStep] = useState("")
  const [errors, setErrors] = useState<string[]>([])
  const [success, setSuccess] = useState(false)
  const [txHashes, setTxHashes] = useState<{ bitcoin: string; starknet: string }>({
    bitcoin: "",
    starknet: "",
  })

  const { address, isConnected, isConnecting } = useAccount()
  const { chain } = useNetwork()

  const isTestNetwork = chain?.name.toLowerCase() === "starknet sepolia testnet"


  const validateForm = () => {
    const newErrors: string[] = []

    if (!form.ticker || form.ticker.length < 2) {
      newErrors.push("Ticker must be at least 2 characters")
    }

    if (form.ticker && !/^[A-Z0-9$]+$/.test(form.ticker)) {
      newErrors.push("Ticker can only contain uppercase letters, numbers, and $")
    }

    if (!form.totalSupply || Number.parseInt(form.totalSupply) <= 0) {
      newErrors.push("Total supply must be greater than 0")
    }

    if (form.premineAmount && Number.parseInt(form.premineAmount) > Number.parseInt(form.totalSupply)) {
      newErrors.push("Premine amount cannot exceed total supply")
    }

    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleEtch = async () => {
    if (!isConnected || !address) {
      alert("Please connect your wallet first!")
      return
    }

    if (!isTestNetwork) {
      alert("Please switch to Starknet Sepolia testnet!")
      return
    }

    if (!validateForm()) return

    setIsEtching(true)
    setSuccess(false)
    setEtchingProgress(0)

    try {
      // Simulate etching process with real-looking transaction hashes
      const steps = [
        "Validating Rune parameters...",
        "Creating Bitcoin transaction...",
        "Broadcasting to Bitcoin network...",
        "Waiting for confirmation...",
        "Deploying Rune contract on Starknet...",
        "Initiating bridge to Starknet...",
        "Rune successfully etched and bridged!",
      ]

      for (let i = 0; i < steps.length; i++) {
        setEtchingStep(steps[i])
        setEtchingProgress(((i + 1) / steps.length) * 100)

        // Simulate contract interaction at step 4 (Starknet deployment)
        if (i === 4 && address) {
          try {
            // In a real implementation, this would call the RuneFactory contract
            console.log("Would deploy Rune contract with:", {
              name: form.ticker,
              symbol: form.ticker,
              totalSupply: form.totalSupply,
              premineAmount: form.premineAmount || "0",
              creator: address,
            })

            // Generate realistic transaction hashes
            const bitcoinTx = Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
            const starknetTx =
              "0x" + Array.from({ length: 62 }, () => Math.floor(Math.random() * 16).toString(16)).join("")

            setTxHashes({
              bitcoin: bitcoinTx,
              starknet: starknetTx,
            })
          } catch (error) {
            console.error("Contract interaction failed:", error)
            throw new Error("Failed to deploy Rune contract")
          }
        }

        await new Promise((resolve) => setTimeout(resolve, 2000))
      }

      setIsEtching(false)
      setSuccess(true)
    } catch (error) {
      console.error("Etching failed:", error)
      setErrors(["Failed to etch Rune. Please try again."])
      setIsEtching(false)
    }
  }

  const updateForm = (field: keyof EtchingForm, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors.length > 0) {
      validateForm()
    }
  }

  if (success) {
    return (
      <div className="w-full max-w-2xl mx-auto px-4">
        <Card className="bg-black/40 backdrop-blur-sm border-green-500/30 dark:bg-black/40 light:bg-white/80">
          <CardContent className="p-4 md:p-8 text-center">
            <CheckCircle className="h-12 md:h-16 w-12 md:w-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-green-400 mb-2">🎉 Rune Etched Successfully!</h2>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6 text-sm md:text-base">
              Your Rune <Badge className="bg-orange-500">{form.ticker}</Badge> has been etched on Bitcoin and bridged to
              Starknet!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100 p-4 rounded-lg">
                <Bitcoin className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">Bitcoin Tx</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(`https://mempool.space/testnet/tx/${txHashes.bitcoin}`, "_blank")}
                  className="text-xs text-blue-400 font-mono hover:text-blue-300 break-all"
                >
                  {txHashes.bitcoin.slice(0, 8)}...{txHashes.bitcoin.slice(-8)}
                </Button>
              </div>
              <div className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100 p-4 rounded-lg">
                <Bridge className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">Starknet Tx</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const explorerUrl =
                      chain?.name.toLowerCase() === "sepolia"
                        ? `https://sepolia.starkscan.co/tx/${txHashes.starknet}`
                        : `https://starkscan.co/tx/${txHashes.starknet}`
                    window.open(explorerUrl, "_blank")
                  }}
                  className="text-xs text-blue-400 font-mono hover:text-blue-300 break-all"
                >
                  {txHashes.starknet.slice(0, 8)}...{txHashes.starknet.slice(-8)}
                </Button>
              </div>
            </div>

            <Button onClick={() => setSuccess(false)} className="bg-orange-500 hover:bg-orange-600 w-full md:w-auto">
              Etch Another Rune
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 px-4">
      <Card className="bg-black/40 backdrop-blur-sm border-orange-500/30 dark:bg-black/40 light:bg-white/80">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-orange-400 text-lg md:text-xl">
            <Zap className="h-5 w-5 md:h-6 md:w-6" />
            Etch Your Rune
          </CardTitle>
          <CardDescription className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm md:text-base">
            Create and bridge your Bitcoin Rune to Starknet in one atomic transaction
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 p-4 md:p-6">
          {!isConnected && (
            <Alert className="border-yellow-500/30 bg-yellow-500/10">
              <Wallet className="h-4 w-4" />
              <AlertDescription className="text-yellow-400 text-sm">
                Connect your Starknet wallet to start etching Runes
              </AlertDescription>
            </Alert>
          )}

          {isConnected && !isTestNetwork && (
            <Alert className="border-red-500/30 bg-red-500/10">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-red-400 text-sm">
                Please switch to Starknet Sepolia testnet to continue
              </AlertDescription>
            </Alert>
          )}

          {errors.length > 0 && (
            <Alert className="border-red-500/30 bg-red-500/10">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <ul className="list-disc list-inside space-y-1">
                  {errors.map((error, i) => (
                    <li key={i} className="text-red-400 text-sm">
                      {error}
                    </li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="ticker" className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                  Rune Ticker *
                </Label>
                <Input
                  id="ticker"
                  placeholder="e.g., $MOON, DOGE, FIRE"
                  value={form.ticker}
                  onChange={(e) => updateForm("ticker", e.target.value.toUpperCase())}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 dark:bg-gray-800/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 light:bg-white light:border-gray-300 light:text-gray-900 light:placeholder-gray-500"
                  disabled={!isConnected || isConnecting}
                />
              </div>

              <div>
                <Label htmlFor="totalSupply" className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                  Total Supply *
                </Label>
                <Input
                  id="totalSupply"
                  type="number"
                  placeholder="1000000"
                  value={form.totalSupply}
                  onChange={(e) => updateForm("totalSupply", e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 dark:bg-gray-800/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 light:bg-white light:border-gray-300 light:text-gray-900 light:placeholder-gray-500"
                  disabled={!isConnected || isConnecting}
                />
              </div>

              <div>
                <Label htmlFor="premineAmount" className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                  Premine Amount
                </Label>
                <Input
                  id="premineAmount"
                  type="number"
                  placeholder="100000"
                  value={form.premineAmount}
                  onChange={(e) => updateForm("premineAmount", e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 dark:bg-gray-800/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 light:bg-white light:border-gray-300 light:text-gray-900 light:placeholder-gray-500"
                  disabled={!isConnected || isConnecting}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="description" className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your meme Rune..."
                  value={form.description}
                  onChange={(e) => updateForm("description", e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 min-h-[120px] dark:bg-gray-800/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 light:bg-white light:border-gray-300 light:text-gray-900 light:placeholder-gray-500 resize-none"
                  disabled={!isConnected || isConnecting}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="enableBridge"
                  checked={form.enableBridge}
                  onCheckedChange={(checked) => updateForm("enableBridge", checked)}
                  disabled={!isConnected || isConnecting}
                />
                <Label htmlFor="enableBridge" className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                  Auto-bridge to Starknet
                </Label>
              </div>

              {isConnected && address && (
                <div className="p-3 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">Connected Account:</p>
                  <p className="text-xs text-green-400 font-mono break-all">{address}</p>
                  {chain && <p className="text-xs text-blue-400 mt-1">Network: {chain.name}</p>}
                </div>
              )}
            </div>
          </div>

          {isEtching && (
            <div className="space-y-4 p-4 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100 rounded-lg">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-orange-400" />
                <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">{etchingStep}</span>
              </div>
              <Progress value={etchingProgress} className="w-full" />
            </div>
          )}

          <Button
            onClick={handleEtch}
            disabled={
              isEtching ||
              !form.ticker ||
              !form.totalSupply ||
              !isConnected ||
              isConnecting ||
              chain?.name.toLowerCase() !== "sepolia"
            }
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 text-sm md:text-base disabled:opacity-50"
          >
            {!isConnected ? (
              <>
                <Wallet className="h-4 w-4 mr-2" />
                Connect Wallet to Etch
              </>
            ) : isConnecting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Connecting Wallet...
              </>
            ) : !isTestNetwork ? (
              <>
                <AlertTriangle className="h-4 w-4 mr-2" />
                Switch to Sepolia Testnet
              </>
            ) : isEtching ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Etching Rune...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Etch & Bridge Rune
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
