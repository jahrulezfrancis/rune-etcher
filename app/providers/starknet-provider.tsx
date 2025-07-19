"use client"

import { sepolia, mainnet } from "@starknet-react/chains"
import { StarknetConfig, publicProvider, argent, braavos, useInjectedConnectors, voyager } from "@starknet-react/core"
import type { Chain } from "@starknet-react/chains"
import type React from "react"

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Randomize the order of the connectors.
    order: "random",
  })

  const chains: Chain[] = [sepolia, mainnet]

  return (
    <StarknetConfig chains={chains} provider={publicProvider()} connectors={connectors} explorer={voyager} autoConnect>
      {children}
    </StarknetConfig>
  )
}
