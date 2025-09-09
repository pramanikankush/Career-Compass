import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const resumeData = body.resumeData || body
    
    // Simple HTML to PDF conversion
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            h1 { font-size: 24px; margin-bottom: 10px; }
            h2 { font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #ccc; }
            .contact { font-size: 12px; margin-bottom: 20px; }
            .job { margin-bottom: 15px; }
            .job-title { font-weight: bold; }
            .company { font-style: italic; }
            .duration { float: right; }
            .skills { display: flex; flex-wrap: wrap; gap: 5px; }
            .skill { background: #f0f0f0; padding: 2px 8px; border-radius: 3px; font-size: 12px; }
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
            <h2>Professional Summary</h2>
            <p>${resumeData.personalInfo?.summary}</p>
          ` : ''}
          
          ${(resumeData.experience || []).length > 0 ? `
            <h2>Experience</h2>
            ${(resumeData.experience || []).map((exp: any) => `
              <div class="job">
                <div class="job-title">${exp.title || 'Job Title'}</div>
                <div class="company">${exp.company || ''}</div>
                <div class="duration">${exp.duration || ''}</div>
                <p>${exp.description || ''}</p>
              </div>
            `).join('')}
          ` : ''}
          
          ${(resumeData.education || []).length > 0 ? `
            <h2>Education</h2>
            ${(resumeData.education || []).map((edu: any) => `
              <div class="job">
                <div class="job-title">${edu.degree || 'Degree'}</div>
                <div class="company">${edu.school || ''}</div>
                <div class="duration">${edu.year || ''}</div>
              </div>
            `).join('')}
          ` : ''}
          
          ${(resumeData.skills || []).length > 0 ? `
            <h2>Skills</h2>
            <div class="skills">
              ${(resumeData.skills || []).filter((skill: string) => skill.trim()).map((skill: string) => `
                <span class="skill">${skill}</span>
              `).join('')}
            </div>
          ` : ''}
          
          ${(resumeData.projects || []).length > 0 ? `
            <h2>Projects</h2>
            ${(resumeData.projects || []).map((project: any) => `
              <div class="job">
                <div class="job-title">${project.name || 'Project Name'}</div>
                <p>${project.description || ''}</p>
                ${project.tech ? `<p><strong>Technologies:</strong> ${project.tech}</p>` : ''}
              </div>
            `).join('')}
          ` : ''}
        </body>
      </html>
    `
    
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
        'Content-Disposition': 'attachment; filename="resume.html"'
      }
    })
  } catch (error) {
    console.error('Resume generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate resume' },
      { status: 500 }
    )
  }
}