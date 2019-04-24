// configuration settings
const credentials = {
    client: {
      id: '0',
      secret: 'h6OfUY7KhmKr3N2p'
    },
    auth: {
      tokenHost: 'https://api.oauth.com'
    }
  };


// Initialize OAuth2 Library
const oauth = require('simple-auth2').create(credentials);


// Create the access token wrapper
let accessToken = oauth2.accessToken.create(tokenObject);

// Get the access token object.
const tokenConfig = {
  username: 'username',
  password: 'password',
  // scope: '<scope>', // also can be an array of multiple scopes, ex. ['<scope1>, '<scope2>', '...']
};
 
// Save the access token
try {
  const result = await oauth2.ownerPassword.getToken(tokenConfig);
  const accessToken = oauth2.accessToken.create(result);
} catch (error) {
  console.log('Access Token Error', error.message);
}

 
// Check if the token is expired. If expired it is refreshed.
if (accessToken.expired()) {
  try {
    accessToken = await accessToken.refresh();
  } catch (error) {
    console.log('Error refreshing access token: ', error.message);
  }
}

// errors
try {
  await oauth2.authorizationCode.getToken();
} catch(error) {
  console.log(error);
}