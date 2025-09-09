import { Code, Video, Globe, Brain, Users, BookOpen, Target, Building } from "lucide-react"

export interface FocusResource {
  name: string
  description: string
  url: string
  icon: any
  category: string
  type: 'practice' | 'video' | 'article' | 'course'
}

export interface FocusTopic {
  id: string
  title: string
  description: string
  resources: FocusResource[]
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedTime: string
  visual: {
    gradient: string
    pattern: string
  }
}

export const focusTopics: FocusTopic[] = [
  {
    id: 'dsa',
    title: 'Data Structures and Algorithms',
    description: 'Master fundamental concepts and problem-solving techniques.',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 hours',
    visual: {
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      pattern: 'tree'
    },
    resources: [
      {
        name: 'LeetCode DSA Problems',
        description: 'Practice core data structure problems',
        url: 'https://leetcode.com/problemset/algorithms/',
        icon: Code,
        category: 'Technical',
        type: 'practice'
      },
      {
        name: 'Striver DSA Sheet',
        description: 'Comprehensive DSA problem collection',
        url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
        icon: BookOpen,
        category: 'Technical',
        type: 'course'
      },
      {
        name: 'Abdul Bari Algorithms',
        description: 'In-depth algorithm explanations',
        url: 'https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O',
        icon: Video,
        category: 'Technical',
        type: 'video'
      }
    ]
  },
  {
    id: 'system-design',
    title: 'System Design',
    description: 'Learn to design scalable distributed systems.',
    difficulty: 'Advanced',
    estimatedTime: '3-4 hours',
    visual: {
      gradient: 'from-purple-400 via-pink-500 to-red-500',
      pattern: 'network'
    },
    resources: [
      {
        name: 'System Design Primer',
        description: 'Comprehensive system design guide',
        url: 'https://github.com/donnemartin/system-design-primer',
        icon: Globe,
        category: 'Technical',
        type: 'article'
      },
      {
        name: 'Gaurav Sen System Design',
        description: 'System design video tutorials',
        url: 'https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX',
        icon: Video,
        category: 'Technical',
        type: 'video'
      },
      {
        name: 'InterviewBit System Design',
        description: 'Practice system design questions',
        url: 'https://www.interviewbit.com/system-design-interview-questions/',
        icon: Code,
        category: 'Technical',
        type: 'practice'
      }
    ]
  },
  {
    id: 'behavioral',
    title: 'Behavioral Interview Prep',
    description: 'Master the STAR method and common behavioral questions.',
    difficulty: 'Beginner',
    estimatedTime: '1-2 hours',
    visual: {
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      pattern: 'conversation'
    },
    resources: [
      {
        name: 'Pramp Behavioral Practice',
        description: 'Practice behavioral interviews with peers',
        url: 'https://www.pramp.com/',
        icon: Users,
        category: 'Behavioral',
        type: 'practice'
      },
      {
        name: 'Jeff Su Interview Tips',
        description: 'Behavioral interview strategies',
        url: 'https://www.youtube.com/c/JeffSu',
        icon: Video,
        category: 'Behavioral',
        type: 'video'
      },
      {
        name: 'CareerCup Behavioral Questions',
        description: 'Common behavioral interview questions',
        url: 'https://www.careercup.com/page?pid=behavioral-interview-questions',
        icon: Brain,
        category: 'Behavioral',
        type: 'article'
      }
    ]
  },
  {
    id: 'coding-practice',
    title: 'Coding Practice',
    description: 'Sharpen your coding skills with daily challenges.',
    difficulty: 'Intermediate',
    estimatedTime: '1-2 hours',
    visual: {
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      pattern: 'code'
    },
    resources: [
      {
        name: 'LeetCode Daily Challenge',
        description: 'Daily coding problems',
        url: 'https://leetcode.com/problemset/',
        icon: Code,
        category: 'Technical',
        type: 'practice'
      },
      {
        name: 'HackerRank Practice',
        description: 'Coding challenges and assessments',
        url: 'https://www.hackerrank.com/domains/algorithms',
        icon: Code,
        category: 'Technical',
        type: 'practice'
      },
      {
        name: 'NeetCode Solutions',
        description: 'Coding interview problem solutions',
        url: 'https://www.youtube.com/@NeetCode',
        icon: Video,
        category: 'Technical',
        type: 'video'
      }
    ]
  },
  {
    id: 'company-research',
    title: 'Company Research',
    description: 'Research target companies and their interview processes.',
    difficulty: 'Beginner',
    estimatedTime: '1 hour',
    visual: {
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      pattern: 'building'
    },
    resources: [
      {
        name: 'Glassdoor Reviews',
        description: 'Company reviews and interview experiences',
        url: 'https://www.glassdoor.com/',
        icon: Building,
        category: 'Research',
        type: 'article'
      },
      {
        name: 'Levels.fyi',
        description: 'Compensation data and levels',
        url: 'https://www.levels.fyi/',
        icon: Target,
        category: 'Research',
        type: 'article'
      },
      {
        name: 'Blind Community',
        description: 'Anonymous professional discussions',
        url: 'https://www.teamblind.com/',
        icon: Users,
        category: 'Research',
        type: 'article'
      }
    ]
  },
  {
    id: 'database-design',
    title: 'Database Design & SQL',
    description: 'Master database concepts and SQL query optimization.',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 hours',
    visual: {
      gradient: 'from-indigo-400 via-blue-500 to-cyan-600',
      pattern: 'database'
    },
    resources: [
      {
        name: 'SQLBolt Interactive Tutorial',
        description: 'Learn SQL with interactive exercises',
        url: 'https://sqlbolt.com/',
        icon: Code,
        category: 'Technical',
        type: 'practice'
      },
      {
        name: 'Database Design Course',
        description: 'Complete database design fundamentals',
        url: 'https://www.coursera.org/learn/database-design',
        icon: BookOpen,
        category: 'Technical',
        type: 'course'
      },
      {
        name: 'SQL Practice on HackerRank',
        description: 'SQL challenges and problems',
        url: 'https://www.hackerrank.com/domains/sql',
        icon: Code,
        category: 'Technical',
        type: 'practice'
      }
    ]
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Build modern web interfaces with React, Vue, or Angular.',
    difficulty: 'Intermediate',
    estimatedTime: '3-4 hours',
    visual: {
      gradient: 'from-pink-400 via-rose-500 to-orange-600',
      pattern: 'frontend'
    },
    resources: [
      {
        name: 'React Official Tutorial',
        description: 'Learn React from the official docs',
        url: 'https://react.dev/learn',
        icon: Code,
        category: 'Technical',
        type: 'course'
      },
      {
        name: 'Frontend Mentor Challenges',
        description: 'Real-world frontend projects',
        url: 'https://www.frontendmentor.io/',
        icon: Target,
        category: 'Technical',
        type: 'practice'
      },
      {
        name: 'JavaScript30 by Wes Bos',
        description: '30 vanilla JS projects in 30 days',
        url: 'https://www.youtube.com/playlist?list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH',
        icon: Video,
        category: 'Technical',
        type: 'video'
      }
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Basics',
    description: 'Understand ML algorithms and data science concepts.',
    difficulty: 'Advanced',
    estimatedTime: '4-5 hours',
    visual: {
      gradient: 'from-violet-400 via-purple-500 to-indigo-600',
      pattern: 'ml'
    },
    resources: [
      {
        name: 'Kaggle Learn ML Course',
        description: 'Free machine learning micro-courses',
        url: 'https://www.kaggle.com/learn/intro-to-machine-learning',
        icon: Target,
        category: 'Technical',
        type: 'course'
      },
      {
        name: 'Andrew Ng ML Course',
        description: 'Stanford ML course lectures',
        url: 'https://www.youtube.com/playlist?list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN',
        icon: Video,
        category: 'Technical',
        type: 'video'
      },
      {
        name: 'Scikit-learn Tutorials',
        description: 'Python ML library documentation',
        url: 'https://scikit-learn.org/stable/tutorial/',
        icon: BookOpen,
        category: 'Technical',
        type: 'article'
      }
    ]
  },
  {
    id: 'api-design',
    title: 'API Design & Development',
    description: 'Learn REST APIs, GraphQL, and microservices architecture.',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 hours',
    visual: {
      gradient: 'from-teal-400 via-green-500 to-emerald-600',
      pattern: 'api'
    },
    resources: [
      {
        name: 'REST API Tutorial',
        description: 'Complete guide to REST API design',
        url: 'https://restfulapi.net/',
        icon: Globe,
        category: 'Technical',
        type: 'article'
      },
      {
        name: 'GraphQL Learning',
        description: 'Learn GraphQL query language',
        url: 'https://graphql.org/learn/',
        icon: Code,
        category: 'Technical',
        type: 'course'
      },
      {
        name: 'Postman API Testing',
        description: 'API testing and documentation',
        url: 'https://learning.postman.com/',
        icon: Target,
        category: 'Technical',
        type: 'practice'
      }
    ]
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing (AWS/Azure)',
    description: 'Master cloud services and deployment strategies.',
    difficulty: 'Advanced',
    estimatedTime: '3-4 hours',
    visual: {
      gradient: 'from-sky-400 via-blue-500 to-indigo-600',
      pattern: 'cloud'
    },
    resources: [
      {
        name: 'AWS Free Tier Learning',
        description: 'Hands-on AWS services experience',
        url: 'https://aws.amazon.com/training/',
        icon: Globe,
        category: 'Technical',
        type: 'course'
      },
      {
        name: 'AWS Tutorial for Beginners',
        description: 'Complete AWS tutorial series',
        url: 'https://www.youtube.com/playlist?list=PLt1SIbA8guusxiHz9bveV-UHs_biWFnpb',
        icon: Video,
        category: 'Technical',
        type: 'video'
      },
      {
        name: 'Azure Learning Path',
        description: 'Microsoft Azure fundamentals',
        url: 'https://docs.microsoft.com/en-us/learn/azure/',
        icon: BookOpen,
        category: 'Technical',
        type: 'course'
      }
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Build iOS and Android apps with React Native or Flutter.',
    difficulty: 'Intermediate',
    estimatedTime: '3-4 hours',
    visual: {
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      pattern: 'mobile'
    },
    resources: [
      {
        name: 'React Native Tutorial',
        description: 'Cross-platform mobile development',
        url: 'https://reactnative.dev/docs/tutorial',
        icon: Code,
        category: 'Technical',
        type: 'course'
      },
      {
        name: 'Flutter Documentation',
        description: 'Google\'s UI toolkit for mobile',
        url: 'https://flutter.dev/docs',
        icon: BookOpen,
        category: 'Technical',
        type: 'course'
      },
      {
        name: 'Mobile Dev Weekly',
        description: 'Stay updated with mobile trends',
        url: 'https://mobiledevweekly.com/',
        icon: Globe,
        category: 'Technical',
        type: 'article'
      }
    ]
  },
  {
    id: 'devops-cicd',
    title: 'DevOps & CI/CD',
    description: 'Learn deployment pipelines and infrastructure automation.',
    difficulty: 'Advanced',
    estimatedTime: '3-4 hours',
    visual: {
      gradient: 'from-slate-400 via-gray-500 to-zinc-600',
      pattern: 'devops'
    },
    resources: [
      {
        name: 'Docker Getting Started',
        description: 'Containerization fundamentals',
        url: 'https://docs.docker.com/get-started/',
        icon: Code,
        category: 'Technical',
        type: 'course'
      },
      {
        name: 'GitHub Actions Tutorial',
        description: 'Automate workflows with CI/CD',
        url: 'https://docs.github.com/en/actions/learn-github-actions',
        icon: Globe,
        category: 'Technical',
        type: 'course'
      },
      {
        name: 'Kubernetes Basics',
        description: 'Container orchestration platform',
        url: 'https://kubernetes.io/docs/tutorials/',
        icon: BookOpen,
        category: 'Technical',
        type: 'course'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    description: 'Understand security principles and ethical hacking.',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 hours',
    visual: {
      gradient: 'from-red-400 via-pink-500 to-purple-600',
      pattern: 'security'
    },
    resources: [
      {
        name: 'OWASP Top 10',
        description: 'Web application security risks',
        url: 'https://owasp.org/www-project-top-ten/',
        icon: Globe,
        category: 'Technical',
        type: 'article'
      },
      {
        name: 'Cybersecurity Full Course',
        description: 'Complete cybersecurity fundamentals',
        url: 'https://www.youtube.com/playlist?list=PLBf0hzazHTGOEuhPQSnq-Ej8jRyXxfYvl',
        icon: Video,
        category: 'Technical',
        type: 'video'
      },
      {
        name: 'HackerRank Security',
        description: 'Security coding challenges',
        url: 'https://www.hackerrank.com/domains/security',
        icon: Code,
        category: 'Technical',
        type: 'practice'
      }
    ]
  },
  {
    id: 'product-management',
    title: 'Product Management Skills',
    description: 'Learn product strategy, roadmapping, and user research.',
    difficulty: 'Beginner',
    estimatedTime: '2 hours',
    visual: {
      gradient: 'from-emerald-400 via-teal-500 to-blue-600',
      pattern: 'product'
    },
    resources: [
      {
        name: 'Product School Resources',
        description: 'Product management fundamentals',
        url: 'https://productschool.com/resources/',
        icon: BookOpen,
        category: 'Product',
        type: 'article'
      },
      {
        name: 'Mind the Product',
        description: 'Product management community',
        url: 'https://www.mindtheproduct.com/',
        icon: Users,
        category: 'Product',
        type: 'article'
      },
      {
        name: 'Product Management Course',
        description: 'Complete product management guide',
        url: 'https://www.youtube.com/playlist?list=PLrtjkLnNjGHu5XEbhsPVX_9nHBwjlPbvO',
        icon: Video,
        category: 'Product',
        type: 'course'
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Principles',
    description: 'Master user interface and experience design fundamentals.',
    difficulty: 'Beginner',
    estimatedTime: '2-3 hours',
    visual: {
      gradient: 'from-fuchsia-400 via-pink-500 to-rose-600',
      pattern: 'design'
    },
    resources: [
      {
        name: 'Figma Design Tutorial',
        description: 'Learn design tools and prototyping',
        url: 'https://www.figma.com/resources/learn-design/',
        icon: Target,
        category: 'Design',
        type: 'course'
      },
      {
        name: 'UX Design Full Course',
        description: 'Complete UX design fundamentals',
        url: 'https://www.youtube.com/playlist?list=PLDtHAiqIa4wa5MBbE_XDoqY51sAkQnkjt',
        icon: Video,
        category: 'Design',
        type: 'course'
      },
      {
        name: 'Daily UI Challenges',
        description: '100 days of UI design practice',
        url: 'https://www.dailyui.co/',
        icon: Target,
        category: 'Design',
        type: 'practice'
      }
    ]
  }
]

export const motivationalQuotes = [
  "Every expert was once a beginner. Keep practicing, and you'll get there.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "Don't watch the clock; do what it does. Keep going.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It is during our darkest moments that we must focus to see the light.",
  "Success is walking from failure to failure with no loss of enthusiasm."
]

export interface UserProgress {
  dailyGoal: {
    target: number
    completed: number
    description: string
  }
  achievements: {
    problemsSolved: number
    studyHours: number
    dayStreak: number
  }
  completedTopics: string[]
  lastFocusDate: string
  currentStreak: number
}

export const getRandomFocusTopic = (excludeIds: string[] = []): FocusTopic => {
  const availableTopics = focusTopics.filter(topic => !excludeIds.includes(topic.id))
  const randomIndex = Math.floor(Math.random() * availableTopics.length)
  return availableTopics[randomIndex] || focusTopics[0]
}

export const getRandomQuote = (): string => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length)
  return motivationalQuotes[randomIndex]
}