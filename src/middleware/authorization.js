import { apiKey } from '../config/settings.config';
const jwt = require("jsonwebtoken");

const checkAuthorization = async (req, res, next) => {
    if (req.headers.authorization != 'Bearer ' + apiKey) {
        return res.status(401).json({ message: 'Unauthorized.' });
    }
    next();
};

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).json({ message: 'A token is required for authentication.' });
    }
    try {
      const decoded = jwt.verify(token, apiKey);
      req.user = decoded;
    } catch (err) {
      return res.status(401).json({ message: 'Unauthorized.' });
    }
    return next();
};


export { checkAuthorization, verifyToken };