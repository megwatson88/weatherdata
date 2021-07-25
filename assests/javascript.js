//create variables for the search 
function getCityName() {
    let cityName = document.getElementById("city-name").value;
    //cityName.addEventListener("click", value);
    console.log(cityName);
    //begin the nested fetch
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0653198af3dba7668f4d7e512b654c07&units=imperial`)
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
            document.getElementById('humidity').textContent = `${humidity} % humidity`;
            //need UV index

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=0653198af3dba7668f4d7e512b654c07&units=imperial`)
                .then(function (weatherResponseFiveDay) {
                    return weatherResponseFiveDay.json();
                }).then(function (weatherDataFiveDay) {
                    console.log(weatherDataFiveDay)

                    let uvi = weatherDataFiveDay.current.uvi;
                    document.getElementById("UV-Index").textContent = `${uvi} UV Index`;
                    //let tomrrow = weatherResponseFiveDay.daily.1.temp.day;
                    //console.log(tomrrow)
        //             $("#today").html(`<div>
        // <h1>City: ${response.name}<span><img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"</span></h1>
        // <h6>Temp: ${response.main.temp}F°</h6>
        // <h6>Wind Speed: ${response.wind.speed}mph</h6>
        // <h6>Weather: ${response.weather[0].description}</h6>
        // <h6>Humidity: ${response.main.humidity}%</h6>
        // </div>`)
                });
            //  console.log(data); the temperature, the wind speed, and the humidity
            //do this to get data for the forloop for the 5 days   
        })
}