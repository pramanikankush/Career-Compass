"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestPage() {
  const [status, setStatus] = useState<string>('Testing...')

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase
          .from('users')
          .select('count')
          .limit(1)
        
        if (error) throw error
        
        setStatus('✅ Database connected successfully')
      } catch (err: any) {
        setStatus(`❌ Error: ${err.message}`)
      }
    }
    
    testConnection()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Database Test</h1>
      <p className={status.includes('✅') ? 'text-green-500' : 'text-red-500'}>
        {status}
      </p>
    </div>
  )
}