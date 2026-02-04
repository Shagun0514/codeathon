import dotenv from "dotenv";
import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";

dotenv.config({ path: "./.env" });

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    global: {
      fetch
    }
  }
);
