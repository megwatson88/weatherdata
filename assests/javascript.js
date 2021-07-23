let cityName = document.getElementById("city-name")
function myFunction() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Bakersfield&appid=0653198af3dba7668f4d7e512b654c07')
        .then(function (weatherResponse) {
            return weatherResponse.json();
        })
        .then(function (weatherData) {
            console.log(weatherData);
        });
}
    //do this to reatreeve data ^
    //let lat = weatherData.coord.lat;
   // let lon = weatherData.coord.lon;
    //let temp = weatherData.main.temp;
    //document.getElementById('temp').textContent = temp;

    // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=<API_KEY>`)
    //  .then(res => res.json())
    // .then(data => {
    //  console.log(data); 
    //do this to get data for the forloop for the 5 days 
    //   });
    //})
