//var request = require("request");
var yargs = require("yargs");
var geocode = require("./geocode/geocode.js")
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

geocode.geocodeAddress(argv, function callback(errorMessage, results){
    if(errorMessage){console.log(errorMessage)}

    else{
        console.log(JSON.stringify(results, undefined, 2))
    }
});





//continue on lesson 34