var request = require("request");

var getWeather = function (lat, lng, callback){
request({
    url:"https://api.darksky.net/forecast/101c1b9777bb28feaaea270678016335/"+lat+","+lng,
    json:true
},
function(error, response, body){

    if(error){callback("unable to connect to server")}
    else if(response.statusCode == 400){callback("cannot find address")}

   else if(response.statusCode == 200){ 
   	callback(undefined, 
   	{
   		temperature: body.currently.temperature, 
   		apparentTemperature: body.currently.apparentTemperature
   	})
}
})
}

module.exports.getWeather = getWeather;