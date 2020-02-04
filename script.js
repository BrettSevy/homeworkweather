

    
    // $("button").on("click", function() {
    // var searchTerm = $().attr(".searchTerm").val()})
        
      
    var searchTerm = "Salt Lake City"
    
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" +searchTerm + "&units=imperial&appid=" + APIKey;
    
    
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
            $(".description").text("Description: " +response.weather[0].description);
            
        });


        
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + APIKey +"&q="+searchTerm+"&count=5";
        
        
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
                console.log(response)

        })
        
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
    