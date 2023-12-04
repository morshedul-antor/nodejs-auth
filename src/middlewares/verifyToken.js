const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized!" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    req.id = decoded.sid;
    next();
  });
};

module.exports = verifyToken;
