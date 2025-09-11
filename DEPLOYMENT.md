# 🚀 Render Deployment Guide

## Quick Deploy to Render

1. **Fork/Push to GitHub**
   - Ensure your code is pushed to GitHub
   - Make sure `.env.local` is in `.gitignore`

2. **Connect to Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Auto Configuration**
   - Render will detect the `render.yaml` file
   - All build settings are pre-configured

4. **Set Environment Variables**
   Add these in Render dashboard:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Z2VudWluZS1sbGFtYS05My5jbGVyay5hY2NvdW50cy5kZXYk
   CLERK_SECRET_KEY=sk_test_iMYu8N7uNEDqgjYbeyhzXx1AlUoeYolbKm6QQUKgAt
   NEXT_PUBLIC_SUPABASE_URL=https://oxkuheoydlvzspnzmkci.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94a3VoZW95ZGx2enNwbnpta2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MTg5ODgsImV4cCI6MjA3MjM5NDk4OH0.bhKVsFQY6amVFX37Y100Vqth7ZRdMy5jHyPgsc99wcQ
   GEMINI_API_KEY=AIzaSyCE3y6yArB5tfhN-8CHMNAMv69ThToNT_o
   SCRAPING_BEE_API_KEY=YSKMZHHSU909L3RWY9NPALYS04KEN42X7ND2UR8A95YOP0ILU7BEPLX240ZL2WEQMKK7ZA1VBYKYJ63C
   SCRAPING_DOG_API_KEY=68b9efcc8aa5f9d7763962ef
   RAPIDAPI_KEY=62be2f3d53msh13ae503e2ae283cp1d2ef3jsn78fe50a6e49f
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Render will build and deploy automatically
   - Your app will be live at `https://career-compass-xxxx.onrender.com`

## Manual Configuration (if needed)

If `render.yaml` isn't detected:
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`
- **Node Version**: 18.17.0

## 🔧 Post-Deployment

1. Update Clerk redirect URLs with your new Render domain
2. Update Supabase allowed origins if needed
3. Test all features to ensure APIs work correctly

## 📝 Notes

- Free tier may have cold starts (30-60 seconds)
- Upgrade to paid plan for better performance
- Monitor logs in Render dashboard for any issues