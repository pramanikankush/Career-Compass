"use client"

import { ResumeTemplate } from "./resume-templates"

interface ResumeData {
  personalInfo: {
    name: string
    email: string
    phone: string
    location: string
    summary: string
  }
  experience: Array<{
    id: string
    title: string
    company: string
    duration: string
    description: string
  }>
  education: Array<{
    id: string
    degree: string
    school: string
    year: string
  }>
  skills: string[]
  projects: Array<{
    id: string
    name: string
    description: string
    tech: string
  }>
}

interface ResumePreviewProps {
  resumeData: ResumeData
  template: number
  sections: Array<{ id: number; name: string; icon: string }>
}

export function ResumePreview({ resumeData, template, sections }: ResumePreviewProps) {
  return (
    <div className="w-full h-full overflow-y-auto">
      <ResumeTemplate 
        resumeData={resumeData} 
        template={template} 
        sections={sections} 
      />
    </div>
  )
}