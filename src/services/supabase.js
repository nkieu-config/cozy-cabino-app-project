import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eaojmlsmihpqgucajvcy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhb2ptbHNtaWhwcWd1Y2FqdmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNTkxODAsImV4cCI6MjA2OTczNTE4MH0.ORwbsXNTivtBkO-KwR9ag60iBUInwX3TIUXKlRKKT8I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
