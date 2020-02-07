

var cityArray =[] ;
if( localStorage.getItem("city-input") !== null){
cityArray = JSON.parse(localStorage.getItem("city-input"));
}

// search term and button 
$("#find-city").on("click", function (event) {
    event.preventDefault();
    var city = $("#city-input").val();
    cityArray.push(city);


    // main card api call
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
        "q=" + city + "&units=imperial&appid=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)
            var lat = (response.coord.lat);
            var lon = (response.coord.lon);

            // main card info
            $(".city").html("<h1>" + response.name + "</h1>");
            // window.localStorage.setItem("city", JSON.stringify(response.name))
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature " + response.main.temp + " F");
            $(".description").text("Weather Conditions: " + response.weather[0].main);

            
            // UV Index api call
            
            var APIKey = "166a433c57516f51dfab1f7edaed8413";
            var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" +APIKey + "&lat=" + lat + "&lon=" + lon;
            
            
            $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {
              

                $(".uvIndex").text("UV Index: " + response.value);
            });
        });
            

    // 5 day forcast api call
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?appid=" + APIKey + "&q=" + city + "&count=5";


    $.ajax({
        url: queryURL,
        method: "GET"
    })  
        
        .then(function (response) {


            // 5 day forcast
            $(".date1").text(response.list[0].dt_txt);
            var tempF1 = ((response.list[0].main.temp) - 273.15) * 1.80 + 32;
            $(".temp1").text("Temperature: " + (Math.round(tempF1)) + " F");
            $(".humidity1").text("Humidity: " + response.list[0].main.humidity);
            $(".description1").text("Conditions: " + response.list[0].weather[0].main);


            $(".date2").text(response.list[7].dt_txt);
            var tempF2 = ((response.list[7].main.temp) - 273.15) * 1.80 + 32;
            $(".temp2").text("Temperature: " + (Math.round(tempF2)) + " F");
            $(".humidity2").text("Humidity: " + response.list[7].main.humidity);
            $(".description2").text("Conditions: " + response.list[7].weather[0].main);

            
            $(".date3").text(response.list[15].dt_txt);
            var tempF3 = ((response.list[15].main.temp) - 273.15) * 1.80 + 32;
            $(".temp3").text("Temperature: " + (Math.round(tempF3)) + " F");
            $(".humidity3").text("Humidity: " + response.list[15].main.humidity);
            $(".description3").text("Conditions: " + response.list[15].weather[0].main);


            $(".date4").text(response.list[23].dt_txt);
            var tempF4 = ((response.list[23].main.temp) - 273.15) * 1.80 + 32;
            $(".temp4").text("Temperature: " + (Math.round(tempF4)) + " F");
            $(".humidity4").text("Humidity: " + response.list[23].main.humidity);
            $(".description4").text("Conditions: " + response.list[23].weather[0].main);


            $(".date5").text(response.list[31].dt_txt);
            var tempF5 = ((response.list[31].main.temp) - 273.15) * 1.80 + 32;
            $(".temp5").text("Temperature: " + (Math.round(tempF5)) + " F");
            $(".humidity5").text("Humidity: " + response.list[31].main.humidity);
            $(".description5").text("Conditions: " + response.list[31].weather[0].main);

            

            // local storage
             localStorage.setItem("city-input", JSON.stringify(cityArray));
            // render(cityArray);


        });


});




// function render(cityArray) {


// }