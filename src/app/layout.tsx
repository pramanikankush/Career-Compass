import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Career Compass - AI-Powered Career Platform",
  description: "Your AI-powered career companion for job matching, resume analysis, and career growth.",
};

const hasValidClerkKeys = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your_clerk_publishable_key' &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'dummy_key';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans antialiased bg-gray-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );

  if (hasValidClerkKeys) {
    const { ClerkProvider } = require('@clerk/nextjs');
    return <ClerkProvider>{content}</ClerkProvider>;
  }

  return content;
}
