import { createClient } from "@supabase/supabase-js";

const url = "https://mahsctmyhqgpzggmiwou.supabase.co";
const chave = "sb_publishable_NJrqdqrsy6y16Jo0n_ogCw_WuAJemjb";

export const supabase = createClient(url, chave);
