const jwt = require('jsonwebtoken');
const secrets = require('../data/extendedConfig');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: "You are not authorized because of an error!" });
        } else {
            req.decodedJwt = decodedToken;
            next();
        }
        });
    } else {
        res.status(401).json({ message: "You are not authorized" });
    }
    };