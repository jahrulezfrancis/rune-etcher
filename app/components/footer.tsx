import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-4">⚡ Rune Etcher</h3>
            <p className="text-sm text-gray-400">
              Etch Bitcoin Runes and bridge them atomically to Starknet. Make it memeable. Make it legendary.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Protocol</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/docs">
                  <p className="hover:text-white transition-colors">Documentation</p>
                </Link>
              </li>
              <li>
                <Link href="/docs/architecture">
                  <p className="hover:text-white transition-colors">Architecture</p>
                </Link>
              </li>
              <li>
                <Link href="/docs/bridge-guide">
                  <p className="hover:text-white transition-colors">Bridge Guide</p>
                </Link>
              </li>
              <li>
                <Link href="/docs/api">
                  <p className="hover:text-white transition-colors">API Reference</p>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Network</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Bitcoin Testnet</li>
              <li>Starknet Sepolia</li>
              <li>Starkgate Bridge</li>
              <li>Utu Relay</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Rune Etcher. Open source under MIT License.
            <br />
            <span className="text-orange-400">⚠️ Testnet Only - Not for Production Use</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
