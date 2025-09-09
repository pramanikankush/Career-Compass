"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface TemplateSelectorProps {
  selectedTemplate: number
  onTemplateSelect: (template: number) => void
}

export function TemplateSelector({ selectedTemplate, onTemplateSelect }: TemplateSelectorProps) {
  const templates = [
    { name: "Modern", preview: "bg-gradient-to-br from-blue-500 to-purple-600" },
    { name: "Classic", preview: "bg-gradient-to-br from-gray-600 to-gray-800" },
    { name: "Creative", preview: "bg-gradient-to-br from-purple-500 to-pink-500" }
  ]

  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-3">Templates</h2>
      <div className="grid grid-cols-3 gap-2">
        {templates.map((template, index) => (
          <div 
            key={index}
            className={`cursor-pointer rounded-lg border-2 transition-all p-2 ${
              selectedTemplate === index 
                ? 'border-red-500 bg-gray-800' 
                : 'border-gray-700 bg-gray-900 hover:border-gray-600'
            }`}
            onClick={() => onTemplateSelect(index)}
          >
            <div className={`w-full h-12 ${template.preview} rounded-md relative mb-2`}>
              <div className="absolute inset-0 bg-black/20 rounded-md flex items-center justify-center">
                <div className="text-white text-xs font-bold">{template.name}</div>
              </div>
            </div>
            {selectedTemplate === index && (
              <div className="flex justify-center">
                <Check className="w-4 h-4 text-red-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}