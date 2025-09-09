"use client"

import { useState } from "react"
import { Search, ExternalLink, Code, Users, Brain, Building, Video, Star, Globe, BookOpen, Target, Zap, Award, FileText, MessageSquare } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function InterviewPrepPage() {
  const [activeTab, setActiveTab] = useState("Practice Questions")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")

  const tabs = ["Practice Questions", "Company Insights", "Mock Interviews"]
  const filters = ["All", "Technical", "Behavioral"]

  const practiceLinks = [
    {
      name: "GeeksforGeeks",
      description: "Comprehensive coding problems and interview questions",
      url: "https://www.geeksforgeeks.org/interview-questions/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "LeetCode",
      description: "Coding challenges and algorithm practice",
      url: "https://leetcode.com/problemset/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "HackerRank",
      description: "Coding challenges and skill assessments",
      url: "https://www.hackerrank.com/interview/interview-preparation-kit",
      icon: Code,
      category: "Technical"
    },
    {
      name: "InterviewBit",
      description: "Programming interview questions and mock interviews",
      url: "https://www.interviewbit.com/practice/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "CodeChef",
      description: "Competitive programming and interview prep",
      url: "https://www.codechef.com/practice",
      icon: Code,
      category: "Technical"
    },
    {
      name: "Codeforces",
      description: "Competitive programming contests and problems",
      url: "https://codeforces.com/problemset",
      icon: Code,
      category: "Technical"
    },
    {
      name: "AtCoder",
      description: "Japanese competitive programming platform",
      url: "https://atcoder.jp/contests/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "TopCoder",
      description: "Algorithmic programming challenges",
      url: "https://www.topcoder.com/challenges",
      icon: Code,
      category: "Technical"
    },
    {
      name: "Codility",
      description: "Programming tests and coding challenges",
      url: "https://app.codility.com/programmers/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "IndiaBix",
      description: "Aptitude, reasoning, and technical interview questions",
      url: "https://www.indiabix.com/",
      icon: Brain,
      category: "All"
    },
    {
      name: "Freshersworld",
      description: "Interview questions for freshers and experienced",
      url: "https://www.freshersworld.com/interview-questions",
      icon: BookOpen,
      category: "All"
    },
    {
      name: "CareerCup",
      description: "Interview questions from top tech companies",
      url: "https://www.careercup.com/",
      icon: Users,
      category: "Behavioral"
    },
    {
      name: "InterviewCake",
      description: "Programming interview questions with detailed solutions",
      url: "https://www.interviewcake.com/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "AlgoExpert",
      description: "Curated coding interview questions with video explanations",
      url: "https://www.algoexpert.io/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "Educative",
      description: "Interactive coding interview preparation courses",
      url: "https://www.educative.io/courses/grokking-the-coding-interview",
      icon: BookOpen,
      category: "Technical"
    },
    {
      name: "Brilliant",
      description: "Problem-solving and critical thinking practice",
      url: "https://brilliant.org/",
      icon: Brain,
      category: "All"
    },
    {
      name: "SPOJ",
      description: "Sphere Online Judge programming problems",
      url: "https://www.spoj.com/problems/classical/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "Project Euler",
      description: "Mathematical and computational problems",
      url: "https://projecteuler.net/",
      icon: Brain,
      category: "Technical"
    },
    {
      name: "Kaggle Learn",
      description: "Data science and machine learning interview prep",
      url: "https://www.kaggle.com/learn",
      icon: Target,
      category: "Technical"
    },
    {
      name: "System Design Primer",
      description: "Learn system design concepts for interviews",
      url: "https://github.com/donnemartin/system-design-primer",
      icon: Globe,
      category: "Technical"
    }
  ]

  const companyInsightsLinks = [
    {
      name: "Glassdoor",
      description: "Company reviews, salaries, and interview experiences",
      url: "https://www.glassdoor.com/",
      icon: Building,
      category: "All"
    },
    {
      name: "Blind",
      description: "Anonymous professional network for company insights",
      url: "https://www.teamblind.com/",
      icon: Users,
      category: "All"
    },
    {
      name: "Levels.fyi",
      description: "Tech compensation data and company levels",
      url: "https://www.levels.fyi/",
      icon: Star,
      category: "Technical"
    },
    {
      name: "Indeed Company Reviews",
      description: "Employee reviews and company ratings",
      url: "https://www.indeed.com/companies",
      icon: Building,
      category: "All"
    },
    {
      name: "LinkedIn Company Pages",
      description: "Professional company insights and employee updates",
      url: "https://www.linkedin.com/company/",
      icon: Users,
      category: "All"
    },
    {
      name: "Crunchbase",
      description: "Company information, funding, and growth data",
      url: "https://www.crunchbase.com/",
      icon: Globe,
      category: "All"
    },
    {
      name: "AngelList (Wellfound)",
      description: "Startup company profiles and culture insights",
      url: "https://wellfound.com/",
      icon: Star,
      category: "All"
    },
    {
      name: "Comparably",
      description: "Company culture and compensation comparisons",
      url: "https://www.comparably.com/",
      icon: Building,
      category: "All"
    },
    {
      name: "Vault",
      description: "Company rankings and insider information",
      url: "https://www.vault.com/",
      icon: Building,
      category: "All"
    },
    {
      name: "Great Place to Work",
      description: "Best companies to work for rankings and reviews",
      url: "https://www.greatplacetowork.com/",
      icon: Award,
      category: "All"
    },
    {
      name: "Fishbowl",
      description: "Professional community for workplace discussions",
      url: "https://www.fishbowlapp.com/",
      icon: MessageSquare,
      category: "All"
    },
    {
      name: "Kununu",
      description: "Employee reviews and company ratings (Europe focused)",
      url: "https://www.kununu.com/",
      icon: Building,
      category: "All"
    },
    {
      name: "RepVue",
      description: "Sales team insights and company reviews",
      url: "https://www.repvue.com/",
      icon: Target,
      category: "All"
    },
    {
      name: "Ambitionbox",
      description: "Company reviews and salary information (India focused)",
      url: "https://www.ambitionbox.com/",
      icon: Building,
      category: "All"
    },
    {
      name: "CareerBliss",
      description: "Employee happiness and company culture insights",
      url: "https://www.careerbliss.com/",
      icon: Star,
      category: "All"
    },
    {
      name: "Paysa (Karat)",
      description: "Tech salary data and company insights",
      url: "https://karat.com/",
      icon: Star,
      category: "Technical"
    }
  ]

  const mockInterviewLinks = [
    {
      name: "Pramp",
      description: "Free peer-to-peer mock interviews",
      url: "https://www.pramp.com/",
      icon: Video,
      category: "All"
    },
    {
      name: "Interviewing.io",
      description: "Anonymous technical interviews with engineers",
      url: "https://interviewing.io/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "LeetCode Mock",
      description: "Mock interviews simulating real company interviews",
      url: "https://leetcode.com/interview/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "InterviewBit Mock",
      description: "AI-powered mock interviews for tech roles",
      url: "https://www.interviewbit.com/mock-interview/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "Gainlo",
      description: "Mock interviews with experienced engineers",
      url: "https://www.gainlo.co/",
      icon: Users,
      category: "Technical"
    },
    {
      name: "Interview Kickstart",
      description: "Comprehensive interview preparation and mock sessions",
      url: "https://www.interviewkickstart.com/",
      icon: Video,
      category: "All"
    },
    {
      name: "Karat",
      description: "Technical interview platform with real engineers",
      url: "https://karat.com/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "CodeSignal",
      description: "Technical skills assessment and mock interviews",
      url: "https://codesignal.com/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "HackerEarth",
      description: "Coding challenges and mock interview platform",
      url: "https://www.hackerearth.com/practice/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "Coderbyte",
      description: "Programming challenges and interview prep",
      url: "https://coderbyte.com/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "TestGorilla",
      description: "Skills-based hiring and interview assessments",
      url: "https://www.testgorilla.com/",
      icon: FileText,
      category: "All"
    },
    {
      name: "HireVue",
      description: "Video interview practice and AI assessment",
      url: "https://www.hirevue.com/",
      icon: Video,
      category: "Behavioral"
    },
    {
      name: "Big Interview",
      description: "Comprehensive interview training system",
      url: "https://biginterview.com/",
      icon: Users,
      category: "Behavioral"
    },
    {
      name: "InterviewStream",
      description: "Video interview practice platform",
      url: "https://www.interviewstream.com/",
      icon: Video,
      category: "Behavioral"
    },
    {
      name: "MyInterviewPractice",
      description: "AI-powered interview practice with feedback",
      url: "https://myinterviewpractice.com/",
      icon: Brain,
      category: "Behavioral"
    },
    {
      name: "InterviewBuddy",
      description: "Peer-to-peer mock interview platform",
      url: "https://interviewbuddy.in/",
      icon: Users,
      category: "All"
    },
    {
      name: "Skilled",
      description: "Technical screening and interview platform",
      url: "https://www.skilled.dev/",
      icon: Code,
      category: "Technical"
    },
    {
      name: "Triplebyte",
      description: "Technical interview process optimization",
      url: "https://triplebyte.com/",
      icon: Zap,
      category: "Technical"
    }
  ]

  const getCurrentLinks = () => {
    switch (activeTab) {
      case "Company Insights":
        return companyInsightsLinks
      case "Mock Interviews":
        return mockInterviewLinks
      default:
        return practiceLinks
    }
  }

  const currentLinks = getCurrentLinks()
  const filteredLinks = activeFilter === "All" 
    ? currentLinks 
    : currentLinks.filter(link => link.category === activeFilter)

  const searchFilteredLinks = filteredLinks.filter(link =>
    link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    link.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-[#111714] text-white min-h-screen" style={{fontFamily: '"Spline Sans", "Noto Sans", sans-serif'}}>
      <Navbar title="Career Compass" activeLink="Interview Prep" variant="blue" />
      
      <div className="max-w-4xl mx-auto px-10 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Interview Preparation Hub</h1>
          <p className="text-[#9eb7a8]">Master your interviews with curated resources, practice questions, and company insights.</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-8 border-b border-[#3d5245]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "text-white border-b-2 border-[#38e07b]"
                  : "text-[#9eb7a8] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {(activeTab === "Practice Questions" || activeTab === "Company Insights" || activeTab === "Mock Interviews") && (
          <div>
            <h2 className="text-2xl font-bold mb-6">{activeTab}</h2>
            
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9eb7a8]" size={20} />
              <input
                type="text"
                placeholder="Search platforms"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1d2723] border border-[#3d5245] rounded-lg pl-10 pr-4 py-3 text-white placeholder-[#9eb7a8] focus:outline-none focus:ring-2 focus:ring-[#38e07b]"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-[#38e07b] text-black font-bold"
                      : "bg-[#1d2723] text-[#9eb7a8] hover:bg-[#3d5245]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Platforms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchFilteredLinks.map((platform, index) => {
                const IconComponent = platform.icon
                return (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1d2723] rounded-lg p-6 hover:bg-[#3d5245] transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-[#38e07b] p-3 rounded-lg">
                        <IconComponent className="text-black" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-white font-semibold text-lg">{platform.name}</h4>
                          <ExternalLink className="text-[#9eb7a8] group-hover:text-[#38e07b] transition-colors" size={16} />
                        </div>
                        <p className="text-[#9eb7a8] text-sm leading-relaxed">{platform.description}</p>
                        <span className="inline-block mt-3 px-3 py-1 bg-[#111714] text-[#9eb7a8] text-xs rounded-full">
                          {platform.category}
                        </span>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
            
            {searchFilteredLinks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#9eb7a8]">No platforms found matching your search.</p>
              </div>
            )}
          </div>
        )}




      </div>
    </div>
  )
}