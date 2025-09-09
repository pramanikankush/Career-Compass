"use client"

import { motion } from "framer-motion"
import { Download, History, GripVertical, Edit, Plus, Eye, Check } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ResumeForm } from "@/components/resume-form"
import { ResumePreview } from "@/components/resume-preview"
import { TemplateSelector } from "@/components/template-selector"
import { TemplateShowcase } from "@/components/template-showcase"
import { useState } from "react"

export default function Builder() {
  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const [activeSection, setActiveSection] = useState("Personal Info")
  const [showAllTemplates, setShowAllTemplates] = useState(false)
  const [sections, setSections] = useState([
    { id: 0, name: "Personal Info", icon: "👤" },
    { id: 1, name: "Experience", icon: "💼" },
    { id: 2, name: "Education", icon: "🎓" },
    { id: 3, name: "Skills", icon: "⚡" },
    { id: 4, name: "Projects", icon: "🚀" },
    { id: 5, name: "Certifications", icon: "🏆" },
    { id: 6, name: "Languages", icon: "🌐" },
    { id: 7, name: "Awards", icon: "🥇" },
    { id: 8, name: "Volunteer", icon: "🤝" }
  ])
  
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      summary: "Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Passionate about creating scalable solutions and leading cross-functional teams."
    },
    experience: [
      {
        id: "1",
        title: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        duration: "Jan 2022 - Present",
        description: "Led development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%. Mentored junior developers and conducted code reviews."
      },
      {
        id: "2",
        title: "Software Engineer",
        company: "StartupXYZ",
        duration: "Jun 2020 - Dec 2021",
        description: "Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components. Optimized application performance resulting in 40% faster load times."
      }
    ],
    education: [
      {
        id: "1",
        degree: "Bachelor of Science in Computer Science",
        school: "University of California, Berkeley",
        year: "2020"
      }
    ],
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "MongoDB", "PostgreSQL", "Git"],
    projects: [
      {
        id: "1",
        name: "E-commerce Platform",
        description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Supports 10,000+ concurrent users.",
        tech: "React, Node.js, MongoDB, Stripe API, AWS"
      },
      {
        id: "2",
        name: "Task Management App",
        description: "Real-time collaborative task management application with drag-and-drop functionality and team collaboration features.",
        tech: "React, Socket.io, Express, PostgreSQL"
      }
    ],
    certifications: [
      {
        id: "1",
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023"
      }
    ],
    languages: [
      {
        id: "1",
        language: "English",
        proficiency: "Native"
      },
      {
        id: "2",
        language: "Spanish",
        proficiency: "Conversational"
      }
    ],
    awards: [
      {
        id: "1",
        title: "Employee of the Year",
        organization: "Tech Solutions Inc.",
        year: "2023"
      }
    ],
    volunteer: [
      {
        id: "1",
        role: "Coding Mentor",
        organization: "Code for Good",
        duration: "2022 - Present"
      }
    ]
  })

  const templates = [
    { 
      name: "Modern", 
      preview: "bg-gradient-to-br from-blue-500 to-purple-600",
      description: "Clean, minimalist design with blue accents"
    },
    { 
      name: "Classic", 
      preview: "bg-gradient-to-br from-gray-600 to-gray-800",
      description: "Traditional professional layout with serif fonts"
    },
    { 
      name: "Creative", 
      preview: "bg-gradient-to-br from-purple-500 to-pink-500",
      description: "Modern design with colorful elements and icons"
    }
  ]

  const moveSection = (dragIndex: number, hoverIndex: number) => {
    const dragSection = sections[dragIndex]
    const newSections = [...sections]
    newSections.splice(dragIndex, 1)
    newSections.splice(hoverIndex, 0, dragSection)
    setSections(newSections)
  }

  const addSection = () => {
    const newSection = {
      id: Date.now(),
      name: "Custom Section",
      icon: "📝"
    }
    setSections([...sections, newSection])
  }

  return (
    <div className="bg-[#111714] text-white min-h-screen" style={{fontFamily: '"Spline Sans", "Noto Sans", sans-serif'}}>
      <div className="flex h-full grow flex-col">
        <Navbar 
          title="Career Compass" 
          activeLink="Resume Builder" 
          variant="blue" 
        />
        
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Resume Builder</h1>
                <p className="text-gray-400 max-w-2xl">
                  Craft a standout resume with our easy-to-use builder. Choose from three professional templates, customize your sections, and download your resume instantly.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => setShowAllTemplates(!showAllTemplates)}
                  className="flex items-center gap-2 border-[#3d5245] text-[#9eb7a8] hover:bg-[#1d2723] hover:text-white"
                >
                  <Eye className="w-4 h-4" />
                  {showAllTemplates ? 'Hide' : 'Preview All'}
                </Button>
                <Button variant="outline" className="flex items-center gap-2 border-[#3d5245] text-[#9eb7a8] hover:bg-[#1d2723] hover:text-white">
                  <History className="w-4 h-4" />
                  My Resumes
                </Button>
                <Button 
                  onClick={() => {
                    const html = `
                      <!DOCTYPE html>
                      <html>
                        <head>
                          <title>Resume</title>
                          <style>
                            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                            h1 { font-size: 28px; margin-bottom: 10px; color: #333; }
                            h2 { font-size: 20px; margin-top: 25px; margin-bottom: 15px; border-bottom: 2px solid #333; padding-bottom: 5px; }
                            .contact { font-size: 14px; margin-bottom: 25px; color: #666; }
                            .section { margin-bottom: 20px; }
                            .item { margin-bottom: 15px; }
                            .item-title { font-weight: bold; font-size: 16px; }
                            .item-subtitle { font-style: italic; color: #666; }
                            .item-date { float: right; color: #666; font-size: 14px; }
                            .skills { display: flex; flex-wrap: wrap; gap: 8px; }
                            .skill { background: #f0f0f0; padding: 4px 12px; border-radius: 4px; font-size: 14px; }
                          </style>
                        </head>
                        <body>
                          <h1>${resumeData.personalInfo?.name || 'Your Name'}</h1>
                          <div class="contact">
                            ${resumeData.personalInfo?.email || ''} | 
                            ${resumeData.personalInfo?.phone || ''} | 
                            ${resumeData.personalInfo?.location || ''}
                          </div>
                          
                          ${resumeData.personalInfo?.summary ? `
                            <div class="section">
                              <h2>Summary</h2>
                              <p>${resumeData.personalInfo?.summary}</p>
                            </div>
                          ` : ''}
                          
                          ${(resumeData.experience || []).length > 0 ? `
                            <div class="section">
                              <h2>Experience</h2>
                              ${(resumeData.experience || []).map((exp: any) => `
                                <div class="item">
                                  <div class="item-title">${exp.title || 'Job Title'}</div>
                                  <div class="item-subtitle">${exp.company || ''}</div>
                                  <div class="item-date">${exp.duration || ''}</div>
                                  <p style="clear: both; margin-top: 8px;">${exp.description || ''}</p>
                                </div>
                              `).join('')}
                            </div>
                          ` : ''}
                          
                          ${(resumeData.education || []).length > 0 ? `
                            <div class="section">
                              <h2>Education</h2>
                              ${(resumeData.education || []).map((edu: any) => `
                                <div class="item">
                                  <div class="item-title">${edu.degree || 'Degree'}</div>
                                  <div class="item-subtitle">${edu.school || ''}</div>
                                  <div class="item-date">${edu.year || ''}</div>
                                </div>
                              `).join('')}
                            </div>
                          ` : ''}
                          
                          ${(resumeData.skills || []).length > 0 ? `
                            <div class="section">
                              <h2>Skills</h2>
                              <div class="skills">
                                ${(resumeData.skills || []).filter((skill: string) => skill.trim()).map((skill: string) => `
                                  <span class="skill">${skill}</span>
                                `).join('')}
                              </div>
                            </div>
                          ` : ''}
                          
                          ${(resumeData.projects || []).length > 0 ? `
                            <div class="section">
                              <h2>Projects</h2>
                              ${(resumeData.projects || []).map((project: any) => `
                                <div class="item">
                                  <div class="item-title">${project.name || 'Project Name'}</div>
                                  <p>${project.description || ''}</p>
                                  ${project.tech ? `<p><strong>Technologies:</strong> ${project.tech}</p>` : ''}
                                </div>
                              `).join('')}
                            </div>
                          ` : ''}
                        </body>
                      </html>
                    `
                    const blob = new Blob([html], { type: 'text/html' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = `resume-${templates[selectedTemplate].name.toLowerCase()}.html`
                    a.click()
                    URL.revokeObjectURL(url)
                  }}
                  className="flex items-center gap-2 bg-[#38e07b] hover:bg-[#2bc968] text-black font-bold"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>
            </div>

            {showAllTemplates ? (
              <div className="bg-[#1d2723] border border-[#3d5245] rounded-lg p-6">
                <TemplateShowcase resumeData={resumeData} sections={sections} />
              </div>
            ) : (
              <div className="bg-[#1d2723] border border-[#3d5245] rounded-lg">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Panel - Controls */}
                  <div className="w-full lg:w-1/3 space-y-6">
                    {/* Template Selection */}
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-4">Choose a Template</h2>
                      <div className="grid grid-cols-3 gap-3">
                        {templates.map((template, index) => (
                          <div 
                            key={index}
                            className={`cursor-pointer rounded-lg border-2 transition-all p-3 ${
                              selectedTemplate === index 
                                ? 'border-[#38e07b] bg-[#111714]' 
                                : 'border-[#3d5245] bg-[#1d2723] hover:border-[#9eb7a8]'
                            }`}
                            onClick={() => setSelectedTemplate(index)}
                          >
                            <div className={`w-full h-20 ${template.preview} rounded-md relative mb-2`}>
                              <div className="absolute inset-0 bg-black/20 rounded-md flex items-center justify-center">
                                <div className="text-white text-xs font-bold">{template.name}</div>
                              </div>
                            </div>
                            {selectedTemplate === index && (
                              <div className="flex justify-center">
                                <div className="w-4 h-4 bg-[#38e07b] rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-black rounded-full"></div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section Customization */}
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-4">Customize Sections</h2>
                      <p className="text-[#9eb7a8] text-sm mb-4">Drag and drop to reorder sections.</p>
                      <div className="space-y-3">
                        {sections.slice(0, 4).map((section, index) => (
                          <div 
                            key={section.id}
                            className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors ${
                              activeSection === section.name 
                                ? 'bg-[#38e07b] text-black' 
                                : 'bg-[#111714] hover:bg-[#1d2723] text-white'
                            }`}
                            onClick={() => setActiveSection(section.name)}
                          >
                            <div className="flex items-center gap-3">
                              <GripVertical className="w-4 h-4 text-[#9eb7a8]" />
                              <span className="text-lg">{section.icon}</span>
                              <p className="font-medium">{section.name}</p>
                            </div>
                            <Edit className="w-4 h-4" />
                          </div>
                        ))}
                        <button 
                          onClick={addSection}
                          className="w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-[#3d5245] rounded-md hover:bg-[#111714] hover:border-[#9eb7a8] transition-colors text-[#9eb7a8] hover:text-white"
                        >
                          <Plus className="w-4 h-4" />
                          <span className="font-medium">Add Section</span>
                        </button>
                      </div>
                    </div>

                    {/* Form for Active Section */}
                    <div>
                      <ResumeForm 
                        activeSection={activeSection}
                        resumeData={resumeData}
                        onDataChange={setResumeData}
                      />
                    </div>
                  </div>

                  {/* Right Panel - Preview */}
                  <div className="w-full lg:w-2/3">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-white">Real-time Preview</h2>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            const previewWindow = window.open('', '_blank')
                            if (previewWindow) {
                              previewWindow.document.write(`
                                <!DOCTYPE html>
                                <html>
                                  <head>
                                    <title>Resume Preview</title>
                                    <style>
                                      body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                                      h1 { font-size: 28px; margin-bottom: 10px; color: #333; }
                                      h2 { font-size: 20px; margin-top: 25px; margin-bottom: 15px; border-bottom: 2px solid #333; padding-bottom: 5px; }
                                      .contact { font-size: 14px; margin-bottom: 25px; color: #666; }
                                      .section { margin-bottom: 20px; }
                                      .item { margin-bottom: 15px; }
                                      .item-title { font-weight: bold; font-size: 16px; }
                                      .item-subtitle { font-style: italic; color: #666; }
                                      .item-date { float: right; color: #666; font-size: 14px; }
                                      .skills { display: flex; flex-wrap: wrap; gap: 8px; }
                                      .skill { background: #f0f0f0; padding: 4px 12px; border-radius: 4px; font-size: 14px; }
                                    </style>
                                  </head>
                                  <body>
                                    <h1>${resumeData.personalInfo?.name || 'Your Name'}</h1>
                                    <div class="contact">
                                      ${resumeData.personalInfo?.email || ''} | 
                                      ${resumeData.personalInfo?.phone || ''} | 
                                      ${resumeData.personalInfo?.location || ''}
                                    </div>
                                    
                                    ${resumeData.personalInfo?.summary ? `
                                      <div class="section">
                                        <h2>Summary</h2>
                                        <p>${resumeData.personalInfo?.summary}</p>
                                      </div>
                                    ` : ''}
                                    
                                    ${(resumeData.experience || []).length > 0 ? `
                                      <div class="section">
                                        <h2>Experience</h2>
                                        ${(resumeData.experience || []).map((exp: any) => `
                                          <div class="item">
                                            <div class="item-title">${exp.title || 'Job Title'}</div>
                                            <div class="item-subtitle">${exp.company || ''}</div>
                                            <div class="item-date">${exp.duration || ''}</div>
                                            <p style="clear: both; margin-top: 8px;">${exp.description || ''}</p>
                                          </div>
                                        `).join('')}
                                      </div>
                                    ` : ''}
                                    
                                    ${(resumeData.education || []).length > 0 ? `
                                      <div class="section">
                                        <h2>Education</h2>
                                        ${(resumeData.education || []).map((edu: any) => `
                                          <div class="item">
                                            <div class="item-title">${edu.degree || 'Degree'}</div>
                                            <div class="item-subtitle">${edu.school || ''}</div>
                                            <div class="item-date">${edu.year || ''}</div>
                                          </div>
                                        `).join('')}
                                      </div>
                                    ` : ''}
                                    
                                    ${(resumeData.skills || []).length > 0 ? `
                                      <div class="section">
                                        <h2>Skills</h2>
                                        <div class="skills">
                                          ${(resumeData.skills || []).filter((skill: string) => skill.trim()).map((skill: string) => `
                                            <span class="skill">${skill}</span>
                                          `).join('')}
                                        </div>
                                      </div>
                                    ` : ''}
                                    
                                    ${(resumeData.projects || []).length > 0 ? `
                                      <div class="section">
                                        <h2>Projects</h2>
                                        ${(resumeData.projects || []).map((project: any) => `
                                          <div class="item">
                                            <div class="item-title">${project.name || 'Project Name'}</div>
                                            <p>${project.description || ''}</p>
                                            ${project.tech ? `<p><strong>Technologies:</strong> ${project.tech}</p>` : ''}
                                          </div>
                                        `).join('')}
                                      </div>
                                    ` : ''}
                                  </body>
                                </html>
                              `)
                              previewWindow.document.close()
                            }
                          }}
                          className="flex items-center gap-1 border-[#3d5245] text-[#9eb7a8] hover:bg-[#1d2723] hover:text-white"
                        >
                          <Eye className="w-3 h-3" />
                          Preview
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => {
                            const html = `
                              <!DOCTYPE html>
                              <html>
                                <head>
                                  <title>Resume</title>
                                  <style>
                                    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
                                    h1 { font-size: 28px; margin-bottom: 10px; color: #333; }
                                    h2 { font-size: 20px; margin-top: 25px; margin-bottom: 15px; border-bottom: 2px solid #333; padding-bottom: 5px; }
                                    .contact { font-size: 14px; margin-bottom: 25px; color: #666; }
                                    .section { margin-bottom: 20px; }
                                    .item { margin-bottom: 15px; }
                                    .item-title { font-weight: bold; font-size: 16px; }
                                    .item-subtitle { font-style: italic; color: #666; }
                                    .item-date { float: right; color: #666; font-size: 14px; }
                                    .skills { display: flex; flex-wrap: wrap; gap: 8px; }
                                    .skill { background: #f0f0f0; padding: 4px 12px; border-radius: 4px; font-size: 14px; }
                                  </style>
                                </head>
                                <body>
                                  <h1>${resumeData.personalInfo?.name || 'Your Name'}</h1>
                                  <div class="contact">
                                    ${resumeData.personalInfo?.email || ''} | 
                                    ${resumeData.personalInfo?.phone || ''} | 
                                    ${resumeData.personalInfo?.location || ''}
                                  </div>
                                  
                                  ${resumeData.personalInfo?.summary ? `
                                    <div class="section">
                                      <h2>Summary</h2>
                                      <p>${resumeData.personalInfo?.summary}</p>
                                    </div>
                                  ` : ''}
                                  
                                  ${(resumeData.experience || []).length > 0 ? `
                                    <div class="section">
                                      <h2>Experience</h2>
                                      ${(resumeData.experience || []).map((exp: any) => `
                                        <div class="item">
                                          <div class="item-title">${exp.title || 'Job Title'}</div>
                                          <div class="item-subtitle">${exp.company || ''}</div>
                                          <div class="item-date">${exp.duration || ''}</div>
                                          <p style="clear: both; margin-top: 8px;">${exp.description || ''}</p>
                                        </div>
                                      `).join('')}
                                    </div>
                                  ` : ''}
                                  
                                  ${(resumeData.education || []).length > 0 ? `
                                    <div class="section">
                                      <h2>Education</h2>
                                      ${(resumeData.education || []).map((edu: any) => `
                                        <div class="item">
                                          <div class="item-title">${edu.degree || 'Degree'}</div>
                                          <div class="item-subtitle">${edu.school || ''}</div>
                                          <div class="item-date">${edu.year || ''}</div>
                                        </div>
                                      `).join('')}
                                    </div>
                                  ` : ''}
                                  
                                  ${(resumeData.skills || []).length > 0 ? `
                                    <div class="section">
                                      <h2>Skills</h2>
                                      <div class="skills">
                                        ${(resumeData.skills || []).filter((skill: string) => skill.trim()).map((skill: string) => `
                                          <span class="skill">${skill}</span>
                                        `).join('')}
                                      </div>
                                    </div>
                                  ` : ''}
                                  
                                  ${(resumeData.projects || []).length > 0 ? `
                                    <div class="section">
                                      <h2>Projects</h2>
                                      ${(resumeData.projects || []).map((project: any) => `
                                        <div class="item">
                                          <div class="item-title">${project.name || 'Project Name'}</div>
                                          <p>${project.description || ''}</p>
                                          ${project.tech ? `<p><strong>Technologies:</strong> ${project.tech}</p>` : ''}
                                        </div>
                                      `).join('')}
                                    </div>
                                  ` : ''}
                                </body>
                              </html>
                            `
                            const blob = new Blob([html], { type: 'text/html' })
                            const url = URL.createObjectURL(blob)
                            const a = document.createElement('a')
                            a.href = url
                            a.download = `resume-${templates[selectedTemplate].name.toLowerCase()}.html`
                            a.click()
                            URL.revokeObjectURL(url)
                          }}
                          className="flex items-center gap-1 bg-[#38e07b] hover:bg-[#2bc968] text-black font-bold"
                        >
                          <Download className="w-3 h-3" />
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="h-[700px] bg-white rounded-lg shadow-lg overflow-y-auto">
                      <ResumePreview 
                        resumeData={resumeData}
                        template={selectedTemplate}
                        sections={sections}
                      />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}