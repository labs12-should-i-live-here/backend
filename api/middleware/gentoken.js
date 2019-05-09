module.exports = {
    generateToken 
};

const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

    
    function generateToken ( user ) {
        const payload = {
                        subject: user.id,
                        username: user.username,
                    }
    const options = {
                        expiresIn: '78h'
                    }
    return jwt.sign( payload, secret, options);
    }