const { createClient } = window.supabase; 
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config.js'; 
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);