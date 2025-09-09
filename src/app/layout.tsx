import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Career Compass - AI-Powered Career Platform",
  description: "Your AI-powered career companion for job matching, resume analysis, and career growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${plusJakarta.variable} font-sans antialiased bg-gray-900 text-white min-h-screen`}>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
