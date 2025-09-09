"use client"

import { motion } from "framer-motion"
import { Info, Target, TrendingUp, AlertTriangle } from "lucide-react"

interface ATSScoreGuideProps {
  score: number
  isVisible: boolean
  personalizedTips: {
    priorityAreas: string[]
    quickWins: string[]
    industrySpecific: string[]
  }
}

export function ATSScoreGuide({ score, isVisible, personalizedTips }: ATSScoreGuideProps) {
  const getScoreCategory = (score: number) => {
    if (score >= 80) return {
      category: "Excellent",
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/30",
      icon: Target,
      message: "Your resume is highly ATS-compatible and likely to pass initial screening."
    }
    if (score >= 60) return {
      category: "Good",
      color: "text-yellow-400", 
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-500/30",
      icon: TrendingUp,
      message: "Your resume has good ATS compatibility with room for optimization."
    }
    return {
      category: "Needs Improvement",
      color: "text-red-400",
      bgColor: "bg-red-900/20", 
      borderColor: "border-red-500/30",
      icon: AlertTriangle,
      message: "Your resume needs significant optimization to pass ATS screening."
    }
  }

  const scoreInfo = getScoreCategory(score)
  const Icon = scoreInfo.icon

  const atsFactors = [
    {
      factor: "Keyword Optimization (25%)",
      description: "Industry-specific keywords and job-relevant terms that match job descriptions",
      tips: ["Research job postings for common keywords", "Use exact phrases from job descriptions", "Include both acronyms and full terms (e.g., 'AI' and 'Artificial Intelligence')"]
    },
    {
      factor: "Formatting & Structure (20%)",
      description: "ATS-friendly formatting with clear sections and proper headings",
      tips: ["Use standard section headers", "Avoid tables, text boxes, and graphics", "Use simple bullet points and consistent formatting"]
    },
    {
      factor: "Content Quality (20%)",
      description: "Quantified achievements, strong action verbs, and measurable impact",
      tips: ["Start bullets with action verbs", "Include specific numbers and percentages", "Focus on achievements, not just responsibilities"]
    },
    {
      factor: "Completeness (15%)",
      description: "All essential sections present with relevant information",
      tips: ["Include contact info, summary, experience, education, skills", "Add certifications and relevant projects", "Ensure no critical information is missing"]
    },
    {
      factor: "Readability (10%)",
      description: "Clear, professional language with proper grammar and spelling",
      tips: ["Proofread for spelling and grammar errors", "Use professional, concise language", "Maintain consistent tense and formatting"]
    },
    {
      factor: "Technical Compliance (10%)",
      description: "File format compatibility and text extraction capability",
      tips: ["Save as PDF with selectable text", "Avoid image-based text", "Test that text can be copied from the PDF"]
    }
  ]

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className={`rounded-xl p-6 ${scoreInfo.bgColor} border ${scoreInfo.borderColor}`}>
        <div className="flex items-center gap-3 mb-4">
          <Icon className={`w-6 h-6 ${scoreInfo.color}`} />
          <div>
            <h3 className={`text-lg font-bold ${scoreInfo.color}`}>
              ATS Score: {scoreInfo.category}
            </h3>
            <p className="text-sm text-gray-300">{scoreInfo.message}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-400">
            <Info className="w-4 h-4" />
            <span className="font-medium">How ATS Scoring Works</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {atsFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-4"
              >
                <h4 className="font-medium text-white mb-2">{factor.factor}</h4>
                <p className="text-sm text-gray-400 mb-3">{factor.description}</p>
                <div className="space-y-1">
                  {factor.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start gap-2">
                      <span className="text-blue-500 text-xs mt-1">•</span>
                      <span className="text-xs text-gray-300">{tip}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div className="p-4 bg-red-900/20 rounded-lg border border-red-500/30">
              <h4 className="font-medium text-red-400 mb-2">🎯 Priority Areas for Your Resume</h4>
              <ul className="space-y-1">
                {personalizedTips.priorityAreas.map((area, index) => (
                  <li key={index} className="text-sm text-red-300 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
              <h4 className="font-medium text-green-400 mb-2">⚡ Quick Wins</h4>
              <ul className="space-y-1">
                {personalizedTips.quickWins.map((win, index) => (
                  <li key={index} className="text-sm text-green-300 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    {win}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
              <h4 className="font-medium text-blue-400 mb-2">🏢 Industry-Specific Tips</h4>
              <ul className="space-y-1">
                {personalizedTips.industrySpecific.map((tip, index) => (
                  <li key={index} className="text-sm text-blue-300 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}