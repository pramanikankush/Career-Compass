"use client"

import { motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ResumeDropzone } from "@/components/resume-dropzone"
import { ATSScoreGuide } from "@/components/ats-score-guide"
import { ImprovementTracker } from "@/components/improvement-tracker"
import { ScoreBenchmark } from "@/components/score-benchmark"
import { useState } from "react"

interface AnalysisData {
  atsScore: number
  scoreBreakdown: {
    [key: string]: {
      score: number
      weight: number
      explanation: string
    }
  }
  summary: string
  criticalIssues: string[]
  strengths: string[]
  missingKeywords: string[]
  sections: {
    [key: string]: {
      score: number
      feedback: string
      improvements: string[]
    }
  }
  improvementPlan: {
    immediate: Array<{text: string, estimatedImpact: number, timeRequired: string}>
    shortTerm: Array<{text: string, estimatedImpact: number, timeRequired: string}>
    longTerm: Array<{text: string, estimatedImpact: number, timeRequired: string}>
  }
  keywordAnalysis: {
    found: string[]
    missing: string[]
    suggestions: string[]
  }
  atsCompatibility: {
    score: number
    issues: string[]
    fixes: string[]
  }
  industryBenchmark: {
    detectedIndustry: string
    industryAverage: number
    percentileRank: number
    competitiveAnalysis: string
  }
  personalizedTips: {
    priorityAreas: string[]
    quickWins: string[]
    industrySpecific: string[]
  }
  extractedText?: string
}

export default function Resume() {
  const [openSection, setOpenSection] = useState<string>("contactInfo")
  const [analysis, setAnalysis] = useState<AnalysisData | null>(null)
  const [showATSGuide, setShowATSGuide] = useState<boolean>(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const handleAnalysisComplete = (analysisData: AnalysisData) => {
    setAnalysis(analysisData)
  }

  return (
    <div className="bg-[#111714] text-white min-h-screen" style={{fontFamily: '"Spline Sans", "Noto Sans", sans-serif'}}>
      <div className="flex h-full grow flex-col">
        <Navbar 
          title="Career Compass" 
          activeLink="Resume Analyzer" 
          variant="blue" 
        />
        
        <main className="flex-1 px-40 py-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl"
          >
            <motion.div variants={itemVariants} className="mb-10">
              <h1 className="text-4xl font-bold tracking-tight">Resume Analysis</h1>
              <p className="mt-2 text-gray-400">
                Upload your resume (PDF format only) to get an AI-powered analysis and suggestions for improvement.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10">
              <ResumeDropzone onAnalysisComplete={handleAnalysisComplete} />
            </motion.div>

            {analysis && (
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold tracking-tight mb-6">ATS Analysis Results</h2>
                
                {/* Overall Score and Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col gap-4 rounded-xl p-6 bg-[#1d2723]">
                    <p className="text-base font-medium text-[#9eb7a8]">Overall ATS Score</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <p className={`text-5xl font-bold tracking-tight ${
                          analysis.atsScore >= 80 ? 'text-green-500' : 
                          analysis.atsScore >= 60 ? 'text-yellow-500' : 'text-red-500'
                        }`}>{analysis.atsScore}%</p>
                        <button
                          onClick={() => setShowATSGuide(!showATSGuide)}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                          title="Learn about ATS scoring"
                        >
                          <HelpCircle className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex-1">
                        <div className="w-full bg-[#3d5245] rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full transition-all duration-1000 ${
                              analysis.atsScore >= 80 ? 'bg-[#38e07b]' : 
                              analysis.atsScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${analysis.atsScore}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-[#9eb7a8] mt-2">
                          {analysis.atsScore >= 80 ? 'Excellent ATS compatibility' : 
                           analysis.atsScore >= 60 ? 'Good with room for improvement' : 'Needs significant optimization'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#1d2723]">
                    <p className="text-base font-medium text-[#9eb7a8]">Summary</p>
                    <p className="text-white text-sm leading-relaxed">{analysis.summary}</p>
                  </div>
                </div>

                {/* ATS Score Guide */}
                <ATSScoreGuide score={analysis.atsScore} isVisible={showATSGuide} personalizedTips={analysis.personalizedTips} />

                {/* Score Breakdown */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Score Breakdown</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(analysis.scoreBreakdown).map(([key, data]) => (
                      <div key={key} className="rounded-xl p-4 bg-[#1d2723]">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm font-medium capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <span className="text-xs text-[#9eb7a8]">({data.weight}%)</span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-2xl font-bold ${
                            data.score >= 80 ? 'text-[#38e07b]' : 
                            data.score >= 60 ? 'text-yellow-500' : 'text-red-500'
                          }`}>{data.score}</span>
                          <div className="flex-1">
                            <div className="w-full bg-[#3d5245] rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  data.score >= 80 ? 'bg-[#38e07b]' : 
                                  data.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${data.score}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-[#9eb7a8]">{data.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Critical Issues */}
                {analysis.criticalIssues.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-red-400">Critical Issues</h3>
                    <div className="rounded-xl p-4 bg-red-900/20 border border-red-500/30">
                      <ul className="space-y-2">
                        {analysis.criticalIssues.map((issue, index) => (
                          <li key={index} className="flex items-start gap-2 text-red-300">
                            <span className="text-red-500 mt-1">•</span>
                            <span className="text-sm">{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Keyword Analysis */}
            {analysis && (
              <motion.div variants={itemVariants} className="mb-10">
                <h3 className="text-xl font-bold mb-4">Keyword Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl p-4 bg-[#1d2723]">
                    <h4 className="font-medium text-[#38e07b] mb-3">Found Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {analysis.keywordAnalysis.found.map((keyword, index) => (
                        <span key={index} className="px-3 py-1 bg-[#38e07b]/20 text-[#38e07b] rounded-full text-sm border border-[#38e07b]/30">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl p-4 bg-[#1d2723]">
                    <h4 className="font-medium text-red-400 mb-3">Missing Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {analysis.keywordAnalysis.missing.map((keyword, index) => (
                        <span key={index} className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm border border-red-500/30">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-xl p-4 bg-[#38e07b]/10 border border-[#38e07b]/30">
                  <h4 className="font-medium text-[#38e07b] mb-2">Keyword Integration Suggestions</h4>
                  <ul className="space-y-1">
                    {analysis.keywordAnalysis.suggestions.map((suggestion, index) => (
                      <li key={index} className="text-sm text-white flex items-start gap-2">
                        <span className="text-[#38e07b] mt-1">•</span>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Interactive Improvement Plan */}
            {analysis && (
              <motion.div variants={itemVariants} className="mb-10">
                <h3 className="text-xl font-bold mb-4">Interactive Improvement Tracker</h3>
                <ImprovementTracker 
                  improvementPlan={analysis.improvementPlan}
                  currentScore={analysis.atsScore}
                />
              </motion.div>
            )}

            {/* Score Benchmarks */}
            {analysis && (
              <motion.div variants={itemVariants} className="mb-10">
                <h3 className="text-xl font-bold mb-4">Industry Benchmarks & Performance</h3>
                <ScoreBenchmark score={analysis.atsScore} industryBenchmark={analysis.industryBenchmark} />
              </motion.div>
            )}

            {/* Section-wise Analysis */}
            {analysis && (
              <motion.div variants={itemVariants} className="mb-10">
                <h3 className="text-xl font-bold mb-4">Section-wise Analysis</h3>
                <div className="flex flex-col gap-3">
                  {Object.entries(analysis.sections).map(([sectionId, sectionData]) => (
                    <div key={sectionId} className="rounded-xl bg-[#1d2723] px-6 py-2">
                      <button
                        onClick={() => setOpenSection(openSection === sectionId ? "" : sectionId)}
                        className="flex cursor-pointer items-center justify-between py-4 w-full text-left"
                      >
                        <div className="flex items-center gap-3">
                          <p className="text-base font-medium capitalize">
                            {sectionId.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <span className={`text-sm px-2 py-1 rounded ${
                            sectionData.score >= 80 ? 'bg-[#38e07b]/20 text-[#38e07b]' : 
                            sectionData.score >= 60 ? 'bg-yellow-900/30 text-yellow-400' : 'bg-red-900/30 text-red-400'
                          }`}>{sectionData.score}%</span>
                        </div>
                        <motion.div
                          animate={{ rotate: openSection === sectionId ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown />
                        </motion.div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: openSection === sectionId ? "auto" : 0,
                          opacity: openSection === sectionId ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 space-y-3">
                          <div className="text-white">
                            <p className="font-medium text-white mb-2">Analysis:</p>
                            <p className="text-sm">{sectionData.feedback}</p>
                          </div>
                          <div>
                            <p className="font-medium text-white mb-2">Specific Improvements:</p>
                            <ul className="space-y-1">
                              {sectionData.improvements.map((improvement, index) => (
                                <li key={index} className="text-sm text-[#9eb7a8] flex items-start gap-2">
                                  <span className="text-[#38e07b] mt-1">→</span>
                                  {improvement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ATS Compatibility */}
            {analysis && (
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold mb-4">ATS Compatibility Report</h3>
                <div className="rounded-xl p-6 bg-[#1d2723]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-[#38e07b]">{analysis.atsCompatibility.score}%</span>
                    <div className="flex-1">
                      <div className="w-full bg-[#3d5245] rounded-full h-3">
                        <div 
                          className="h-3 rounded-full bg-[#38e07b] transition-all duration-1000"
                          style={{ width: `${analysis.atsCompatibility.score}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {analysis.atsCompatibility.issues.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-red-400 mb-2">Parsing Issues:</h4>
                      <ul className="space-y-1">
                        {analysis.atsCompatibility.issues.map((issue, index) => (
                          <li key={index} className="text-sm text-red-300 flex items-start gap-2">
                            <span className="text-red-500 mt-1">⚠</span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-medium text-[#38e07b] mb-2">Recommended Fixes:</h4>
                    <ul className="space-y-1">
                      {analysis.atsCompatibility.fixes.map((fix, index) => (
                        <li key={index} className="text-sm text-white flex items-start gap-2">
                          <span className="text-[#38e07b] mt-1">✓</span>
                          {fix}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  )
}