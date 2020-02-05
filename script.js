
// search term and button 
$("#find-city").on("click", function(event) {
event.preventDefault();
var city = $("#city-input").val();
   
// main card api call
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" + city + "&units=imperial&appid=" + APIKey;
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {

        
// main card info
        $(".city").html("<h1>" + response.name + "</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature " + response.main.temp + " F");
        $(".description").text("Weather Conditions: " +response.weather[0].description);
        
    });
    
// 5 day forcast api call
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + APIKey +"&q="+ city +"&count=5";
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
      console.log(response)

// 5 day forcast
        $(".date1").text(response.list[0].dt_txt);
        $(".temp1").text("Temperature: " + response.list[0].main.temp);
        $(".humidity1").text("Humidity: " + response.list[0].main.humidity);
        $(".description1").text("Conditions: " +response.list[0].weather[0].main);

        $(".date2").text(response.list[7].dt_txt);
        $(".temp2").text("Temperature: " + response.list[7].main.temp);
        $(".humidity2").text("Humidity: " + response.list[7].main.humidity);
        $(".description2").text("Conditions: " +response.list[7].weather[0].main);

        $(".date3").text(response.list[15].dt_txt);
        $(".temp3").text("Temperature: " + response.list[15].main.temp);
        $(".humidity3").text("Humidity: " + response.list[15].main.humidity);
        $(".description3").text("Conditions: " +response.list[15].weather[0].main);

        $(".date4").text(response.list[23].dt_txt);
        $(".temp4").text("Temperature: " + response.list[23].main.temp);
        $(".humidity4").text("Humidity: " + response.list[23].main.humidity);
        $(".description4").text("Conditions: " +response.list[23].weather[0].main);

        $(".date5").text(response.list[31].dt_txt);
        $(".temp5").text("Temperature: " + response.list[31].main.temp);
        $(".humidity5").text("Humidity: " + response.list[31].main.humidity);
        $(".description5").text("Conditions: " +response.list[31].weather[0].main);
        

// local storage
localStorage.setItem("city-input", cityls);
var cityls = localStorage.getItem("#city-input");
$("#storedCities").prepend(cityls);
           
        
    });
   
    
});