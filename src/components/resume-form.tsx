"use client"

import { useState } from "react"
import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  certifications: Array<{
    id: string
    name: string
    issuer: string
    date: string
  }>
  languages: Array<{
    id: string
    language: string
    proficiency: string
  }>
  awards: Array<{
    id: string
    title: string
    organization: string
    year: string
  }>
  volunteer: Array<{
    id: string
    role: string
    organization: string
    duration: string
  }>
}

interface ResumeFormProps {
  activeSection: string
  resumeData: ResumeData
  onDataChange: (data: ResumeData) => void
}

export function ResumeForm({ activeSection, resumeData, onDataChange }: ResumeFormProps) {
  const updatePersonalInfo = (field: string, value: string) => {
    onDataChange({
      ...resumeData,
      personalInfo: { ...resumeData.personalInfo, [field]: value }
    })
  }

  const addExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      title: "",
      company: "",
      duration: "",
      description: ""
    }
    onDataChange({
      ...resumeData,
      experience: [...resumeData.experience, newExp]
    })
  }

  const updateExperience = (id: string, field: string, value: string) => {
    onDataChange({
      ...resumeData,
      experience: resumeData.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    })
  }

  const removeExperience = (id: string) => {
    onDataChange({
      ...resumeData,
      experience: resumeData.experience.filter(exp => exp.id !== id)
    })
  }

  const addEducation = () => {
    const newEdu = {
      id: Date.now().toString(),
      degree: "",
      school: "",
      year: ""
    }
    onDataChange({
      ...resumeData,
      education: [...resumeData.education, newEdu]
    })
  }

  const updateEducation = (id: string, field: string, value: string) => {
    onDataChange({
      ...resumeData,
      education: resumeData.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    })
  }

  const removeEducation = (id: string) => {
    onDataChange({
      ...resumeData,
      education: resumeData.education.filter(edu => edu.id !== id)
    })
  }

  const addSkill = () => {
    onDataChange({
      ...resumeData,
      skills: [...resumeData.skills, ""]
    })
  }

  const updateSkill = (index: number, value: string) => {
    const newSkills = [...resumeData.skills]
    newSkills[index] = value
    onDataChange({
      ...resumeData,
      skills: newSkills
    })
  }

  const removeSkill = (index: number) => {
    onDataChange({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== index)
    })
  }

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: "",
      description: "",
      tech: ""
    }
    onDataChange({
      ...resumeData,
      projects: [...resumeData.projects, newProject]
    })
  }

  const updateProject = (id: string, field: string, value: string) => {
    onDataChange({
      ...resumeData,
      projects: resumeData.projects.map(proj => 
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    })
  }

  const removeProject = (id: string) => {
    onDataChange({
      ...resumeData,
      projects: resumeData.projects.filter(proj => proj.id !== id)
    })
  }

  const addCertification = () => {
    const newCert = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      date: ""
    }
    onDataChange({
      ...resumeData,
      certifications: [...(resumeData.certifications || []), newCert]
    })
  }

  const updateCertification = (id: string, field: string, value: string) => {
    onDataChange({
      ...resumeData,
      certifications: (resumeData.certifications || []).map(cert => 
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    })
  }

  const removeCertification = (id: string) => {
    onDataChange({
      ...resumeData,
      certifications: (resumeData.certifications || []).filter(cert => cert.id !== id)
    })
  }

  const addLanguage = () => {
    const newLang = {
      id: Date.now().toString(),
      language: "",
      proficiency: ""
    }
    onDataChange({
      ...resumeData,
      languages: [...(resumeData.languages || []), newLang]
    })
  }

  const updateLanguage = (id: string, field: string, value: string) => {
    onDataChange({
      ...resumeData,
      languages: (resumeData.languages || []).map(lang => 
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    })
  }

  const removeLanguage = (id: string) => {
    onDataChange({
      ...resumeData,
      languages: (resumeData.languages || []).filter(lang => lang.id !== id)
    })
  }

  const addAward = () => {
    const newAward = {
      id: Date.now().toString(),
      title: "",
      organization: "",
      year: ""
    }
    onDataChange({
      ...resumeData,
      awards: [...(resumeData.awards || []), newAward]
    })
  }

  const updateAward = (id: string, field: string, value: string) => {
    onDataChange({
      ...resumeData,
      awards: (resumeData.awards || []).map(award => 
        award.id === id ? { ...award, [field]: value } : award
      )
    })
  }

  const removeAward = (id: string) => {
    onDataChange({
      ...resumeData,
      awards: (resumeData.awards || []).filter(award => award.id !== id)
    })
  }

  const addVolunteer = () => {
    const newVol = {
      id: Date.now().toString(),
      role: "",
      organization: "",
      duration: ""
    }
    onDataChange({
      ...resumeData,
      volunteer: [...(resumeData.volunteer || []), newVol]
    })
  }

  const updateVolunteer = (id: string, field: string, value: string) => {
    onDataChange({
      ...resumeData,
      volunteer: (resumeData.volunteer || []).map(vol => 
        vol.id === id ? { ...vol, [field]: value } : vol
      )
    })
  }

  const removeVolunteer = (id: string) => {
    onDataChange({
      ...resumeData,
      volunteer: (resumeData.volunteer || []).filter(vol => vol.id !== id)
    })
  }

  if (activeSection === "Personal Info") {
    return (
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={resumeData.personalInfo.name}
          onChange={(e) => updatePersonalInfo("name", e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
        />
        <input
          type="email"
          placeholder="Email"
          value={resumeData.personalInfo.email}
          onChange={(e) => updatePersonalInfo("email", e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={resumeData.personalInfo.phone}
          onChange={(e) => updatePersonalInfo("phone", e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
        />
        <input
          type="text"
          placeholder="Location"
          value={resumeData.personalInfo.location}
          onChange={(e) => updatePersonalInfo("location", e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
        />
        <textarea
          placeholder="Professional Summary"
          value={resumeData.personalInfo.summary}
          onChange={(e) => updatePersonalInfo("summary", e.target.value)}
          rows={4}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
        />
      </div>
    )
  }

  if (activeSection === "Experience") {
    return (
      <div className="space-y-6">
        {resumeData.experience.map((exp) => (
          <div key={exp.id} className="p-4 bg-gray-800 rounded-md relative">
            <button
              onClick={() => removeExperience(exp.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Job Title"
                value={exp.title}
                onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="Duration (e.g., Jan 2020 - Present)"
                value={exp.duration}
                onChange={(e) => updateExperience(exp.id, "duration", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <textarea
                placeholder="Job Description"
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                rows={3}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>
          </div>
        ))}
        <Button onClick={addExperience} className="w-full bg-red-600 hover:bg-red-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </Button>
      </div>
    )
  }

  if (activeSection === "Education") {
    return (
      <div className="space-y-6">
        {resumeData.education.map((edu) => (
          <div key={edu.id} className="p-4 bg-gray-800 rounded-md relative">
            <button
              onClick={() => removeEducation(edu.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="School/University"
                value={edu.school}
                onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="Year"
                value={edu.year}
                onChange={(e) => updateEducation(edu.id, "year", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>
          </div>
        ))}
        <Button onClick={addEducation} className="w-full bg-red-600 hover:bg-red-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Education
        </Button>
      </div>
    )
  }

  if (activeSection === "Skills") {
    return (
      <div className="space-y-4">
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => updateSkill(index, e.target.value)}
              className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded text-white"
            />
            <button
              onClick={() => removeSkill(index)}
              className="text-gray-400 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        <Button onClick={addSkill} className="w-full bg-red-600 hover:bg-red-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Skill
        </Button>
      </div>
    )
  }

  if (activeSection === "Projects") {
    return (
      <div className="space-y-6">
        {resumeData.projects.map((project) => (
          <div key={project.id} className="p-4 bg-gray-800 rounded-md relative">
            <button
              onClick={() => removeProject(project.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Project Name"
                value={project.name}
                onChange={(e) => updateProject(project.id, "name", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <textarea
                placeholder="Project Description"
                value={project.description}
                onChange={(e) => updateProject(project.id, "description", e.target.value)}
                rows={3}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="Technologies Used"
                value={project.tech}
                onChange={(e) => updateProject(project.id, "tech", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>
          </div>
        ))}
        <Button onClick={addProject} className="w-full bg-red-600 hover:bg-red-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>
    )
  }

  if (activeSection === "Certifications") {
    return (
      <div className="space-y-6">
        {(resumeData.certifications || []).map((cert) => (
          <div key={cert.id} className="p-4 bg-gray-800 rounded-md relative">
            <button
              onClick={() => removeCertification(cert.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Certification Name"
                value={cert.name}
                onChange={(e) => updateCertification(cert.id, "name", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="Issuing Organization"
                value={cert.issuer}
                onChange={(e) => updateCertification(cert.id, "issuer", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="Date Obtained"
                value={cert.date}
                onChange={(e) => updateCertification(cert.id, "date", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>
          </div>
        ))}
        <Button onClick={addCertification} className="w-full bg-red-600 hover:bg-red-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Certification
        </Button>
      </div>
    )
  }

  if (activeSection === "Languages") {
    return (
      <div className="space-y-6">
        {(resumeData.languages || []).map((lang) => (
          <div key={lang.id} className="p-4 bg-gray-800 rounded-md relative">
            <button
              onClick={() => removeLanguage(lang.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Language"
                value={lang.language}
                onChange={(e) => updateLanguage(lang.id, "language", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <select
                value={lang.proficiency}
                onChange={(e) => updateLanguage(lang.id, "proficiency", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              >
                <option value="">Select Proficiency</option>
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Conversational">Conversational</option>
                <option value="Basic">Basic</option>
              </select>
            </div>
          </div>
        ))}
        <Button onClick={addLanguage} className="w-full bg-red-600 hover:bg-red-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Language
        </Button>
      </div>
    )
  }

  if (activeSection === "Awards") {
    return (
      <div className="space-y-6">
        {(resumeData.awards || []).map((award) => (
          <div key={award.id} className="p-4 bg-gray-800 rounded-md relative">
            <button
              onClick={() => removeAward(award.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Award Title"
                value={award.title}
                onChange={(e) => updateAward(award.id, "title", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="Organization"
                value={award.organization}
                onChange={(e) => updateAward(award.id, "organization", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="Year"
                value={award.year}
                onChange={(e) => updateAward(award.id, "year", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>
          </div>
        ))}
        <Button onClick={addAward} className="w-full bg-red-600 hover:bg-red-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Award
        </Button>
      </div>
    )
  }

  if (activeSection === "Volunteer") {
    return (
      <div className="space-y-6">
        {(resumeData.volunteer || []).map((vol) => (
          <div key={vol.id} className="p-4 bg-gray-800 rounded-md relative">
            <button
              onClick={() => removeVolunteer(vol.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Role/Position"
                value={vol.role}
                onChange={(e) => updateVolunteer(vol.id, "role", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="Organization"
                value={vol.organization}
                onChange={(e) => updateVolunteer(vol.id, "organization", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
              <input
                type="text"
                placeholder="Duration"
                value={vol.duration}
                onChange={(e) => updateVolunteer(vol.id, "duration", e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>
          </div>
        ))}
        <Button onClick={addVolunteer} className="w-full bg-red-600 hover:bg-red-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Volunteer Experience
        </Button>
      </div>
    )
  }

  return <div>Select a section to edit</div>
}