const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'string';

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (token) {
        console.log('inside tokenVerify', token)
        console.log(secret)
        jwt.verify(token, secret, (err, decodedToken) => {
        if (err) { console.log(err);
            res.status(401).json({ message: "You are not authorized!" });
        } else {
            req.decodedJwt = decodedToken;
            next();
        }
        });
    } else {
        res.status(401).json({ message: "Token does not work!" });
    }
    };