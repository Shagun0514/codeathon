// supabaseClient.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

// Replace with your actual Supabase URL and anon key
const supabaseUrl = 'https://fpzrvossyxbngrtcfgbp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwenJ2b3NzeXhibmdydGNmZ2JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTQxMzksImV4cCI6MjA2NDYzMDEzOX0.exaBjMcViOJVv74jZ-CP9ge8-YentIPIoLbzuiL5w2E'

export const supabase = createClient(supabaseUrl, supabaseKey)
