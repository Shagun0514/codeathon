module.exports = (req, res, next) => {
  if (!req.headers["idempotency-key"]) {
    return res.status(400).json({ message: "Idempotency-Key required" });
  }
  next();
};
