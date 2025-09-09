"use client"

import { motion } from "framer-motion"
import { Circle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Card } from "@/components/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

interface Job {
  id?: string
  title: string
  company: string
  location: string
  salary_min?: number
  salary_max?: number
  description?: string
}

export default function Jobs() {
  const searchParams = useSearchParams()
  const [jobs, setJobs] = useState<Job[]>([])
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [remoteFilter, setRemoteFilter] = useState('All')
  const [salaryRange, setSalaryRange] = useState(50)
  const [domainFilter, setDomainFilter] = useState('All')
  const [cache, setCache] = useState<{[key: string]: Job[]}>({})
  
  // Get search query from URL params or use default
  useEffect(() => {
    const urlSearch = searchParams.get('search')
    if (urlSearch) {
      setSearchQuery(urlSearch)
    }
  }, [searchParams])
  
  // Sync search query when domain filter changes
  useEffect(() => {
    if (domainFilter !== 'All') {
      const domainKeywords = {
        'Software Engineering': 'software engineer',
        'Data Science': 'data scientist',
        'AI/ML Engineering': 'machine learning engineer',
        'Prompt Engineering': 'prompt engineer',
        'GenAI/LLM': 'generative ai engineer',
        'Product Management': 'product manager',
        'UX/UI Design': 'ui ux designer',
        'Marketing': 'marketing manager',
        'DevOps/Cloud': 'devops engineer',
        'Cybersecurity': 'cybersecurity analyst'
      }
      setSearchQuery(domainKeywords[domainFilter as keyof typeof domainKeywords] || '')
    }
  }, [domainFilter])

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

  const fetchJobs = async () => {
    // Check cache first
    if (cache[searchQuery]) {
      setJobs(cache[searchQuery])
      setFilteredJobs(cache[searchQuery])
      return
    }
    
    setLoading(true)
    try {
      const response = await fetch(`/api/jobs?q=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      if (data.jobs) {
        setJobs(data.jobs)
        setFilteredJobs(data.jobs)
        setCache(prev => ({...prev, [searchQuery]: data.jobs}))
      }
    } catch (error) {
      console.error('Error fetching jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = [...jobs]

    // Remote filter
    if (remoteFilter !== 'All') {
      filtered = filtered.filter(job => {
        if (remoteFilter === 'Fully Remote') return job.location?.includes('Remote')
        if (remoteFilter === 'Hybrid') return job.location?.includes('Hybrid')
        if (remoteFilter === 'On-site') return !job.location?.includes('Remote') && !job.location?.includes('Hybrid')
        return true
      })
    }

    // Salary filter
    const minSalary = salaryRange * 10000 // Convert to actual salary
    filtered = filtered.filter(job => {
      if (!job.salary_min) return true
      return job.salary_min >= minSalary
    })

    // Domain filter
    if (domainFilter !== 'All') {
      filtered = filtered.filter(job => {
        const title = job.title.toLowerCase()
        switch (domainFilter) {
          case 'Software Engineering': return title.includes('software') || title.includes('developer') || title.includes('engineer')
          case 'Data Science': return title.includes('data') || title.includes('scientist') || title.includes('analyst')
          case 'AI/ML Engineering': return title.includes('ai') || title.includes('ml') || title.includes('machine learning')
          case 'Prompt Engineering': return title.includes('prompt') || title.includes('llm') || title.includes('chatgpt')
          case 'GenAI/LLM': return title.includes('generative') || title.includes('gpt') || title.includes('llm')
          case 'Product Management': return title.includes('product') || title.includes('manager')
          case 'UX/UI Design': return title.includes('design') || title.includes('ui') || title.includes('ux')
          case 'Marketing': return title.includes('marketing') || title.includes('growth')
          case 'DevOps/Cloud': return title.includes('devops') || title.includes('cloud') || title.includes('aws')
          case 'Cybersecurity': return title.includes('security') || title.includes('cyber') || title.includes('infosec')
          default: return true
        }
      })
    }

    setFilteredJobs(filtered)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchJobs()
    }, 500) // 500ms debounce
    
    return () => clearTimeout(timer)
  }, [searchQuery])
  
  useEffect(() => {
    fetchJobs()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [jobs, remoteFilter, salaryRange, domainFilter])

  const getRandomMatch = () => Math.floor(Math.random() * 20) + 80
  const getRandomGradient = (index: number) => {
    const gradients = [
      "bg-gradient-to-br from-blue-500 to-purple-600",
      "bg-gradient-to-br from-green-500 to-blue-600", 
      "bg-gradient-to-br from-purple-500 to-pink-600",
      "bg-gradient-to-br from-orange-500 to-red-600",
      "bg-gradient-to-br from-teal-500 to-cyan-600"
    ]
    return gradients[index % gradients.length]
  }

  return (
    <div className="bg-[#111714] text-white min-h-screen" style={{fontFamily: '"Spline Sans", "Noto Sans", sans-serif'}}>
      <div className="flex h-full grow flex-col">
        <Navbar 
          title="Career Compass" 
          activeLink="Jobs" 
          variant="blue" 
        />
        
        <main className="grid flex-1 grid-cols-12 gap-8 px-10 py-8">
          <motion.aside 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="col-span-12 md:col-span-3"
          >
            <div className="rounded-xl border border-[#3d5245] bg-[#1d2723] p-6">
              <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-6">Filters</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 pb-2" htmlFor="remote-filter">
                    Remote Options
                  </label>
                  <select 
                    value={remoteFilter}
                    onChange={(e) => setRemoteFilter(e.target.value)}
                    className="form-select w-full rounded-lg border-none bg-[#111714] h-12 text-white focus:outline-none focus:ring-2 focus:ring-[#38e07b]" 
                    id="remote-filter"
                    suppressHydrationWarning
                  >
                    <option>All</option>
                    <option>Fully Remote</option>
                    <option>Hybrid</option>
                    <option>On-site</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">Salary Range</label>
                  <div className="relative pt-1">
                    <input 
                      value={salaryRange}
                      onChange={(e) => setSalaryRange(Number(e.target.value))}
                      className="w-full h-1 bg-[#3d5245] rounded-lg appearance-none cursor-pointer" 
                      max="250" 
                      min="0" 
                      type="range" 
                      style={{
                        background: `linear-gradient(to right, #38e07b 0%, #38e07b ${(salaryRange / 250) * 100}%, #3d5245 ${(salaryRange / 250) * 100}%, #3d5245 100%)`
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-[#9eb7a8]">
                    <span>₹{(salaryRange * 10000).toLocaleString('en-IN')}</span>
                    <span>₹25,00,000</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 pb-2" htmlFor="domain-filter">
                    Domain
                  </label>
                  <select 
                    value={domainFilter}
                    onChange={(e) => setDomainFilter(e.target.value)}
                    className="form-select w-full rounded-lg border-none bg-[#111714] h-12 text-white focus:outline-none focus:ring-2 focus:ring-[#38e07b]" 
                    id="domain-filter"
                    suppressHydrationWarning
                  >
                    <option>All</option>
                    <option>Software Engineering</option>
                    <option>Data Science</option>
                    <option>AI/ML Engineering</option>
                    <option>Prompt Engineering</option>
                    <option>GenAI/LLM</option>
                    <option>Product Management</option>
                    <option>UX/UI Design</option>
                    <option>Marketing</option>
                    <option>DevOps/Cloud</option>
                    <option>Cybersecurity</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.aside>
          
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-12 md:col-span-9"
          >
            <motion.h1 variants={itemVariants} className="text-white text-3xl font-bold leading-tight mb-6">
              Smart Job Matches {!loading && `(${filteredJobs.length} jobs)`}
            </motion.h1>
            <div className="mb-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Try: data scientist, software engineer, product manager, ui designer..."
                  className="flex-1 rounded-lg border-none bg-[#1d2723] px-4 py-2 text-white placeholder:text-[#9eb7a8] focus:outline-none focus:ring-2 focus:ring-[#38e07b]"
                  suppressHydrationWarning
                />
                <Button onClick={fetchJobs} className="bg-[#38e07b] hover:bg-[#2bc968] text-black font-bold">
                  Search
                </Button>
              </div>
            </div>
            
            {loading ? (
              <div className="text-center py-8">
                <p className="text-[#9eb7a8]">Loading jobs...</p>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-[#9eb7a8]">No jobs found matching your criteria. Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredJobs.map((job, index) => (
                  <motion.div key={job.id || index} variants={itemVariants}>
                    <Card variant="red" className="flex flex-col gap-4 p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-[#38e07b] mb-1">AI Match: {getRandomMatch()}%</div>
                          <h3 className="text-lg font-bold text-white">{job.title}</h3>
                          <p className="text-sm text-[#9eb7a8]">{job.company} - {job.location}</p>
                          {(job.salary_min || job.salary_max) && (
                            <p className="text-sm text-[#38e07b] mt-1">
                              ₹{job.salary_min?.toLocaleString()} - ₹{job.salary_max?.toLocaleString()}
                            </p>
                          )}
                        </div>
                        <div className={`w-24 h-24 rounded-lg ${getRandomGradient(index)} ml-4`}></div>
                      </div>
                      <div className="flex items-center gap-4 mt-auto pt-4">
                        <Button 
                          onClick={() => window.open(`https://www.naukri.com/jobs-in-india?k=${encodeURIComponent(job.title)}`, '_blank')}
                          className="flex-1 bg-[#38e07b] hover:bg-[#2bc968] text-black font-bold"
                        >
                          Apply Now
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            const details = `Job Details:\n\nTitle: ${job.title}\nCompany: ${job.company}\nLocation: ${job.location}\nSalary: ₹${job.salary_min?.toLocaleString('en-IN')} - ₹${job.salary_max?.toLocaleString('en-IN')}`
                            navigator.clipboard.writeText(details)
                            alert('Job details copied to clipboard!')
                          }}
                          className="flex-1"
                        >
                          Copy Details
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        </main>
      </div>
    </div>
  )
}