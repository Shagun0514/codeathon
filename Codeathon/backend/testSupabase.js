import { supabase } from "./src/config/supabase.js";

async function test() {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.log("ERROR:", error.message);
  } else {
    console.log("SUCCESS:", data);
  }
}

test();
