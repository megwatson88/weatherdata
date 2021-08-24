
//var previousCities = querySelector()
localStorage.getItem('cityName')
//begin the nested fetch to get data for all the weather 
function getCityName() {
    let cityName = document.getElementById("city-name").value;
    localStorage.setItem('cityName', cityName)
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

                    // for loop with incrmenting the array loop should end with 6 elements 
                    for (var i = 1; i < 6; i++) {
                        console.log(weatherDataFiveDay.daily[i].temp.max)
                        console.log(weatherDataFiveDay.daily[i].humidity)
                        console.log(weatherDataFiveDay.daily[i].wind_gust)
                        
                        //getting data with API

                        let tommorwTemp = weatherDataFiveDay.daily[1].temp.max;
                        let DayTwoHumidity = weatherDataFiveDay.daily[1].humidity;
                        let tommorowWindspeed = weatherDataFiveDay.daily[1].wind_speed;
                        let weatherIcon = weatherDataFiveDay.current.weather[0].icon;

                        //setting data dynamicly
                        document.querySelector('#tommrow-temp').textContent = `${tommorwTemp} Degrees F`;
                        //placeing the image 
                        function weatherIconPlacement(){
                                var img = document.createElement('weatherIcon');
                            img.src=weatherIcon.document.querySelector('#weatherIcon')};
                        //weatherIconPlacement()
                        document.getElementById('tomorrow-humidity').textContent = `${DayTwoHumidity} % humidity`
                        document.getElementById('tomorrow-windspeed').textContent = `${tommorowWindspeed} mph`

                        //  day 2 weather 
                        //day 2 data retrival 
                        let day2Temp = weatherDataFiveDay.daily[2].temp.max;
                        let day2Humidity = weatherDataFiveDay.daily[2].humidity;
                        let day2Windspeed = weatherDataFiveDay.daily[2].wind_speed;
                        //day 2 dynmaic placed data
                        document.querySelector('#day2-temp').textContent = `${day2Temp} Degrees F`;

                        document.querySelector('#day2-humidity').textContent = `${day2Humidity} % humidity`
                        document.querySelector('#day2-windspeed').textContent = `${day2Windspeed} mph`

                        //day 3 weather 
                        // day 3 data retrival 

                        let day3Temp = weatherDataFiveDay.daily[3].temp.max;
                        let day3Humidity = weatherDataFiveDay.daily[3].humidity;
                        let day3Windspeed = weatherDataFiveDay.daily[3].wind_speed;

                        //day 3 dynmanic placed data
                        document.querySelector('#day3-temp').textContent = `${day3Temp} Degrees F`;

                        document.querySelector('#day3-humidity').textContent = `${day3Humidity} % humidity`
                        document.querySelector('#day3-windspeed').textContent = `${day3Windspeed} mph`

                        //                         //day 4 weather 
                        //day 4 data retiveal 
                        let day4Temp = weatherDataFiveDay.daily[4].temp.max;
                        let day4Humidity = weatherDataFiveDay.daily[4].humidity;
                        let day4Windspeed = weatherDataFiveDay.daily[4].wind_speed;

                        //day 4 data dymnatic placed
                        document.querySelector('#day4-temp').textContent = `${day4Temp} Degrees F`;
                        document.querySelector('#day4-humidity').textContent = `${day4Humidity} % humidity`
                        document.querySelector('#day4-windspeed').textContent = `${day4Windspeed} mph`

                        //                         //day 5 
                        //                         //day 5 data 
                        let day5Temp = weatherDataFiveDay.daily[4].temp.max;
                        let day5Humidity = weatherDataFiveDay.daily[4].humidity;
                        let day5Windspeed = weatherDataFiveDay.daily[4].wind_speed;

                        //                         //day 5 data dymnatic placed
                        document.querySelector('#day5-temp').textContent = `${day5Temp} Degrees F`;
                        document.querySelector('#day5-humidity').textContent = `${day5Humidity} % humidity`
                        document.querySelector('#day5-windspeed').textContent = `${day5Windspeed} mph`

                    };
                   
                });
            // //keep repeating the syetem for day 2-5 
        })
};
// //function to set and get local storage set golabal varliables and grab them from the input
// // build the fuction to recall the local storage data and populate it into the previous searched cities