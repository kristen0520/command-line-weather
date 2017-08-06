var request = require("request");
var yargs = require("yargs");
const argv = yargs.options({
    a: {
    	demand:true,
    	alias: "address",
    	describe: "address to fetch weather for",
    	string: true
    }
})  
.help()
.alias("help", "h")
.argv;


console.log("argv a= "+argv.a)

var encodedAddress = encodeURIComponent(argv.a)

console.log("encoded aaddress= "+encodedAddress)


request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?address=%20' + encodedAddress,
	json: true
}, function(error, response, body){
	console.log("Address: " + body.results[0].formatted_address)
	console.log("lat: " + body.results[0].geometry.bounds.northeast.lat)
	console.log("lng: " + body.results[0].geometry.bounds.northeast.lng)
})



//continue on lesson 31