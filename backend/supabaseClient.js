// Ensure SUPABASE_URL and SUPABASE_ANON_KEY in your .env file match your Supabase project settings.
import { createClient } from '@supabase/supabase-js';




const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_ANON_KEY);

export default supabase;
