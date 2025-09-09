"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Award, AlertCircle } from "lucide-react"

interface ScoreBenchmarkProps {
  score: number
  industryBenchmark: {
    detectedIndustry: string
    industryAverage: number
    percentileRank: number
    competitiveAnalysis: string
  }
}

export function ScoreBenchmark({ score, industryBenchmark }: ScoreBenchmarkProps) {
  const benchmarks = [
    {
      range: "90-100",
      label: "Exceptional",
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/30",
      icon: Award,
      description: "Top 5% of resumes. Excellent ATS compatibility and optimization.",
      outcomes: ["95%+ pass initial ATS screening", "High interview callback rate", "Strong keyword optimization"],
      industries: { "Technology": 92, "Finance": 94, "Healthcare": 91, "Marketing": 89 }
    },
    {
      range: "80-89",
      label: "Excellent",
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500/30",
      icon: TrendingUp,
      description: "Top 15% of resumes. Very good ATS compatibility with minor optimization opportunities.",
      outcomes: ["85-95% pass initial ATS screening", "Good interview callback rate", "Well-structured content"],
      industries: { "Technology": 84, "Finance": 86, "Healthcare": 83, "Marketing": 82 }
    },
    {
      range: "60-79",
      label: "Good",
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-500/30",
      icon: Users,
      description: "Average performance. Decent ATS compatibility but needs optimization for better results.",
      outcomes: ["60-85% pass initial ATS screening", "Moderate interview callback rate", "Room for improvement"],
      industries: { "Technology": 68, "Finance": 71, "Healthcare": 66, "Marketing": 64 }
    },
    {
      range: "0-59",
      label: "Needs Improvement",
      color: "text-red-400",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-500/30",
      icon: AlertCircle,
      description: "Below average. Significant ATS optimization needed to improve screening success.",
      outcomes: ["30-60% pass initial ATS screening", "Low interview callback rate", "Major optimization required"],
      industries: { "Technology": 45, "Finance": 48, "Healthcare": 43, "Marketing": 41 }
    }
  ]

  const getCurrentBenchmark = () => {
    if (score >= 90) return benchmarks[0]
    if (score >= 80) return benchmarks[1]
    if (score >= 60) return benchmarks[2]
    return benchmarks[3]
  }

  const currentBenchmark = getCurrentBenchmark()
  const Icon = currentBenchmark.icon

  const industryAverage = industryBenchmark.industryAverage
  const performanceVsIndustry = score - industryAverage

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Current Score Analysis */}
      <div className={`rounded-xl p-6 ${currentBenchmark.bgColor} border ${currentBenchmark.borderColor}`}>
        <div className="flex items-center gap-3 mb-4">
          <Icon className={`w-6 h-6 ${currentBenchmark.color}`} />
          <div>
            <h3 className={`text-lg font-bold ${currentBenchmark.color}`}>
              {currentBenchmark.label} ({currentBenchmark.range}%)
            </h3>
            <p className="text-sm text-gray-300">{currentBenchmark.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-white mb-3">Expected Outcomes</h4>
            <ul className="space-y-2">
              {currentBenchmark.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className={`${currentBenchmark.color} mt-1`}>•</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-3">Industry Comparison</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Your Score</span>
                <span className={`font-bold ${currentBenchmark.color}`}>{score}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{industryBenchmark.detectedIndustry} Average</span>
                <span className="font-bold text-gray-300">{industryAverage}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Percentile Rank</span>
                <span className="font-bold text-blue-400">{industryBenchmark.percentileRank}th</span>
              </div>
              <div className="mt-3 p-2 bg-gray-800/50 rounded">
                <p className="text-xs text-gray-300">{industryBenchmark.competitiveAnalysis}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Difference</span>
                <span className={`font-bold ${
                  performanceVsIndustry >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {performanceVsIndustry >= 0 ? '+' : ''}{performanceVsIndustry.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Benchmarks Overview */}
      <div className="rounded-xl p-6 bg-gray-700">
        <h3 className="text-lg font-bold mb-4">ATS Score Benchmarks</h3>
        <div className="space-y-4">
          {benchmarks.map((benchmark, index) => {
            const BenchmarkIcon = benchmark.icon
            const isCurrentRange = score >= parseInt(benchmark.range.split('-')[0]) && 
                                  score <= parseInt(benchmark.range.split('-')[1])
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                  isCurrentRange 
                    ? `${benchmark.bgColor} border ${benchmark.borderColor}` 
                    : 'bg-gray-800/30 hover:bg-gray-800/50'
                }`}
              >
                <BenchmarkIcon className={`w-5 h-5 ${benchmark.color}`} />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`font-medium ${benchmark.color}`}>
                      {benchmark.label}
                    </span>
                    <span className="text-sm text-gray-400">
                      {benchmark.range}%
                    </span>
                    {isCurrentRange && (
                      <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                        Your Range
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{benchmark.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Range Avg</p>
                  <p className={`font-bold ${benchmark.color}`}>
                    {Object.values(benchmark.industries)[0]}%
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Next Level Target */}
      {score < 90 && (
        <div className="rounded-xl p-4 bg-blue-900/20 border border-blue-500/30">
          <h4 className="font-medium text-blue-400 mb-2">🎯 Next Level Target</h4>
          <p className="text-sm text-blue-300 mb-3">
            {score < 60 
              ? `Reach 60% to enter the "Good" range and improve your ATS screening success rate to 60-85%.`
              : score < 80 
              ? `Reach 80% to enter the "Excellent" range and achieve 85-95% ATS screening success.`
              : `Reach 90% to join the top 5% of resumes with exceptional ATS compatibility.`
            }
          </p>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div className="relative h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-1000"
                style={{ width: `${(score / (score < 60 ? 60 : score < 80 ? 80 : 90)) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Current: {score}%</span>
            <span>Target: {score < 60 ? '60' : score < 80 ? '80' : '90'}%</span>
          </div>
        </div>
      )}
    </motion.div>
  )
}