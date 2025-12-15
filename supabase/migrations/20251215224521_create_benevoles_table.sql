/*
  # Create Benevoles (Volunteers) Table

  1. New Tables
    - `benevoles`
      - `id` (uuid, primary key)
      - `first_name` (text, required)
      - `last_name` (text, required)
      - `email` (text, required, unique)
      - `phone` (text, required)
      - `birthdate` (date, required)
      - `nationality` (text, required)
      - `city` (text, required)
      - `mission` (text, required)
      - `languages` (jsonb, array of languages)
      - `motivation` (text, required)
      - `experience` (text, optional)
      - `status` (text, default: 'pending')
      - `created_at` (timestamptz, default: now())

  2. Security
    - Enable RLS on `benevoles` table
    - Add policy for public insert (allow volunteer signup)
    - Add policy for service role to read all (for admin dashboard)
*/

-- Create benevoles table
CREATE TABLE IF NOT EXISTS benevoles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  birthdate DATE NOT NULL,
  nationality TEXT NOT NULL,
  city TEXT NOT NULL,
  mission TEXT NOT NULL,
  languages JSONB DEFAULT '[]'::jsonb,
  motivation TEXT NOT NULL,
  experience TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_benevoles_email ON benevoles(email);
CREATE INDEX IF NOT EXISTS idx_benevoles_status ON benevoles(status);
CREATE INDEX IF NOT EXISTS idx_benevoles_city ON benevoles(city);
CREATE INDEX IF NOT EXISTS idx_benevoles_mission ON benevoles(mission);
CREATE INDEX IF NOT EXISTS idx_benevoles_created_at ON benevoles(created_at DESC);

-- Enable Row Level Security
ALTER TABLE benevoles ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (public volunteer signup)
CREATE POLICY "Allow public volunteer signup"
  ON benevoles
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow service role to read all volunteers (for admin dashboard)
CREATE POLICY "Service role can read all volunteers"
  ON benevoles
  FOR SELECT
  TO service_role
  USING (true);

-- Policy: Allow authenticated users to read all volunteers (for admin dashboard)
CREATE POLICY "Authenticated users can read all volunteers"
  ON benevoles
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow service role to update volunteer status
CREATE POLICY "Service role can update volunteers"
  ON benevoles
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Comments for documentation
COMMENT ON TABLE benevoles IS 'Stores volunteer applications for CAN Morocco 2025';
COMMENT ON COLUMN benevoles.languages IS 'JSON array of languages spoken (e.g., ["french", "arabic", "english"])';
COMMENT ON COLUMN benevoles.status IS 'Application status: pending, approved, or rejected';
