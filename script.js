
$("#find-city").on("click", function(event) {
event.preventDefault();
var city = $("#city-input").val();
    
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" + city + "&units=imperial&appid=" + APIKey;
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)
        
        
        $(".city").html("<h1>" + response.name + "</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature " + response.main.temp + " F");
        $(".description").text("Sky: " +response.weather[0].description);
        
    });
    
    
    
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + APIKey +"&q="+ city +"&count=5";
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)


        $(".date1").text(response.list[0].dt_txt);
        $(".temp1").text("temperature: " + response.list[0].main.temp);
        $(".humidity1").text("Humidity: " + response.list[0].main.humidity);
        $(".description1").text("Sky: " +response.list[0].weather[0].main);

        $(".date2").text(response.list[7].dt_txt);
        $(".temp2").text("temperature: " + response.list[7].main.temp);
        $(".humidity2").text("Humidity: " + response.list[7].main.humidity);
        $(".description2").text("Sky: " +response.list[7].weather[0].main);

        $(".date3").text(response.list[15].dt_txt);
        $(".temp3").text("temperature: " + response.list[15].main.temp);
        $(".humidity3").text("Humidity: " + response.list[15].main.humidity);
        $(".description3").text("Sky: " +response.list[15].weather[0].main);

        $(".date4").text(response.list[23].dt_txt);
        $(".temp4").text("temperature: " + response.list[23].main.temp);
        $(".humidity4").text("Humidity: " + response.list[23].main.humidity);
        $(".description4").text("Sky: " +response.list[23].weather[0].main);

        $(".date5").text(response.list[31].dt_txt);
        $(".temp5").text("temperature: " + response.list[31].main.temp);
        $(".humidity5").text("Humidity: " + response.list[31].main.humidity);
        $(".description5").text("Sky: " +response.list[31].weather[0].main);
        
    });
    



    // for(var i = 1; i<5; i++)
    
    // var date = 
    // var temprature2 = 
    // var humidity2 = 
    
    // var fiveDay=`<div class="card">
    // <div class="card-body">
    //     <h5 class="card-title">${date}</h5>
    //     <p class="card-text temp">${temperature}
    //     </p>
    //     <p class="card-text humidity">${humidity}</small>
    //     </p>
    // </div>`
    
    // $("#card-group").append(fiveDay);
    
});