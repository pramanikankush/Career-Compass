"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Compass } from "lucide-react"
import { motion } from "framer-motion"
import { AuthButtons } from './auth-wrapper'
import { useState } from "react"

interface NavbarProps {
  title: string
  icon?: React.ReactNode
  activeLink?: string
  variant?: "blue" | "red"
}

export function Navbar({ title, icon, activeLink = "Dashboard", variant = "blue" }: NavbarProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const primaryColor = variant === "blue" ? "text-blue-500" : "text-red-500"
  const focusRing = variant === "blue" ? "focus:ring-blue-500" : "focus:ring-red-500"

  const navLinks = [
    { name: "Dashboard", href: "/", keywords: ["dashboard", "home", "overview", "main"] },
    { name: "Jobs", href: "/jobs", keywords: ["jobs", "job", "search", "opportunities", "positions", "career"] },
    { name: "Interview Prep", href: "/interview-prep", keywords: ["interview", "prep", "preparation", "questions", "practice"] },
    { name: "Resume Analyzer", href: "/resume", keywords: ["resume", "analyze", "analysis", "cv", "review", "feedback"] },
    { name: "Resume Builder", href: "/builder", keywords: ["builder", "build", "create", "make", "generate"] },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    const query = searchQuery.toLowerCase().trim()
    
    // Check if it's a job search query (contains job-related terms)
    const jobKeywords = ['job', 'engineer', 'developer', 'manager', 'analyst', 'designer', 'marketing', 'sales', 'finance', 'hr', 'data', 'software', 'product', 'ui', 'ux']
    const isJobSearch = jobKeywords.some(keyword => query.includes(keyword))
    
    if (isJobSearch) {
      // Navigate to jobs page with search query
      router.push(`/jobs?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      return
    }
    
    // Find matching page based on keywords
    const matchedLink = navLinks.find(link => 
      link.keywords.some(keyword => keyword.includes(query) || query.includes(keyword))
    )

    if (matchedLink) {
      router.push(matchedLink.href)
      setSearchQuery("")
    } else {
      // Default to jobs page for any search
      router.push(`/jobs?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
    }
  }

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between whitespace-nowrap border-b border-[#3d5245] px-10 py-4 bg-[#1d2723]"
      style={{fontFamily: '"Spline Sans", "Noto Sans", sans-serif'}}
    >
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3 text-white">
          {icon || <Compass className="text-[#38e07b] text-3xl" />}
          <h1 className="text-xl font-bold leading-tight tracking-[-0.015em]">{title}</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium leading-normal transition-colors ${
                activeLink === link.name
                  ? "text-[#38e07b] font-semibold"
                  : "text-[#9eb7a8] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        <form onSubmit={handleSearch} className="relative hidden sm:flex items-center gap-2 min-w-40 max-w-64">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="text-gray-400" size={20} />
            </div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input w-full rounded-lg border-none bg-[#111714] pl-10 pr-4 py-2 text-sm text-white placeholder:text-[#9eb7a8] focus:outline-none focus:ring-2 focus:ring-[#38e07b]"
              placeholder="Search pages..."
              type="search"
            />
          </div>
          <button
            type="submit"
            suppressHydrationWarning
            className="bg-[#38e07b] hover:bg-[#2bc968] text-black rounded-lg px-3 py-2 transition-colors flex items-center justify-center font-bold"
          >
            <Search size={16} />
          </button>
        </form>
        <div className="flex items-center gap-4">
          <AuthButtons />
        </div>
      </div>
    </motion.header>
  )
}