1 引入sdk
import facebook from '../../lib/js/facebook1.js' //facebook 的引入文件
2 调用初始化方法
window.fbAsyncInit = function() {
	FB.init({
	  appId      : 2857557154267104,
	  cookie     : true,                     // Enable cookies to allow the server to access the session.
	  xfbml      : true,                     // Parse social plugins on this webpage.
	  version    : 'v5.0'                    // Use this Graph API version for this call.
	});
	FB.AppEvents.logPageView();
}
3 
FB.login(function(response) {
	console.log(response)

    // if (response.authResponse) {
    //  console.log('Welcome!  Fetching your information.... ');
    //  FB.api('/me', function(response) {
    //    console.log('Good to see you, ' + response.name + '.');
	   // console.log(response.id);

    //  });
    // } else {
    //  console.log('User cancelled login or did not fully authorize.');
    // }
},{scope: 'public_profile,email'});