const jwt = require('jsonwebtoken');

// TODO: POSSIBLE REFACTOR - NOT DRY

const authAdmin = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ message: `Invalid token (No Token)` });
  }
  jwt.verify(
    token.split(' ')[1],
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        return res.status(400).json({ message: `Invalid Token` });
      } else {
        if (
          decoded.UserInfo.roles.includes('admin') ||
          decoded.UserInfo.roles.includes('Admin')
        ) {
          next();
        } else {
          return res.status(401).json({ message: `Unauthorized Personnel` });
        }
      }
    }
  );
};

const authEmployee = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ message: `Invalid Token (No Token)` });
  }
  jwt.verify(
    token.split(' ')[1],
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        return res.status(400).json({ message: `Invalid Token` });
      }
      next();
    }
  );
};

const authOfficerOrAdmin = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ message: `Invalid Token (No Token)` });
  }
  jwt.verify(
    token.split(' ')[1],
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        return res.status(400).json({ message: `Invalid Token` });
      } else {
        if (
          decoded.UserInfo.roles.includes('officer') ||
          decoded.UserInfo.roles.includes('Officer') ||
          decoded.UserInfo.roles.includes('admin') ||
          decoded.UserInfo.roles.includes('Admin')
        ) {
          next();
        } else {
          return res.status(401).json({ message: `Unauthorized Personnel` });
        }
      }
    }
  );
};

module.exports = { authAdmin, authEmployee, authOfficerOrAdmin };
