"use client"

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
  certifications?: Array<{
    id: string
    name: string
    issuer: string
    date: string
  }>
  languages?: Array<{
    id: string
    language: string
    proficiency: string
  }>
  awards?: Array<{
    id: string
    title: string
    organization: string
    year: string
  }>
  volunteer?: Array<{
    id: string
    role: string
    organization: string
    duration: string
  }>
}

interface ResumeTemplateProps {
  resumeData: ResumeData
  template: number
  sections: Array<{ id: number; name: string; icon: string }>
}

export function ResumeTemplate({ resumeData, template, sections }: ResumeTemplateProps) {
  const templates = [
    ModernTemplate,
    ClassicTemplate,
    CreativeTemplate
  ]

  const TemplateComponent = templates[template] || ModernTemplate
  return <TemplateComponent resumeData={resumeData} sections={sections} />
}

// Modern Template - Clean and minimalist
function ModernTemplate({ resumeData, sections }: { resumeData: ResumeData, sections: any[] }) {
  return (
    <div className="w-full h-full bg-white text-gray-900 p-8 font-sans">
      {/* Header */}
      <div className="border-b-2 border-blue-600 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {resumeData.personalInfo.name || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
          {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
          {resumeData.personalInfo.location && <span>{resumeData.personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {resumeData.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-3">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">{resumeData.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {resumeData.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Experience</h2>
          <div className="space-y-4">
            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-blue-200 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{exp.title || "Job Title"}</h3>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <p className="text-sm font-medium text-blue-600 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {resumeData.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Education</h2>
          <div className="space-y-3">
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree || "Degree"}</h3>
                  <p className="text-sm text-gray-600">{edu.school}</p>
                </div>
                <span className="text-sm text-gray-500">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {resumeData.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.filter(skill => skill.trim()).map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {resumeData.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Projects</h2>
          <div className="space-y-4">
            {resumeData.projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-semibold text-gray-900">{project.name || "Project Name"}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-1">{project.description}</p>
                {project.tech && (
                  <p className="text-sm text-blue-600">
                    <span className="font-medium">Technologies:</span> {project.tech}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {(resumeData.certifications || []).length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Certifications</h2>
          <div className="space-y-3">
            {(resumeData.certifications || []).map((cert) => (
              <div key={cert.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
                <span className="text-sm text-gray-500">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {(resumeData.languages || []).length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Languages</h2>
          <div className="space-y-2">
            {(resumeData.languages || []).map((lang) => (
              <div key={lang.id} className="flex justify-between">
                <span className="font-semibold text-gray-900">{lang.language}</span>
                <span className="text-sm text-gray-600">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Awards */}
      {(resumeData.awards || []).length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Awards</h2>
          <div className="space-y-3">
            {(resumeData.awards || []).map((award) => (
              <div key={award.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{award.title}</h3>
                  <p className="text-sm text-gray-600">{award.organization}</p>
                </div>
                <span className="text-sm text-gray-500">{award.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Volunteer */}
      {(resumeData.volunteer || []).length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Volunteer Experience</h2>
          <div className="space-y-3">
            {(resumeData.volunteer || []).map((vol) => (
              <div key={vol.id}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{vol.role}</h3>
                  <span className="text-sm text-gray-500">{vol.duration}</span>
                </div>
                <p className="text-sm text-gray-600">{vol.organization}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Classic Template - Traditional professional layout
function ClassicTemplate({ resumeData, sections }: { resumeData: ResumeData, sections: any[] }) {
  return (
    <div className="w-full h-full bg-white text-gray-900 p-8 font-serif">
      {/* Header */}
      <div className="text-center border-b border-gray-400 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {resumeData.personalInfo.name || "Your Name"}
        </h1>
        <div className="text-sm text-gray-600 space-y-1">
          {resumeData.personalInfo.email && <div>{resumeData.personalInfo.email}</div>}
          {resumeData.personalInfo.phone && <div>{resumeData.personalInfo.phone}</div>}
          {resumeData.personalInfo.location && <div>{resumeData.personalInfo.location}</div>}
        </div>
      </div>

      {/* Summary */}
      {resumeData.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">
            Professional Summary
          </h2>
          <hr className="border-gray-400 mb-3" />
          <p className="text-sm leading-relaxed text-gray-800">{resumeData.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {resumeData.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">Experience</h2>
          <hr className="border-gray-400 mb-3" />
          <div className="space-y-4">
            {resumeData.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">{exp.title || "Job Title"}</h3>
                  <span className="text-sm text-gray-600">{exp.duration}</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-800 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {resumeData.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">Education</h2>
          <hr className="border-gray-400 mb-3" />
          <div className="space-y-3">
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-bold text-gray-900">{edu.degree || "Degree"}</h3>
                  <p className="text-sm text-gray-700">{edu.school}</p>
                </div>
                <span className="text-sm text-gray-600">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {resumeData.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">Skills</h2>
          <hr className="border-gray-400 mb-3" />
          <p className="text-sm text-gray-800">
            {resumeData.skills.filter(skill => skill.trim()).join(" • ")}
          </p>
        </div>
      )}

      {/* Projects */}
      {resumeData.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">Projects</h2>
          <hr className="border-gray-400 mb-3" />
          <div className="space-y-3">
            {resumeData.projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-bold text-gray-900">{project.name || "Project Name"}</h3>
                <p className="text-sm text-gray-800 leading-relaxed mb-1">{project.description}</p>
                {project.tech && (
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Technologies:</span> {project.tech}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {(resumeData.certifications || []).length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">Certifications</h2>
          <hr className="border-gray-400 mb-3" />
          <div className="space-y-3">
            {(resumeData.certifications || []).map((cert) => (
              <div key={cert.id} className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-bold text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-700">{cert.issuer}</p>
                </div>
                <span className="text-sm text-gray-600">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {(resumeData.languages || []).length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">Languages</h2>
          <hr className="border-gray-400 mb-3" />
          <div className="space-y-2">
            {(resumeData.languages || []).map((lang) => (
              <div key={lang.id} className="flex justify-between">
                <span className="font-bold text-gray-900">{lang.language}</span>
                <span className="text-sm text-gray-600">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Awards */}
      {(resumeData.awards || []).length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">Awards</h2>
          <hr className="border-gray-400 mb-3" />
          <div className="space-y-3">
            {(resumeData.awards || []).map((award) => (
              <div key={award.id} className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-bold text-gray-900">{award.title}</h3>
                  <p className="text-sm text-gray-700">{award.organization}</p>
                </div>
                <span className="text-sm text-gray-600">{award.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Volunteer */}
      {(resumeData.volunteer || []).length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">Volunteer Experience</h2>
          <hr className="border-gray-400 mb-3" />
          <div className="space-y-3">
            {(resumeData.volunteer || []).map((vol) => (
              <div key={vol.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900">{vol.role}</h3>
                  <span className="text-sm text-gray-600">{vol.duration}</span>
                </div>
                <p className="text-sm text-gray-700">{vol.organization}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Creative Template - Modern with visual elements
function CreativeTemplate({ resumeData, sections }: { resumeData: ResumeData, sections: any[] }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 text-gray-900 p-6 font-sans">
      <div className="bg-white rounded-lg shadow-lg p-6 h-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-2xl font-bold mb-2">
            {resumeData.personalInfo.name || "Your Name"}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm opacity-90">
            {resumeData.personalInfo.email && <span>📧 {resumeData.personalInfo.email}</span>}
            {resumeData.personalInfo.phone && <span>📱 {resumeData.personalInfo.phone}</span>}
            {resumeData.personalInfo.location && <span>📍 {resumeData.personalInfo.location}</span>}
          </div>
        </div>

        {/* Summary */}
        {resumeData.personalInfo.summary && (
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">💡</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">About Me</h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-700 ml-11">{resumeData.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">💼</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Experience</h2>
            </div>
            <div className="space-y-4 ml-11">
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-8 top-2 w-3 h-3 bg-purple-400 rounded-full"></div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{exp.title || "Job Title"}</h3>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-purple-600 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🎓</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Education</h2>
            </div>
            <div className="space-y-3 ml-11">
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{edu.degree || "Degree"}</h3>
                      <p className="text-sm text-gray-600">{edu.school}</p>
                    </div>
                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">⚡</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2 ml-11">
              {resumeData.skills.filter(skill => skill.trim()).map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm rounded-full border border-purple-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {resumeData.projects.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🚀</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Projects</h2>
            </div>
            <div className="space-y-4 ml-11">
              {resumeData.projects.map((project) => (
                <div key={project.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">{project.name || "Project Name"}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">{project.description}</p>
                  {project.tech && (
                    <div className="flex flex-wrap gap-1">
                      {project.tech.split(',').map((tech, index) => (
                        <span key={index} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {(resumeData.certifications || []).length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🏆</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Certifications</h2>
            </div>
            <div className="space-y-3 ml-11">
              {(resumeData.certifications || []).map((cert) => (
                <div key={cert.id} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                    </div>
                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {(resumeData.languages || []).length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🌐</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Languages</h2>
            </div>
            <div className="space-y-2 ml-11">
              {(resumeData.languages || []).map((lang) => (
                <div key={lang.id} className="flex justify-between bg-gray-50 p-2 rounded">
                  <span className="font-semibold text-gray-900">{lang.language}</span>
                  <span className="text-sm text-purple-600">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards */}
        {(resumeData.awards || []).length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🥇</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Awards</h2>
            </div>
            <div className="space-y-3 ml-11">
              {(resumeData.awards || []).map((award) => (
                <div key={award.id} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{award.title}</h3>
                      <p className="text-sm text-gray-600">{award.organization}</p>
                    </div>
                    <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">{award.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Volunteer */}
        {(resumeData.volunteer || []).length > 0 && (
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🤝</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Volunteer Experience</h2>
            </div>
            <div className="space-y-3 ml-11">
              {(resumeData.volunteer || []).map((vol) => (
                <div key={vol.id} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900">{vol.role}</h3>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{vol.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600">{vol.organization}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}