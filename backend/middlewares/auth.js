const jwt = require("jsonwebtoken");
const secretKey = "mySecretKey";

const verifyToken = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      if (token.toLowerCase().startsWith("bearer")) {
        token = token.slice("bearer".length).trim();
      }
      // jwt.verify(token, process.env.SECRET, (err, decoded) => {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          console.log(err);
          return res.status(401).json({
            error: "Failed to authenticate token",
          });
        }
        next(decoded.id);
      });
    } else {
      return res.status(403).json({
        error: "Unauthorized user!",
      });
    }
  } catch (error) {
    return res.status(403).json({
      error: "Unauthorized user!",
    });
  }
};

module.exports = verifyToken;
