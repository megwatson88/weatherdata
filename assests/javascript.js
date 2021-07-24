
//let cityName = document.getElementById("city-name")
//add event listener 
//function myFunction() {
fetch('https://api.openweathermap.org/data/2.5/weather?q=lompoc&appid=0653198af3dba7668f4d7e512b654c07&units=imperial')
    .then(function (weatherResponse) {
        return weatherResponse.json();
    }).then(function (weatherData) {
        console.log(weatherData);


        //do this to reatreeve data ^
        let lat = weatherData.coord.lat;
        let lon = weatherData.coord.lon;
        let temp = weatherData.main.temp;
        let windSpeed = weatherData.wind.speed;
        let humidity = weatherData.main.humidity;
        document.getElementById('temp').textContent = `${temp} degree F`;
        //repeat for each var for the whole thing ^
        document.getElementById('wind-speed').textContent = `${windSpeed} mph`;
        document.getElementById('humidity').textContent = `${humidity} relitive humidity`;
        //need UV index

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=0653198af3dba7668f4d7e512b654c07`)
            .then(function (weatherResponseFiveDay) {
                return weatherResponseFiveDay.json();
            }).then(function(weatherDataFiveDay) {
                console.log(weatherDataFiveDay)
            
             let uvi = weatherDataFiveDay.current.uvi;
             document.getElementById("UV-Index").textContent = `${uvi} UV Index`;
            });
        //  console.log(data); the temperature, the wind speed, and the humidity
        //do this to get data for the forloop for the 5 days 
        //   });
        //})
 }//);//}
    )