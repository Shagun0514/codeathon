import jwt from "jsonwebtoken";
import { supabase } from "../config/supabase.js";

export async function signup(email, password) {
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true
  });

  if (error) throw error;
  return data;
}

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;

  const token = jwt.sign(
    {
      userId: data.user.id,
      email: data.user.email
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { token };
}
