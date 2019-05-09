const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'string';

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
        if (err) { console.log(err);
            res.status(401).json({ message: "You are not authorized because of an error!" });
        } else {
            req.decodedJwt = decodedToken;
            next();
        }
        });
    } else {
        res.status(401).json({ message: "Token does not work!" });
    }
    };