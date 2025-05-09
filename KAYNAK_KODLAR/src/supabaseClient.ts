import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "";
const supabaseAnonKey = "";
// Github'a yuklerken kaldirdim.

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
