"use client"

import { ResumeTemplate } from "./resume-templates"

interface TemplateShowcaseProps {
  resumeData: any
  sections: any[]
}

export function TemplateShowcase({ resumeData, sections }: TemplateShowcaseProps) {
  const templates = [
    { name: "Modern", id: 0 },
    { name: "Classic", id: 1 },
    { name: "Creative", id: 2 }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Template Showcase</h2>
        <p className="text-gray-400">See how your resume looks in different templates</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="space-y-3">
            <h3 className="text-lg font-semibold text-white text-center">{template.name}</h3>
            <div className="aspect-[8.5/11] bg-white rounded-lg shadow-lg overflow-hidden transform scale-75 origin-top">
              <ResumeTemplate 
                resumeData={resumeData}
                template={template.id}
                sections={sections}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}