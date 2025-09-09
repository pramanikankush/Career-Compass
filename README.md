# Career Compass 🧭

A comprehensive career development platform built with Next.js, featuring AI-powered resume analysis, job search, interview preparation, and resume building tools.

## ✨ Features

- **🏠 Smart Dashboard** - Personalized daily focus topics and progress tracking
- **💼 Job Search** - Real-time job listings with AI matching
- **📄 Resume Analyzer** - AI-powered ATS score analysis and improvement suggestions
- **🏗️ Resume Builder** - Professional resume templates with real-time preview
- **🎯 Interview Prep** - Curated resources for technical and behavioral interviews
- **🔐 Secure Authentication** - Powered by Clerk

## 🚀 Live Demo

Try the app: [Career Compass Demo](your-deployment-url)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **Database**: Supabase
- **AI**: Google Gemini API
- **Deployment**: Vercel
- **Styling**: Framer Motion for animations

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/career-compass.git
   cd career-compass
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env.local`
   - Fill in your API keys:
     ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
     CLERK_SECRET_KEY=your_clerk_secret
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
     GEMINI_API_KEY=your_gemini_key
     RAPIDAPI_KEY=your_rapidapi_key
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 🔐 Security Features

- Rate limiting on API endpoints
- Secure environment variable handling
- File upload validation and size limits
- Error boundaries for graceful error handling
- Privacy-focused resume processing (files not stored)

## 📱 Usage

1. **Sign up/Login** using Clerk authentication
2. **Dashboard**: View personalized learning topics and track progress
3. **Job Search**: Search for jobs with AI-powered matching
4. **Resume Analysis**: Upload your resume for detailed ATS analysis
5. **Resume Builder**: Create professional resumes with multiple templates
6. **Interview Prep**: Access curated resources for interview preparation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for the developer community
- Thanks to all the open-source libraries and APIs used
- Special thanks to the YouTube creators for educational content links

---

**Note**: This is a demo application. Please ensure you have proper API keys and follow rate limits when using in production.
