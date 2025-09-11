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
