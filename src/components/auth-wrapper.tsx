"use client"

const hasValidClerkKeys = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your_clerk_publishable_key' &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'dummy_key'

export function AuthButtons() {
  if (!hasValidClerkKeys) {
    return (
      <div className="text-[#9eb7a8] text-sm">
        Demo Mode
      </div>
    )
  }

  try {
    const { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } = require('@clerk/nextjs')
    
    return (
      <>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="text-[#9eb7a8] hover:text-white font-medium transition-colors">Sign In</button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-[#38e07b] hover:bg-[#2bc968] text-black rounded-lg font-bold text-sm h-10 px-4 transition-colors">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      </>
    )
  } catch {
    return (
      <div className="text-[#9eb7a8] text-sm">
        Demo Mode
      </div>
    )
  }
}