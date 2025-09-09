"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, RefreshCw, CheckCircle, Plus, Search, Bookmark, Code, BookOpen, Video } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { AbstractVisual } from "@/components/abstract-visual"
import { UsageBanner } from "@/components/usage-banner"
import { ErrorBoundary } from "@/components/error-boundary"
import { getRandomFocusTopic, getRandomQuote, FocusTopic } from "@/lib/dashboard-data"
import { getUserProgress, markTopicCompleted, updateDailyProgress, UserProgress } from "@/lib/user-progress"
import { useUser } from "@clerk/nextjs"

export default function Dashboard() {
  const { user } = useUser()
  const userName = user?.firstName || user?.fullName || "User"
  const [currentFocus, setCurrentFocus] = useState<FocusTopic | null>(null)
  const [motivationQuote, setMotivationQuote] = useState<string>('')
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const progress = getUserProgress()
    setUserProgress(progress)
    
    const today = new Date().toISOString().split('T')[0]
    const shouldGetNewFocus = progress.lastFocusDate !== today
    
    if (shouldGetNewFocus) {
      const newFocus = getRandomFocusTopic(progress.completedTopics)
      setCurrentFocus(newFocus)
    } else {
      setCurrentFocus(getRandomFocusTopic())
    }
    
    setMotivationQuote(getRandomQuote())
    setIsLoading(false)
  }, [])

  const handleNewFocus = () => {
    if (!userProgress) return
    const newFocus = getRandomFocusTopic(userProgress.completedTopics)
    setCurrentFocus(newFocus)
  }

  const handleCompleteTask = () => {
    if (!userProgress) return
    const updatedProgress = updateDailyProgress()
    setUserProgress(updatedProgress)
  }

  const handleCompleteFocus = () => {
    if (!currentFocus || !userProgress) return
    const updatedProgress = markTopicCompleted(currentFocus.id)
    setUserProgress(updatedProgress)
    handleNewFocus()
  }

  if (isLoading || !currentFocus || !userProgress) {
    return (
      <div className="bg-[#111714] text-white min-h-screen">
        <Navbar title="Career Compass" activeLink="Dashboard" variant="blue" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      </div>
    )
  }

  const progressPercentage = Math.round((userProgress.dailyGoal.completed / userProgress.dailyGoal.target) * 100)

  return (
    <div className="bg-[#111714] text-white min-h-screen" style={{fontFamily: '"Spline Sans", "Noto Sans", sans-serif'}}>
      <div className="flex h-full grow flex-col">
        <Navbar title="Career Compass" activeLink="Dashboard" variant="blue" />
        
        <main className="flex-1 px-10 py-8">
          <div className="mx-auto max-w-7xl">
            <UsageBanner />
            <div className="mb-8">
              <h1 className="text-4xl font-bold">Welcome back, {userName}</h1>
              <p className="text-[#9eb7a8]">Let's make today productive.</p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold">Today's Focus</h2>
                      <button
                        onClick={handleNewFocus}
                        className="flex items-center gap-2 text-[#38e07b] hover:text-[#2bc968] transition-colors text-sm"
                      >
                        <RefreshCw size={16} />
                        New Focus
                      </button>
                    </div>
                    <div className="flex items-center gap-6 rounded-2xl bg-[#1d2723] p-6">
                      <div className="flex-1 space-y-2">
                        <p className="text-sm text-[#9eb7a8]">Due Today</p>
                        <h3 className="text-xl font-bold">{currentFocus.title}</h3>
                        <p className="text-[#9eb7a8]">{currentFocus.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {currentFocus.resources.slice(0, 2).map((resource, index) => (
                            <a
                              key={index}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 px-2 py-1 bg-[#38e07b]/20 text-[#38e07b] rounded text-xs hover:bg-[#38e07b]/30 transition-colors"
                            >
                              <resource.icon size={12} />
                              {resource.name}
                              <ExternalLink size={10} />
                            </a>
                          ))}
                        </div>
                        <button 
                          onClick={handleCompleteFocus}
                          className="mt-2 rounded-full bg-[#38e07b] px-4 py-2 text-sm font-bold text-black transition-transform hover:scale-105"
                        >
                          Continue Learning
                        </button>
                      </div>
                      <div className="h-40 w-60 flex-shrink-0 rounded-xl flex items-center justify-center">
                        <AbstractVisual 
                          pattern={currentFocus.visual.pattern} 
                          gradient={currentFocus.visual.gradient} 
                          size={120} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="mb-4 text-2xl font-bold">Today's Schedule</h2>
                    <div className="space-y-4">
                      {currentFocus.resources.map((resource, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <div className="flex size-10 items-center justify-center rounded-full bg-[#1d2723]">
                              <resource.icon className="text-[#38e07b]" size={20} />
                            </div>
                            {index < currentFocus.resources.length - 1 && (
                              <div className="w-0.5 h-8 bg-[#3d5245]"></div>
                            )}
                          </div>
                          <div className="pt-2">
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium hover:text-[#38e07b] transition-colors flex items-center gap-1"
                            >
                              {resource.name}
                              <ExternalLink size={12} />
                            </a>
                            <p className="text-sm text-[#9eb7a8]">{resource.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 space-y-8">
                <div>
                  <h2 className="mb-4 text-2xl font-bold">Daily Progress</h2>
                  <div className="rounded-2xl bg-[#1d2723] p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{userProgress.dailyGoal.description}</span>
                        <span className="text-[#38e07b] font-bold">{progressPercentage}%</span>
                      </div>
                      <div className="w-full bg-[#3d5245] rounded-full h-2">
                        <div className="bg-[#38e07b] h-2 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
                      </div>
                      <p className="text-sm text-[#9eb7a8]">{userProgress.dailyGoal.completed}/{userProgress.dailyGoal.target} completed</p>
                      <button
                        onClick={handleCompleteTask}
                        disabled={userProgress.dailyGoal.completed >= userProgress.dailyGoal.target}
                        className="w-full rounded-full bg-[#38e07b] px-4 py-2 text-sm font-bold text-black transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {userProgress.dailyGoal.completed >= userProgress.dailyGoal.target ? 'Goal Completed!' : 'Mark Complete'}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="mb-4 text-2xl font-bold">Quick Actions</h2>
                  <div className="space-y-3">
                    <a className="group flex items-center gap-4 rounded-full bg-[#1d2723] p-4 transition-all hover:bg-[#38e07b]" href="/interview-prep">
                      <Plus className="text-[#38e07b] group-hover:text-black" size={20} />
                      <span className="font-bold group-hover:text-black">Interview Prep</span>
                    </a>
                    <a className="group flex items-center gap-4 rounded-full bg-[#1d2723] p-4 transition-all hover:bg-[#38e07b]" href="/jobs">
                      <Search className="text-[#38e07b] group-hover:text-black" size={20} />
                      <span className="font-bold group-hover:text-black">Search Jobs</span>
                    </a>
                    <a className="group flex items-center gap-4 rounded-full bg-[#1d2723] p-4 transition-all hover:bg-[#38e07b]" href="/resume">
                      <Bookmark className="text-[#38e07b] group-hover:text-black" size={20} />
                      <span className="font-bold group-hover:text-black">Resume Analyzer</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h2 className="mb-4 text-2xl font-bold">Achievements</h2>
                  <div className="rounded-2xl bg-[#1d2723] p-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#38e07b]">{userProgress.achievements.problemsSolved}</div>
                        <div className="text-sm text-[#9eb7a8]">Problems Solved</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#38e07b]">{userProgress.achievements.studyHours}</div>
                        <div className="text-sm text-[#9eb7a8]">Study Hours</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#38e07b]">{userProgress.achievements.dayStreak}</div>
                        <div className="text-sm text-[#9eb7a8]">Day Streak</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="mb-4 text-2xl font-bold">Motivation</h2>
                  <div className="relative rounded-2xl bg-gradient-to-t from-black/80 to-black/20 p-6 text-white" style={{backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><linearGradient id=%22grad%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22><stop offset=%220%25%22 style=%22stop-color:%2338e07b;stop-opacity:0.3%22 /><stop offset=%22100%25%22 style=%22stop-color:%231d2723;stop-opacity:0.8%22 /></linearGradient></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23grad)%22/></svg>')"}}>
                    <blockquote className="text-lg font-semibold">"{motivationQuote}"</blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
