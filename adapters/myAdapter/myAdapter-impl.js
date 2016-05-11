function getGmapLatLng(pAddress) {

    var input = {
        method : 'get',
        returnedContentType : 'json',
        path : 'maps/api/geocode/json',
        parameters : {
            'address' : pAddress,
            'sensor' : 'false'   // hard-coded
        }
    };
    
    //return WL.Server.invokeHttp(input);
    
    var backendResponse = WL.Server.invokeHttp(input);
	var procedureResponse = {};
	
	if(backendResponse.isSuccessful && backendResponse.statusCode == 200){ //For simplicity, considering only 200 as valid
		//Do something interesting with the data
		procedureResponse.interestingData = backendResponse.html.head.title;
	}
	else{
		procedureResponse.isSuccessful = false; //Overwrite to failure
	}

	return procedureResponse;
}