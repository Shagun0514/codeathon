module.exports = (req, res, next) => {
  req.user = { id: "11111111-1111-1111-1111-111111111111" };
  next();
};
