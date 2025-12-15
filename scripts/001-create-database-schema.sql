-- CAN 2025 Database Schema
-- This script creates the necessary tables for chat message persistence

-- Table: users (optional, for user management)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT,
  email TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: messages (stores chat conversations)
CREATE TABLE IF NOT EXISTS messages (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_messages_user_id ON messages(user_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_messages_role ON messages(role);

-- Enable Row Level Security (RLS) for data protection
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can read their own data
CREATE POLICY "Users can view their own data" ON users
  FOR SELECT
  USING (auth.uid() = id);

-- RLS Policy: Users can view their own messages
CREATE POLICY "Users can view their own messages" ON messages
  FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

-- RLS Policy: Allow service role to insert messages (for API)
CREATE POLICY "Service role can insert messages" ON messages
  FOR INSERT
  WITH CHECK (true);

-- RLS Policy: Allow service role to read all messages (for admin)
CREATE POLICY "Service role can read all messages" ON messages
  FOR SELECT
  USING (true);

-- Comments for documentation
COMMENT ON TABLE users IS 'Stores user account information';
COMMENT ON TABLE messages IS 'Stores chat conversation history between users and Assad the mascot';
COMMENT ON COLUMN messages.role IS 'Message sender role: user, assistant, or system';
COMMENT ON COLUMN messages.metadata IS 'Additional message metadata (timestamp, session info, etc.)';
