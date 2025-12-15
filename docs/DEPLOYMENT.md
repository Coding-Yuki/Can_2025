# Deployment Guide - CAN Morocco 2025

## Prerequisites

- Vercel account (for hosting)
- Supabase account (for database)
- Git repository connected to Vercel

## Step 1: Supabase Setup

### 1.1 Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and API keys

### 1.2 Run Database Migration

1. Go to Supabase Dashboard > SQL Editor
2. Copy the contents of `scripts/001-create-database-schema.sql`
3. Paste and execute the SQL script
4. Verify tables `users` and `messages` are created

Alternatively, if you have Supabase CLI installed:

\`\`\`bash
supabase db push
\`\`\`

## Step 2: Environment Variables

Add the following environment variables in your Vercel project:

### Required Variables

\`\`\`bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
\`\`\`

### How to Add Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add each variable with its value
4. Select the appropriate environments (Production, Preview, Development)
5. Click **Save**

## Step 3: Deploy to Vercel

### Via GitHub (Recommended)

1. Push your code to GitHub
2. Import repository in Vercel
3. Vercel will auto-deploy on each push

### Via Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
\`\`\`

## Step 4: Verify Deployment

### Test the Logo

1. Visit your deployed site
2. Check if the CAN 2025 logo appears in the header
3. Open browser DevTools > Network tab to verify image loads

### Test the Countdown

1. Navigate to the home page
2. Verify the countdown timer is visible and updating
3. Check that it shows days, hours, minutes, and seconds

### Test the Chat API

\`\`\`bash
# Test chat endpoint
curl -X POST https://your-site.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Bonjour"}]}'

# Expected response
{"text":"Marhaba! 🦁 Je suis Assad..."}
\`\`\`

### Test Chat History API

\`\`\`bash
# Get chat history
curl https://your-site.vercel.app/api/chat?userId=test-user-123

# Expected response
{"messages":[...]}
\`\`\`

### Verify Database

1. Go to Supabase Dashboard > Table Editor
2. Select the `messages` table
3. You should see chat messages being stored

## Step 5: Favicon Verification

1. Open your site in a browser
2. Check the browser tab for the favicon
3. Test on different devices (desktop, mobile)

## Troubleshooting

### Logo Not Showing

- Verify `public/images/can-logo.png` exists
- Check browser console for 404 errors
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Countdown Not Working

- Check browser console for JavaScript errors
- Verify the component is client-side (`"use client"`)
- Ensure the target date is correct

### Chat API Errors

- Check Vercel deployment logs
- Verify environment variables are set correctly
- Test Supabase connection in Supabase dashboard

### Database Not Storing Messages

- Verify `SUPABASE_SERVICE_ROLE_KEY` is set
- Check RLS policies in Supabase
- Review API logs for database errors

## Security Checklist

- ✅ `SUPABASE_SERVICE_ROLE_KEY` is set as environment variable (not in code)
- ✅ RLS policies are enabled on all tables
- ✅ API endpoints validate input data
- ✅ Error messages don't expose sensitive information

## Performance Optimization

- Images are optimized and served from `/public`
- Countdown uses client-side rendering to prevent hydration issues
- API responses include proper status codes
- Database queries are indexed for performance

## Support

If you encounter issues:

1. Check Vercel deployment logs
2. Review Supabase logs
3. Test API endpoints with curl
4. Contact support at vercel.com/help
