import { NextRequest, NextResponse } from 'next/server'
import { analyzeResumeWithGemini } from '@/lib/gemini'
import { rateLimit, getClientIP } from '@/lib/rate-limiter'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting - 3 resume analyses per minute
    const clientIP = getClientIP(request)
    if (!rateLimit(clientIP, 3, 60000)) {
      return NextResponse.json(
        { error: 'Too many resume analyses. Please wait before trying again.' },
        { status: 429 }
      )
    }
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type - PDF only
    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Please upload PDF files only' },
        { status: 400 }
      )
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large. Please upload files smaller than 10MB.' },
        { status: 400 }
      )
    }

    const analysis = await analyzeResumeWithGemini(file)
    return NextResponse.json({ analysis })
  } catch (error) {
    console.error('Resume analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze resume. Please try again.' },
      { status: 500 }
    )
  }
}