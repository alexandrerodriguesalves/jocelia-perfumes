import { createClient } from "@supabase/supabase-js";

const url = "https://mahsctmyhqgpzggmiwou.supabase.co";
const chave = "COLE_AQUI_A_PUBLISHABLE_KEY";

export const supabase = createClient(url, chave);
