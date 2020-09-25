const express = require("express");
const http = require ("http");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


  app.get("/", function(req, res){
  res.render("index");
});


  app.post("/", function(req,res){
  const query = req.body.cityName;
  const apikey = "375d7436c5dbe9ad71d263608096bc5d"
  const unit = "metric"
  const url = "http://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apikey +"&units="+ unit
 http.get(url, function (response){
  console.log(response.statusCode);

response.on("data", function (data){
const weatherData = JSON.parse(data);
const temp = weatherData.main.temp;
const weatherDescription = weatherData.weather[0].description;
const icon = weatherData.weather[0].icon;

// res.write("The weather is currently " + weatherDescription + "\n");
//
// res.write("The temperature in "+ query +" is " + temp + " degrees Celcius.\n");



res.render("weather", {
  todayTemp: temp,
  theCity: query
});

});


});

res.render
});
app.listen(process.env.PORT || 2000, function() {

  console.log("Server started on 2000.");
});
