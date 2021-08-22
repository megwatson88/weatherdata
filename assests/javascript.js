
//var previousCities = querySelector()
localStorage.getItem('cityName')
//begin the nested fetch to get data for all the weather 
function getCityName() {
    let cityName = document.getElementById("city-name").value; 
    localStorage.setItem('cityName',cityName)
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
                    // for loop with incrmenting the array loop should end with 6 elements 
                    for (var i = 1; i < 6; i++) {
                        console.log(weatherDataFiveDay.daily[i].temp.max)
                        console.log(weatherDataFiveDay.daily[i].humidity)
                        console.log(weatherDataFiveDay.daily[i].wind_gust)

                        let tommorwTemp = weatherDataFiveDay.daily[1].temp.max;
                        let DayTwoHumidity = weatherDataFiveDay.daily[2].humidity;
                        let tommorowWindspeed = weatherDataFiveDay.daily[1].windSpeed;
                        //let weatherIcon = weatherDataFiveDay.daily[i].weather[i].icon;
                        document.querySelector('#tommrow-temp').textContent = `${tommorwTemp} Degrees F`;
                    };
                        document.getElementById('').textContent = `${DayTwoHumidity} % humidity`
                        document.getElementById('tomorrow-windspeed').textContent = `${tommorowWindspeed} mph`
                });
//keep repeating the syetem for day 2-5 
        })
};
//function to set and get local storage set golabal varliables and grab them from the input 
// build the fuction to recall the local storage data and populate it into the previous searched cities. 

// let searchHistory = [];
//             // already searched citys 
//             function saveSearchHistory(searchedItem) {
//                 searchHistory.push(searchedItem);
//                 localStorage.setItem("searchedHistory", JSON.stringify(searchHistory));
//                 // function needs to display 
//                 // call function 


//                 //need button click events 
//             };