var request = require("request");
var geocodeAddress = function (argv, callback){
var encodedAddress = encodeURIComponent(argv.a)


request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?address=%20' + encodedAddress,
	json: true
}, function(error, response, body){
    if(error){callback("unable to connect to google servers")}
    
    else if(body.status == "ZERO_RESULTS"){callback("unable to find that address")}
    
    else if(body.status =="OK"){
    	callback(undefined, {
    		address: body.results[0].formatted_address,
    		latitude: body.results[0].geometry.bounds.northeast.lat,
    		longitude: body.results[0].geometry.bounds.northeast.lng
    	})
}
})
}

module.exports.geocodeAddress = geocodeAddress;
