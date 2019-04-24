// check if already logged in with Facebook
FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});


// response objectg to above callback function
{
status: 'connected',
authResponse: {
    accessToken: '...',
    expiresIn:'...',
    signedRequest:'...',
    userID:'...'
}
}

// attribute on login button to set up a JavaScript callback that checks the login status to see 
// if user is logged in successfully
<fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>


// callback function (to FB.getLoginStatus()) to get the most recent login state
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}


// may have to be moved to Frontend HTML in <script>

window.fbAsyncInit = function() {
	FB.init({
		appId: '{your-app-id}',
		cookie: true,
		xfbml: true,
		version: '{api-version}'
	});

	FB.AppEvents.logPageView();
};

(function(d, s, id) {
	var js,
		fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk.js';
	fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
