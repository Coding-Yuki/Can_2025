# Full-Stack Volunteer Management System - Setup Guide

## Overview

Your CAN Morocco 2025 application has been successfully converted from a frontend-only prototype to a **functioning full-stack application** with Supabase backend integration.

## What Was Implemented

### 1. Database Setup (Supabase)

Created a `benevoles` table with the following structure:

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| first_name | TEXT | Volunteer's first name |
| last_name | TEXT | Volunteer's last name |
| email | TEXT | Unique email address |
| phone | TEXT | Phone number |
| birthdate | DATE | Date of birth |
| nationality | TEXT | Nationality |
| city | TEXT | Preferred city (casablanca, rabat, etc.) |
| mission | TEXT | Preferred mission type |
| languages | JSONB | Array of languages spoken |
| motivation | TEXT | Motivation statement |
| experience | TEXT | Previous experience (optional) |
| status | TEXT | Application status (pending/approved/rejected) |
| created_at | TIMESTAMP | Submission timestamp |

**Security Features:**
- Row Level Security (RLS) enabled
- Public insert policy (anyone can apply)
- Authenticated/service role read access (for admin dashboard)
- Service role update access (for status changes)

### 2. Volunteer Signup Form

**File:** `components/volunteers/volunteer-form.tsx`

**Changes:**
- Connected to Supabase for data submission
- Real-time form state management
- Error handling with user-friendly messages
- Loading states during submission
- Success confirmation screen
- All visual design preserved (Tailwind classes unchanged)

**How it works:**
1. User fills out the form
2. On submit, data is sent to `benevoles` table via Supabase client
3. Success confirmation displayed
4. Data immediately available in admin dashboard

### 3. Admin Dashboard

**File:** `app/admin/volunteers/page.tsx`

**Changes:**
- Fetches real data from Supabase via API route
- Dynamic statistics (total, approved, pending, rejected)
- Real-time filtering by status and mission
- Search functionality (name/email)
- Approve/Reject actions for pending applications
- Loading states and empty states
- All visual design preserved

**API Route:** `app/api/volunteers/route.ts`
- GET: Fetch volunteers with filtering
- PATCH: Update volunteer status

### 4. Files Created/Modified

**New Files:**
- `lib/supabase.ts` - Supabase client configuration
- `app/api/volunteers/route.ts` - Backend API for volunteer management
- `.npmrc` - NPM configuration for dependency resolution
- `SETUP_GUIDE.md` - This guide

**Modified Files:**
- `components/volunteers/volunteer-form.tsx` - Connected to backend
- `app/admin/volunteers/page.tsx` - Fetches real data
- `.env` - Added SUPABASE_SERVICE_ROLE_KEY placeholder

## Setup Instructions

### 1. Configure Environment Variables

You need to add your Supabase Service Role Key to the `.env` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://coyxkxpkfghmyyjffpif.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=your-actual-service-role-key-here
```

**How to get your Service Role Key:**
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Navigate to **Settings** > **API**
4. Copy the **service_role** key (NOT the anon key)
5. Replace `your-service-role-key-here` in `.env`

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Test the Application

#### Test Volunteer Signup:
1. Visit: `http://localhost:3000/volunteers`
2. Scroll to the signup form
3. Fill out all required fields
4. Click "Envoyer ma candidature"
5. Verify success message appears

#### Test Admin Dashboard:
1. Visit: `http://localhost:3000/admin/volunteers`
2. Verify the volunteer appears in the table
3. Test filters (status, mission, search)
4. Click approve/reject buttons for pending volunteers

## How the System Works

### User Flow (Volunteer Signup)

```
User fills form → Submit button clicked → Supabase Insert → Success screen
```

**Technical Flow:**
1. User submits form in `VolunteerForm` component
2. `supabase.from("benevoles").insert()` called
3. Data inserted with status="pending"
4. Success state displayed to user

### Admin Flow (Managing Applications)

```
Admin opens dashboard → API fetches data → Table displayed → Actions available
```

**Technical Flow:**
1. Admin page loads, calls `fetchVolunteers()`
2. API route `/api/volunteers` queries Supabase
3. Data filtered by status/mission/search
4. Table rendered with action buttons
5. Approve/Reject calls PATCH endpoint
6. Status updated in database
7. Table refreshed with new data

## Database Access

### Public Access (Anon Key)
- **INSERT** into `benevoles` table (volunteer signup)
- Used by frontend form

### Authenticated/Service Role
- **SELECT** from `benevoles` table (admin dashboard)
- **UPDATE** status field (approve/reject)
- Used by API routes

## Security Notes

1. **RLS Policies are active** - Data is protected
2. **Service role key** is only used server-side (API routes)
3. **Anon key** is safe for client-side use (limited permissions)
4. **Email uniqueness** enforced at database level

## Troubleshooting

### Issue: "Failed to fetch volunteers"
**Solution:** Check that `SUPABASE_SERVICE_ROLE_KEY` is set correctly in `.env`

### Issue: "Duplicate email" error
**Solution:** Email addresses must be unique. Each volunteer can only apply once.

### Issue: Admin dashboard shows 0 volunteers
**Solution:**
1. Submit a test application via `/volunteers`
2. Refresh admin dashboard
3. Check browser console for API errors

### Issue: Build errors
**Solution:** The `.npmrc` file should resolve peer dependency issues. If problems persist:
```bash
rm -rf node_modules package-lock.json
npm install
```

## API Endpoints

### GET /api/volunteers
Fetch volunteers with optional filtering

**Query Parameters:**
- `status` - Filter by status (pending/approved/rejected)
- `mission` - Filter by mission type
- `search` - Search in name/email

**Response:**
```json
{
  "volunteers": [
    {
      "id": "uuid",
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@example.com",
      "status": "pending",
      ...
    }
  ]
}
```

### PATCH /api/volunteers
Update volunteer status

**Body:**
```json
{
  "id": "volunteer-uuid",
  "status": "approved" // or "rejected"
}
```

**Response:**
```json
{
  "success": true
}
```

## Next Steps

1. **Test the system thoroughly** with real data
2. **Configure email notifications** (optional - would require additional setup)
3. **Add data export functionality** (CSV/Excel for volunteer list)
4. **Implement detailed volunteer profile view**
5. **Add bulk actions** (approve/reject multiple at once)

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify Supabase connection in dashboard
3. Test API endpoints directly with curl/Postman
4. Review Supabase logs for database errors

---

**Your application is now a fully functional full-stack system with:**
- Real-time data persistence
- Secure backend with RLS
- Admin management interface
- Production-ready architecture
