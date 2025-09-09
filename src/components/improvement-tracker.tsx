"use client"

import { motion } from "framer-motion"
import { CheckCircle, Circle, Clock, Zap, Target } from "lucide-react"
import { useState } from "react"

interface ImprovementItem {
  id: string
  text: string
  category: 'immediate' | 'shortTerm' | 'longTerm'
  estimatedImpact: number
  timeRequired: string
  completed: boolean
}

interface ImprovementTrackerProps {
  improvementPlan: {
    immediate: Array<{text: string, estimatedImpact: number, timeRequired: string}>
    shortTerm: Array<{text: string, estimatedImpact: number, timeRequired: string}>
    longTerm: Array<{text: string, estimatedImpact: number, timeRequired: string}>
  }
  currentScore: number
}

export function ImprovementTracker({ improvementPlan, currentScore }: ImprovementTrackerProps) {
  const [improvements, setImprovements] = useState<ImprovementItem[]>(() => {
    const items: ImprovementItem[] = []
    
    improvementPlan.immediate.forEach((item, index) => {
      items.push({
        id: `immediate-${index}`,
        text: item.text,
        category: 'immediate',
        estimatedImpact: item.estimatedImpact,
        timeRequired: item.timeRequired,
        completed: false
      })
    })
    
    improvementPlan.shortTerm.forEach((item, index) => {
      items.push({
        id: `shortTerm-${index}`,
        text: item.text,
        category: 'shortTerm',
        estimatedImpact: item.estimatedImpact,
        timeRequired: item.timeRequired,
        completed: false
      })
    })
    
    improvementPlan.longTerm.forEach((item, index) => {
      items.push({
        id: `longTerm-${index}`,
        text: item.text,
        category: 'longTerm',
        estimatedImpact: item.estimatedImpact,
        timeRequired: item.timeRequired,
        completed: false
      })
    })
    
    return items
  })

  const toggleImprovement = (id: string) => {
    setImprovements(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const completedImprovements = improvements.filter(item => item.completed)
  const potentialScoreIncrease = completedImprovements.reduce((sum, item) => sum + item.estimatedImpact, 0)
  const projectedScore = Math.min(100, currentScore + potentialScoreIncrease)

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'immediate':
        return {
          icon: Zap,
          color: 'text-green-400',
          bgColor: 'bg-green-900/20',
          borderColor: 'border-green-500/30',
          title: '🚀 Quick Wins',
          timeframe: 'Minutes'
        }
      case 'shortTerm':
        return {
          icon: Clock,
          color: 'text-yellow-400',
          bgColor: 'bg-yellow-900/20',
          borderColor: 'border-yellow-500/30',
          title: '⏱️ Short-term',
          timeframe: 'Hours'
        }
      case 'longTerm':
        return {
          icon: Target,
          color: 'text-blue-400',
          bgColor: 'bg-blue-900/20',
          borderColor: 'border-blue-500/30',
          title: '📈 Strategic',
          timeframe: 'Days/Weeks'
        }
      default:
        return {
          icon: Circle,
          color: 'text-gray-400',
          bgColor: 'bg-gray-900/20',
          borderColor: 'border-gray-500/30',
          title: 'Other',
          timeframe: 'Variable'
        }
    }
  }

  const groupedImprovements = improvements.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, ImprovementItem[]>)

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="rounded-xl p-6 bg-gray-700">
        <h4 className="text-lg font-bold mb-4">Improvement Progress</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">{completedImprovements.length}</p>
            <p className="text-sm text-gray-400">Completed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-400">+{potentialScoreIncrease}</p>
            <p className="text-sm text-gray-400">Points Gained</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">{projectedScore}%</p>
            <p className="text-sm text-gray-400">Projected Score</p>
          </div>
        </div>
        
        {potentialScoreIncrease > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Current: {currentScore}%</span>
              <span>Projected: {projectedScore}%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-3">
              <div className="relative h-3 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-500 transition-all duration-1000"
                  style={{ width: `${currentScore}%` }}
                ></div>
                <div 
                  className="absolute top-0 h-full bg-green-500 transition-all duration-1000"
                  style={{ 
                    left: `${currentScore}%`,
                    width: `${Math.min(potentialScoreIncrease, 100 - currentScore)}%`
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Improvement Categories */}
      {Object.entries(groupedImprovements).map(([category, items]) => {
        const categoryInfo = getCategoryInfo(category)
        const Icon = categoryInfo.icon
        
        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-xl p-4 ${categoryInfo.bgColor} border ${categoryInfo.borderColor}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon className={`w-5 h-5 ${categoryInfo.color}`} />
              <div>
                <h4 className={`font-medium ${categoryInfo.color}`}>{categoryInfo.title}</h4>
                <p className="text-xs text-gray-400">{categoryInfo.timeframe}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-3 p-3 rounded-lg transition-all cursor-pointer ${
                    item.completed 
                      ? 'bg-gray-800/50 opacity-75' 
                      : 'bg-gray-800/30 hover:bg-gray-800/50'
                  }`}
                  onClick={() => toggleImprovement(item.id)}
                >
                  <button className="mt-0.5">
                    {item.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400 hover:text-white" />
                    )}
                  </button>
                  <div className="flex-1">
                    <p className={`text-sm ${item.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                      {item.text}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-blue-400">+{item.estimatedImpact} points</span>
                      <span className="text-xs text-gray-500">• {item.timeRequired}</span>
                      {item.completed && (
                        <span className="text-xs text-green-400">✓ Completed</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}