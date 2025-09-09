"use client"

import { Navbar } from "@/components/navbar"

export default function PrivacyPage() {
  return (
    <div className="bg-[#111714] text-white min-h-screen" style={{fontFamily: '"Spline Sans", "Noto Sans", sans-serif'}}>
      <div className="flex h-full grow flex-col">
        <Navbar title="Career Compass" activeLink="" variant="blue" />
        
        <main className="flex-1 px-10 py-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="space-y-6 text-[#9eb7a8]">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Collection</h2>
                <p>We collect minimal data to provide our services:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Resume files (temporarily processed, not stored)</li>
                  <li>User authentication data (via Clerk)</li>
                  <li>Usage analytics (anonymized)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Resume Processing</h2>
                <p>Your resume files are:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Processed temporarily for analysis</li>
                  <li>Not stored on our servers</li>
                  <li>Deleted immediately after processing</li>
                  <li>Never shared with third parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                <p>We use secure third-party services:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Clerk for authentication</li>
                  <li>Google Gemini for AI analysis</li>
                  <li>Job APIs for job listings</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
                <p>For privacy concerns, contact us at: privacy@careercompass.com</p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}