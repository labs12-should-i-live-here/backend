module.exports = {
    generateToken 
};

const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'string';

    
    function generateToken ( user ) {

        const payload = {
                        subject: user.userid,
                        username: "taylor"
                    }
    const options = {
                        expiresIn: '78h'
                    }
    return jwt.sign( payload, secret, options);
    }