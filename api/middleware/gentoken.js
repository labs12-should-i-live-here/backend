const ex = require('../data/extendedConfig');

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
                    console.log( payload, options, secret)
                    try {console.log(jwt.sign( payload, secret, options), "recived")}catch(err){console.log(err)}
    return jwt.sign( payload, secret, options);
    }