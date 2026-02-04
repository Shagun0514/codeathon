import { signup, login } from "../services/authService.js";

import { authSchema } from "../validators/schemas.js";

export async function signupUser(req, res) {
  try {
    authSchema.parse(req.body);
    const { email, password } = req.body;
    const data = await signup(email, password);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function loginUser(req, res) {
  try {
    authSchema.parse(req.body);
    const { email, password } = req.body;
    const data = await login(email, password);
    res.json(data);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}
