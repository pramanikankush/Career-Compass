import { UserProgress } from './dashboard-data'

const STORAGE_KEY = 'career-compass-progress'

export const getDefaultProgress = (): UserProgress => ({
  dailyGoal: {
    target: 3,
    completed: 0,
    description: 'Complete coding challenges'
  },
  achievements: {
    problemsSolved: 0,
    studyHours: 0,
    dayStreak: 0
  },
  completedTopics: [],
  lastFocusDate: '',
  currentStreak: 0
})

export const getUserProgress = (): UserProgress => {
  if (typeof window === 'undefined') return getDefaultProgress()
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? { ...getDefaultProgress(), ...JSON.parse(stored) } : getDefaultProgress()
  } catch {
    return getDefaultProgress()
  }
}

export const saveUserProgress = (progress: UserProgress): void => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (error) {
    console.error('Failed to save progress:', error)
  }
}

export const updateDailyProgress = (increment: number = 1): UserProgress => {
  const progress = getUserProgress()
  progress.dailyGoal.completed = Math.min(
    progress.dailyGoal.completed + increment,
    progress.dailyGoal.target
  )
  
  if (progress.dailyGoal.completed === progress.dailyGoal.target) {
    progress.achievements.dayStreak += 1
    progress.currentStreak += 1
  }
  
  saveUserProgress(progress)
  return progress
}

export const markTopicCompleted = (topicId: string): UserProgress => {
  const progress = getUserProgress()
  if (!progress.completedTopics.includes(topicId)) {
    progress.completedTopics.push(topicId)
    progress.achievements.problemsSolved += 1
    progress.achievements.studyHours += 1
  }
  progress.lastFocusDate = new Date().toISOString().split('T')[0]
  saveUserProgress(progress)
  return progress
}