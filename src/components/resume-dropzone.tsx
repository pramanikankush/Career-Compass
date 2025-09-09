"use client"

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, FileText, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ResumeDropzoneProps {
  onAnalysisComplete: (analysis: any) => void
}

export function ResumeDropzone({ onAnalysisComplete }: ResumeDropzoneProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(async (acceptedFiles: File[], rejectedFiles: any[]) => {
    setError(null)
    
    if (rejectedFiles.length > 0) {
      setError('Please upload only PDF files')
      return
    }

    const file = acceptedFiles[0]
    if (!file) return

    setUploadedFile(file)
    setIsAnalyzing(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/resume/analyze', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Analysis failed')
      }

      onAnalysisComplete(result.analysis)
    } catch (error) {
      console.error('Analysis error:', error)
      setError(error instanceof Error ? error.message : 'Failed to analyze resume')
    } finally {
      setIsAnalyzing(false)
    }
  }, [onAnalysisComplete])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    disabled: isAnalyzing
  })

  return (
    <div
      {...getRootProps()}
      className={`
        flex flex-col items-center gap-6 rounded-xl border-2 border-dashed px-6 py-16 text-center transition-colors cursor-pointer
        ${isDragActive ? 'border-red-500 bg-red-500/10' : 'border-gray-600 hover:border-red-500'}
        ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <input {...getInputProps()} />
      
      {error ? (
        <>
          <AlertCircle className="text-6xl text-red-500" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-bold leading-tight tracking-[-0.015em] text-red-500">
              Error
            </p>
            <p className="text-sm text-gray-400 text-center">
              {error}
            </p>
          </div>
          <Button 
            className="bg-red-600 hover:bg-red-700" 
            onClick={() => {
              setError(null)
              setUploadedFile(null)
            }}
          >
            Try Again
          </Button>
        </>
      ) : isAnalyzing ? (
        <>
          <Loader2 className="text-6xl text-red-500 animate-spin" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-bold leading-tight tracking-[-0.015em]">
              Analyzing your resume...
            </p>
            <p className="text-sm text-gray-400">
              {uploadedFile?.name}
            </p>
            <p className="text-xs text-gray-500">
              This may take a few moments
            </p>
          </div>
        </>
      ) : uploadedFile ? (
        <>
          <FileText className="text-6xl text-green-500" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-bold leading-tight tracking-[-0.015em]">
              {uploadedFile.name}
            </p>
            <p className="text-sm text-gray-400">
              Click to upload a different file
            </p>
          </div>
        </>
      ) : (
        <>
          <Upload className="text-6xl text-gray-400" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-bold leading-tight tracking-[-0.015em]">
              {isDragActive ? 'Drop your resume here' : 'Drag and drop your resume here'}
            </p>
            <p className="text-sm text-gray-400">Supported format: PDF only (max 10MB)</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700" disabled={isAnalyzing}>
            Browse Files
          </Button>
        </>
      )}
    </div>
  )
}