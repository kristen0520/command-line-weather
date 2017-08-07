

var yargs = require("yargs");
var geocode = require("./geocode/geocode.js")
var weather = require("./weather/weather.js")
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
        console.log(results.address)

weather.getWeather(results.latitude, results.longitude, function callback(errorMessage, weatherResult){
  if(errorMessage){ console.log(errorMessage)}
    else{console.log("It's currently "+weatherResult.temperature+ " but it feelse like " + weatherResult.apparentTemperature)}
});

    }
});     

//weather.getWeather(33.9691145, -84.149745, function callback(errorMessage, result){});


//101c1b9777bb28feaaea270678016335


//continue on lesson 36