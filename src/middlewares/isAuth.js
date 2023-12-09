const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.unauthorized("Not Authenticated!");
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.unauthorized("Not Authenticated!");
    }

    req.id = await decoded.sid;
    next();
  });
};

module.exports = isAuth;
