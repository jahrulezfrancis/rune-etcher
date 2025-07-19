"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ChevronRight } from "lucide-react"

export function Breadcrumb() {
  const pathname = usePathname()

  const generateBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean)
    const breadcrumbs: { name: string; href: string; icon: typeof Home | null }[] = [{ name: "Home", href: "/", icon: Home }]

    let currentPath = ""
    paths.forEach((path, index) => {
      currentPath += `/${path}`

      let name = path.charAt(0).toUpperCase() + path.slice(1)
      if (path === "docs") name = "Documentation"
      if (path === "bridge-guide") name = "Bridge Guide"
      if (path === "api") name = "API Reference"

      breadcrumbs.push({
        name,
        href: currentPath,
        icon: null,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  if (pathname === "/") return null

  return (
    <nav className="flex items-center space-x-2 text-sm mb-6 overflow-x-auto pb-2">
      {breadcrumbs.map((breadcrumb, index) => {
        const Icon = breadcrumb.icon
        const isLast = index === breadcrumbs.length - 1

        return (
          <div key={breadcrumb.href} className="flex items-center space-x-2 whitespace-nowrap">
            {index === 0 && Icon && (
              <Link
                href={breadcrumb.href}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Icon className="h-4 w-4 mr-1" />
                {breadcrumb.name}
              </Link>
            )}
            {index > 0 && (
              <>
                <ChevronRight className="h-4 w-4 text-gray-500 flex-shrink-0" />
                {isLast ? (
                  <span className="text-orange-400 font-medium">{breadcrumb.name}</span>
                ) : (
                  <Link href={breadcrumb.href} className="text-gray-400 hover:text-white transition-colors">
                    {breadcrumb.name}
                  </Link>
                )}
              </>
            )}
          </div>
        )
      })}
    </nav>
  )
}
