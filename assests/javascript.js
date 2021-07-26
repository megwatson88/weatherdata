//create variables for the search 
function getCityName() {
    let cityName = document.getElementById("city-name").value;
    //cityName.addEventListener("click", value);
    console.log(cityName);
    //begin the nested fetch to get data for all the weather 
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
            //pulling the data for 5 day
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=0653198af3dba7668f4d7e512b654c07&units=imperial`)
                .then(function (weatherResponseFiveDay) {
                    return weatherResponseFiveDay.json();
                }).then(function (weatherDataFiveDay) {
                    console.log(weatherDataFiveDay)
                    //color changes for UV index 
                    let uvi = weatherDataFiveDay.current.uvi;
                    document.getElementById("UV-Index").textContent = `${uvi} UV Index`;
                    // if (uvi < 3) {
                    //     uvi.attr("id", "UV-Index");
                    // } else if (uvi < 6) {
                    //     uvi.attr("id", "UV-Index");
                    // } else if (uvi > 10) {
                    //     uvi.attr("id", "UV-Index");
                    // };
                    //next 5 day forcast begins here 
                    let futureWeather = []

                    //already searched citys 
                    let searchedCities = JSON.parse(localStorage.getItem("Previous-Cities"))
                    function pastSearchedCitied(){
                        if (searchedCities[0] !== undefined){
                            city = searchedCities[0];
                            document.getElementById('temp').textContent = `${temp} degree F`;
                        }
                    }

                });
            //  console.log(data); the temperature, the wind speed, and the humidity
            //do this to get data for the forloop for the 5 days   
        })
}