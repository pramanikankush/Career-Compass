"use client"

import { useState } from "react"
import { X, Info } from "lucide-react"

export function UsageBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-[#38e07b]/10 border border-[#38e07b]/30 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <Info className="text-[#38e07b] mt-0.5" size={20} />
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-1">Demo Application</h3>
          <p className="text-[#9eb7a8] text-sm">
            This is a demonstration app. Features are rate-limited to ensure fair usage. 
            Resume files are processed securely and not stored. 
            <a href="/privacy" className="text-[#38e07b] hover:underline ml-1">
              View Privacy Policy
            </a>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-[#9eb7a8] hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}