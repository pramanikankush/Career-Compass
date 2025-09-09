import { NextResponse } from 'next/server'
import { rateLimit, getClientIP } from '@/lib/rate-limiter'

// Diverse Indian job data with 10+ jobs per category
const mockIndianJobs = [
  // Software Engineering (15 jobs)
  { id: '1', title: 'Software Engineer', company: 'Tata Consultancy Services', location: 'Bangalore, India', salary_min: 600000, salary_max: 1200000 },
  { id: '2', title: 'Full Stack Developer', company: 'Wipro', location: 'Pune, India', salary_min: 500000, salary_max: 1000000 },
  { id: '3', title: 'Frontend Developer', company: 'Zomato', location: 'Gurgaon, India', salary_min: 600000, salary_max: 1200000 },
  { id: '4', title: 'Backend Developer', company: 'Paytm', location: 'Noida, India', salary_min: 800000, salary_max: 1400000 },
  { id: '5', title: 'Mobile App Developer', company: 'Ola', location: 'Bangalore, India', salary_min: 700000, salary_max: 1300000 },
  { id: '6', title: 'DevOps Engineer', company: 'HCL Technologies', location: 'Chennai, India', salary_min: 700000, salary_max: 1300000 },
  { id: '7', title: 'Cloud Architect', company: 'Amazon', location: 'Hyderabad, India', salary_min: 1200000, salary_max: 2200000 },
  { id: '8', title: 'QA Engineer', company: 'Tech Mahindra', location: 'Mumbai, India', salary_min: 400000, salary_max: 800000 },
  { id: '9', title: 'React Developer', company: 'Swiggy', location: 'Bangalore, India', salary_min: 800000, salary_max: 1400000 },
  { id: '10', title: 'Node.js Developer', company: 'Flipkart', location: 'Bangalore, India', salary_min: 900000, salary_max: 1600000 },
  { id: '11', title: 'Python Developer', company: 'Google', location: 'Hyderabad, India', salary_min: 1000000, salary_max: 1800000 },
  { id: '12', title: 'Java Developer', company: 'Infosys', location: 'Pune, India', salary_min: 600000, salary_max: 1200000 },
  { id: '13', title: 'Angular Developer', company: 'Accenture', location: 'Chennai, India', salary_min: 700000, salary_max: 1300000 },
  { id: '14', title: 'Software Architect', company: 'Microsoft', location: 'Bangalore, India', salary_min: 1500000, salary_max: 2500000 },
  { id: '15', title: 'Site Reliability Engineer', company: 'Uber', location: 'Bangalore, India', salary_min: 1200000, salary_max: 2000000 },

  // Data Science (12 jobs)
  { id: '16', title: 'Data Scientist', company: 'Infosys', location: 'Hyderabad, India', salary_min: 800000, salary_max: 1500000 },
  { id: '17', title: 'Machine Learning Engineer', company: 'Swiggy', location: 'Bangalore, India', salary_min: 1000000, salary_max: 1800000 },
  { id: '18', title: 'Data Analyst', company: 'Flipkart', location: 'Bangalore, India', salary_min: 600000, salary_max: 1200000 },
  { id: '19', title: 'AI Research Scientist', company: 'Microsoft', location: 'Hyderabad, India', salary_min: 1500000, salary_max: 2500000 },
  { id: '20', title: 'Business Intelligence Analyst', company: 'Amazon', location: 'Bangalore, India', salary_min: 700000, salary_max: 1300000 },
  { id: '21', title: 'Data Engineer', company: 'Uber', location: 'Bangalore, India', salary_min: 900000, salary_max: 1600000 },
  { id: '22', title: 'ML Ops Engineer', company: 'Ola', location: 'Bangalore, India', salary_min: 1100000, salary_max: 1900000 },
  { id: '23', title: 'Quantitative Analyst', company: 'Goldman Sachs', location: 'Mumbai, India', salary_min: 1200000, salary_max: 2200000 },
  { id: '24', title: 'Research Scientist', company: 'Google', location: 'Bangalore, India', salary_min: 1400000, salary_max: 2400000 },
  { id: '25', title: 'Data Science Manager', company: 'Paytm', location: 'Noida, India', salary_min: 1600000, salary_max: 2800000 },
  { id: '26', title: 'Analytics Consultant', company: 'Deloitte', location: 'Mumbai, India', salary_min: 800000, salary_max: 1500000 },
  { id: '27', title: 'Deep Learning Engineer', company: 'Nvidia', location: 'Pune, India', salary_min: 1300000, salary_max: 2300000 },

  // Product Management (10 jobs)
  { id: '28', title: 'Product Manager', company: 'Flipkart', location: 'Bangalore, India', salary_min: 1500000, salary_max: 2500000 },
  { id: '29', title: 'Senior Product Manager', company: 'Amazon', location: 'Bangalore, India', salary_min: 2000000, salary_max: 3500000 },
  { id: '30', title: 'Product Owner', company: 'Zomato', location: 'Gurgaon, India', salary_min: 1200000, salary_max: 2000000 },
  { id: '31', title: 'Associate Product Manager', company: 'Google', location: 'Hyderabad, India', salary_min: 1000000, salary_max: 1800000 },
  { id: '32', title: 'Product Marketing Manager', company: 'Microsoft', location: 'Bangalore, India', salary_min: 1300000, salary_max: 2200000 },
  { id: '33', title: 'Growth Product Manager', company: 'Razorpay', location: 'Bangalore, India', salary_min: 1400000, salary_max: 2400000 },
  { id: '34', title: 'Technical Product Manager', company: 'Uber', location: 'Bangalore, India', salary_min: 1600000, salary_max: 2800000 },
  { id: '35', title: 'Product Strategy Manager', company: 'PhonePe', location: 'Bangalore, India', salary_min: 1500000, salary_max: 2600000 },
  { id: '36', title: 'VP Product', company: 'Swiggy', location: 'Bangalore, India', salary_min: 3000000, salary_max: 5000000 },
  { id: '37', title: 'Product Analyst', company: 'Ola', location: 'Bangalore, India', salary_min: 900000, salary_max: 1600000 },

  // UX/UI Design (12 jobs)
  { id: '38', title: 'UI/UX Designer', company: 'Adobe', location: 'Noida, India', salary_min: 600000, salary_max: 1200000 },
  { id: '39', title: 'Product Designer', company: 'PhonePe', location: 'Bangalore, India', salary_min: 800000, salary_max: 1500000 },
  { id: '40', title: 'Graphic Designer', company: 'Byju\'s', location: 'Bangalore, India', salary_min: 400000, salary_max: 800000 },
  { id: '41', title: 'Senior UX Designer', company: 'Flipkart', location: 'Bangalore, India', salary_min: 1000000, salary_max: 1800000 },
  { id: '42', title: 'Visual Designer', company: 'Zomato', location: 'Gurgaon, India', salary_min: 600000, salary_max: 1100000 },
  { id: '43', title: 'Interaction Designer', company: 'Google', location: 'Bangalore, India', salary_min: 1200000, salary_max: 2200000 },
  { id: '44', title: 'UX Researcher', company: 'Microsoft', location: 'Hyderabad, India', salary_min: 900000, salary_max: 1600000 },
  { id: '45', title: 'Design Lead', company: 'Uber', location: 'Bangalore, India', salary_min: 1500000, salary_max: 2500000 },
  { id: '46', title: 'Motion Graphics Designer', company: 'Netflix', location: 'Mumbai, India', salary_min: 700000, salary_max: 1300000 },
  { id: '47', title: 'Brand Designer', company: 'Paytm', location: 'Noida, India', salary_min: 600000, salary_max: 1200000 },
  { id: '48', title: 'Design Systems Designer', company: 'Razorpay', location: 'Bangalore, India', salary_min: 1100000, salary_max: 1900000 },
  { id: '49', title: 'Creative Director', company: 'Swiggy', location: 'Bangalore, India', salary_min: 1800000, salary_max: 3000000 },

  // Marketing (15 jobs)
  { id: '50', title: 'Digital Marketing Manager', company: 'Unilever', location: 'Mumbai, India', salary_min: 700000, salary_max: 1300000 },
  { id: '51', title: 'Content Marketing Specialist', company: 'Zomato', location: 'Gurgaon, India', salary_min: 500000, salary_max: 900000 },
  { id: '52', title: 'Growth Marketing Lead', company: 'Razorpay', location: 'Bangalore, India', salary_min: 900000, salary_max: 1600000 },
  { id: '53', title: 'Performance Marketing Manager', company: 'Flipkart', location: 'Bangalore, India', salary_min: 800000, salary_max: 1400000 },
  { id: '54', title: 'Social Media Manager', company: 'Byju\'s', location: 'Bangalore, India', salary_min: 500000, salary_max: 900000 },
  { id: '55', title: 'Brand Manager', company: 'Coca Cola', location: 'Mumbai, India', salary_min: 900000, salary_max: 1600000 },
  { id: '56', title: 'Marketing Analytics Manager', company: 'Amazon', location: 'Bangalore, India', salary_min: 1000000, salary_max: 1800000 },
  { id: '57', title: 'Email Marketing Specialist', company: 'Paytm', location: 'Noida, India', salary_min: 400000, salary_max: 800000 },
  { id: '58', title: 'SEO Manager', company: 'Ola', location: 'Bangalore, India', salary_min: 600000, salary_max: 1200000 },
  { id: '59', title: 'Content Creator', company: 'Netflix', location: 'Mumbai, India', salary_min: 500000, salary_max: 1000000 },
  { id: '60', title: 'Marketing Director', company: 'Google', location: 'Gurgaon, India', salary_min: 2000000, salary_max: 3500000 },
  { id: '61', title: 'Influencer Marketing Manager', company: 'Myntra', location: 'Bangalore, India', salary_min: 700000, salary_max: 1300000 },
  { id: '62', title: 'Campaign Manager', company: 'Swiggy', location: 'Bangalore, India', salary_min: 600000, salary_max: 1100000 },
  { id: '63', title: 'Marketing Automation Specialist', company: 'Salesforce', location: 'Hyderabad, India', salary_min: 800000, salary_max: 1500000 },
  { id: '64', title: 'Growth Hacker', company: 'Uber', location: 'Bangalore, India', salary_min: 900000, salary_max: 1700000 }
]

// JSearch API integration
async function fetchFromJSearch(query: string) {
  try {
    const searchQuery = `${query} jobs in india`
    const response = await fetch(`https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(searchQuery)}&page=1&num_pages=1&country=in&date_posted=all`, {
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || '',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      signal: AbortSignal.timeout(5000) // 5 second timeout
    })
    
    const data = await response.json()
    return (data.data || []).slice(0, 8).map((job: any, index: number) => ({
      id: `jsearch-${index}`,
      title: job.job_title,
      company: job.employer_name,
      location: job.job_city ? `${job.job_city}, India` : 'India',
      salary_min: job.job_min_salary,
      salary_max: job.job_max_salary,
      description: job.job_description?.substring(0, 200) || ''
    }))
  } catch (error) {
    console.error('JSearch API error:', error)
    return []
  }
}

export async function GET(request: Request) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request)
    if (!rateLimit(clientIP, 20, 60000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || ''
    
    let jobs = [...mockIndianJobs]
    
    // Filter mock jobs based on query if provided
    if (query && query.trim() && query !== 'jobs') {
      const filteredMockJobs = mockIndianJobs.filter(job => 
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase())
      )
      jobs = filteredMockJobs.length > 0 ? filteredMockJobs : mockIndianJobs.slice(0, 15)
    } else {
      // Show all jobs by default
      jobs = mockIndianJobs.slice(0, 20)
    }
    
    // Try real-time scraping (multiple approaches)
    try {
      // JSearch API for real jobs
      const jsearchJobs = await fetchFromJSearch(query || 'software engineer')
      
      const realJobs = jsearchJobs
      if (realJobs.length > 0) {
        jobs = [...realJobs, ...jobs.slice(0, 10)]
      }
    } catch (error) {
      console.log('Real-time scraping failed, using mock data')
    }
    
    // Try to fetch from Remotive API for additional remote jobs
    try {
      const response = await fetch('https://remotive.io/api/remote-jobs?limit=5')
      if (response.ok) {
        const remoteData = await response.json()
        const remoteJobs = remoteData.jobs?.slice(0, 3).map((job: any, index: number) => ({
          id: `remote-${index}`,
          title: job.title,
          company: job.company_name,
          location: 'Remote (India)',
          salary_min: null,
          salary_max: null,
          description: job.description?.substring(0, 200) || ''
        })) || []
        jobs = [...jobs, ...remoteJobs]
      }
    } catch (remoteError) {
      console.log('Remote API unavailable')
    }
    
    // Filter jobs by search query if provided
    if (query) {
      jobs = jobs.filter((job: any) => 
        job.title?.toLowerCase().includes(query.toLowerCase()) ||
        job.company?.toLowerCase().includes(query.toLowerCase()) ||
        job.location?.toLowerCase().includes(query.toLowerCase())
      )
    }
    
    // Limit to 20 jobs and shuffle for variety
    jobs = jobs.sort(() => Math.random() - 0.5).slice(0, 20)

    const formattedJobs = jobs.map((job: any) => ({
      id: job.id,
      title: job.title,
      company: job.company,
      description: job.description || '',
      location: job.location,
      salary_min: job.salary_min,
      salary_max: job.salary_max,
      remote_type: job.location?.includes('Remote') ? 'remote' : 'onsite',
      job_type: 'full-time',
      external_id: job.id,
      source: 'indian-jobs'
    }))

    return NextResponse.json({ jobs: formattedJobs, count: formattedJobs.length })
  } catch (error: any) {
    console.error('Jobs API Error:', error.message)
    return NextResponse.json({ 
      jobs: mockIndianJobs.slice(0, 10).map(job => ({
        ...job,
        remote_type: 'onsite',
        job_type: 'full-time',
        external_id: job.id,
        source: 'fallback'
      })),
      count: 10
    })
  }
}