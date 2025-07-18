const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

function verifyToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token is required." });
  }
  const token = authorization.replace("Bearer ", "");
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ message: "Token is required." });
  }

  req.user = payload;

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token." });
    req.user = user;
    next();
  });
}
 let payload;
function checkRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res
        .status(403)
        .json({ message: "Access denied. Unauthorized role." });
    }
    req.user = payload;
    next();
  };
}

module.exports = { verifyToken, checkRole };
