# ⚡ Rune Etcher - Bitcoin Runes Mint + Bridge DApp

A fully functional DApp that enables users to etch (mint) Bitcoin Runes directly from Starknet and bridge them atomically using the Starkgate Runes bridge.

## 🚀 Features

### Core Functionality
- **Rune Etching Interface**: Clean form for defining Rune parameters (ticker, supply, premine)
- **Atomic Etch + Bridge Flow**: Single transaction flow for minting and bridging
- **Bridge Integration**: Seamless integration with Starkgate Runes bridge
- **Starknet Output**: Bridged Runes appear as usable tokens in Starknet DeFi

### Community Features
- **Live Feed**: Real-time activity feed of Rune etching and bridging
- **Leaderboard**: Rankings by supply, volume, and holder count
- **Templates**: One-click meme Rune templates ($MOON, $FIREGOD, etc.)
- **Mobile Responsive**: Full mobile support with touch-friendly interface

### UI/UX
- **Memeable Design**: Inspired by pump.fun with playful, meme-native styling
- **Dark/Light Mode**: Theme switching support
- **Modern Components**: Built with shadcn/ui component library
- **Gradient Backgrounds**: Eye-catching visual effects

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React + TypeScript + Next.js |
| UI Components | shadcn/ui + Tailwind CSS |
| Bridge | Starkgate + Utu Relay |
| Bitcoin Parser | Broly (with Runes support) |
| Smart Contracts | Cairo-lang |
| Wallets | Argent X / Braavos (Starknet) |
| Deployment | Vercel (Frontend) + Sepolia (Contracts) |

## 🏗 Architecture

\`\`\`
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Bitcoin       │    │   Starknet      │
│   (React/Next)  │◄──►│   Testnet       │◄──►│   Sepolia       │
│                 │    │                 │    │                 │
│ • Etching UI    │    │ • Rune Etching  │    │ • Bridged Tokens│
│ • Live Feed     │    │ • Witness Field │    │ • Asset Protocol│
│ • Leaderboard   │    │ • Confirmations │    │ • DeFi Ready    │
│ • Templates     │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │  Starkgate      │
                    │  Bridge         │
                    │                 │
                    │ • Utu Relay     │
                    │ • Atomic Swaps  │
                    │ • State Sync    │
                    └─────────────────┘
\`\`\`

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Starknet wallet (Argent X or Braavos)
- Bitcoin testnet access

### Installation

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/your-username/rune-etcher.git
cd rune-etcher
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. **Set up environment variables**
\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit `.env.local` with your configuration:
\`\`\`env
NEXT_PUBLIC_STARKNET_NETWORK=sepolia
NEXT_PUBLIC_BITCOIN_NETWORK=testnet
NEXT_PUBLIC_STARKGATE_BRIDGE_ADDRESS=0x...
NEXT_PUBLIC_UTU_RELAY_ENDPOINT=https://...
\`\`\`

4. **Run the development server**
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage Guide

### Etching a Rune

1. **Connect Wallet**: Click "Connect Wallet" and select your Starknet wallet
2. **Fill Form**: Enter your Rune details:
   - Ticker (e.g., $MOON, $FIRE)
   - Total Supply
   - Premine Amount (optional)
   - Description
3. **Enable Bridge**: Toggle "Auto-bridge to Starknet" (recommended)
4. **Etch & Bridge**: Click the button to start the atomic process
5. **Wait for Confirmation**: Monitor progress through Bitcoin confirmation and Starknet bridging
6. **Success**: Your Rune is now available on both networks!

### Using Templates

1. **Browse Templates**: Navigate to the "Templates" tab
2. **Filter by Category**: Choose from Memes, Trending, or Featured
3. **Select Template**: Click on any template card
4. **One-Click Mint**: Hit "Mint [TICKER]" to auto-fill the etching form
5. **Customize**: Modify parameters if needed
6. **Deploy**: Complete the etching process

### Monitoring Activity

- **Live Feed**: Watch real-time Rune activity from the community
- **Leaderboard**: See top Runes by supply, volume, or holder count
- **Transaction Links**: Click external link icons to view on-chain transactions

## 🧪 Testing

### Testnet Configuration
- **Bitcoin**: Testnet3 network
- **Starknet**: Sepolia testnet
- **Bridge**: Starkgate testnet bridge
- **Faucets**: 
  - Bitcoin testnet: [https://coinfaucet.eu/en/btc-testnet/](https://coinfaucet.eu/en/btc-testnet/)
  - Starknet Sepolia: [https://starknet-faucet.vercel.app/](https://starknet-faucet.vercel.app/)

### Mock Mode
For development and demo purposes, the app includes mock data:
- Simulated etching process with progress indicators
- Mock live feed with sample activities
- Template leaderboard with example Runes

## 🔧 Development

### Project Structure
\`\`\`
rune-etcher/
├── app/
│   ├── components/
│   │   ├── etching-interface.tsx    # Main etching form
│   │   ├── live-feed.tsx           # Activity feed
│   │   ├── leaderboard.tsx         # Rankings
│   │   ├── templates.tsx           # Meme templates
│   │   ├── header.tsx              # Navigation
│   │   └── footer.tsx              # Footer links
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Main page
├── components/ui/                  # shadcn/ui components
├── lib/                           # Utility functions
├── public/                        # Static assets
└── README.md                      # This file
\`\`\`

### Key Components

- **EtchingInterface**: Handles Rune creation form and validation
- **LiveFeed**: Displays real-time community activity
- **Leaderboard**: Shows top Runes with sorting options
- **Templates**: Pre-configured meme Rune templates
- **Header**: Wallet connection and navigation
- **Footer**: Links and network information

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Custom Gradients**: Memeable color schemes
- **Dark Mode**: Built-in theme switching
- **Responsive**: Mobile-first design approach

## 🚀 Deployment

### Frontend Deployment (Vercel)
1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Configure Environment**: Set production environment variables
3. **Deploy**: Automatic deployment on push to main branch

### Smart Contract Deployment (Starknet Sepolia)
1. **Compile Contracts**: Use Cairo compiler
2. **Deploy to Sepolia**: Use Starknet CLI or deployment scripts
3. **Verify Contracts**: Ensure contracts are verified on explorer
4. **Update Frontend**: Configure contract addresses in environment

## 🔮 Future Roadmap

### Phase 2 Features
- **Auto-etch Integration**: Connect with odin.fun milestones
- **Mobile App**: React Native version
- **Token Explorer**: Dedicated explorer for bridged Runes
- **Advanced Analytics**: Trading metrics and holder analytics

### Phase 3 Features
- **Custom Mechanics**: Bonding curves and seasonal drops
- **DAO Governance**: Community-driven protocol upgrades
- **Cross-chain Support**: Additional blockchain integrations
- **NFT Integration**: Rune-backed NFT collections

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Conventional Commits**: Standardized commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.runeetcher.com](https://docs.runeetcher.com)
- **Discord**: [discord.gg/runeetcher](https://discord.gg/runeetcher)
- **Twitter**: [@RuneEtcher](https://twitter.com/RuneEtcher)
- **Issues**: [GitHub Issues](https://github.com/your-username/rune-etcher/issues)

## ⚠️ Disclaimer

**This is testnet software for demonstration purposes only.**

- Not audited for production use
- Use testnet funds only
- No financial advice provided
- Experimental technology

---

**Made with ⚡ by the Rune Etcher team**

*Etch it. Bridge it. Make it legendary.*
