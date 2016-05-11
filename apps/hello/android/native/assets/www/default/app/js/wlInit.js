
/* JavaScript content from app/js/wlInit.js in folder common */
/**
 * combined file for mobile first
 */

// Uncomment the initialization options as required. For advanced initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center 
 
 var wlInitOptions = {
	
	// # To disable automatic hiding of the splash screen uncomment this property and use WL.App.hideSplashScreen() API
	//autoHideSplash: false,
		 
	// # The callback function to invoke in case application fails to connect to MobileFirst Server
	//onConnectionFailure: function (){},
	
	// # MobileFirst Server connection timeout
	//timeout: 30000,
	
	// # How often heartbeat request will be sent to MobileFirst Server
	//heartBeatIntervalInSecs: 7 * 60,
	
	// # Enable FIPS 140-2 for data-in-motion (network) and data-at-rest (JSONStore) on iOS or Android.
	//   Requires the FIPS 140-2 optional feature to be enabled also.
	//enableFIPS : false,
	
	// # The options of busy indicator used during application start up
	//busyOptions: {text: "Loading..."}
};

if (window.addEventListener) {
	window.addEventListener('load', function() { WL.Client.init(wlInitOptions); }, false);
} else if (window.attachEvent) {
	window.attachEvent('onload',  function() { WL.Client.init(wlInitOptions); });
}
function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	var env =WL.Client.getEnvironment();
	if(env === WL.Environment.IPHONE || env === WL.Environment.IPAD){
		document.body.classList.add('platform-ios');
	}else if(env === WL.Environment.ANDROID){
		document.body.classList.add('platform-android');	
	}
}
Messages = {
		// Add here your messages for the default language. 
		// Generate a similar file with a language suffix containing the translated messages
		// key1 : message1,
		// key2 : message2
		
		// Uncomment if you use the Authenticator example.  
		// usernameLabel : "Username:",
		// passwordLabel : "Password:",
		// invalidUsernamePassword : 'Invalid username or password.' 
	};

