import { createClient } from '@supabase/supabase-js';


const supabase = createClient(
  'https://ngvrgiiztukmwqjxfasd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ndnJnaWl6dHVrbXdxanhmYXNkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzgzODg2NCwiZXhwIjoyMDYzNDE0ODY0fQ.GbI1Vhd6RXLaJKaQF10nndHrUAKjKWhljTYIpyR_FeA'
);

export default supabase;
