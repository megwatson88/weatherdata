// let cityName = document.getElementById("city-name")
// function myFunction(){
//   fetch(`api.openweathermap.org/data/2.5/weather?q=lompoc&appid=APIKEY`)  
//   .then(function(weatherResponse){
//       return weatherResponse.json();
//       console.log(weatherResponse);}
//   }).then(funtion(weatherData) {
//       console.log(weatherData);
//   });
//   fetch()
//   .then Response => resizeBy.json()
//   then(data)
// }

//fetch(``)

fetch('https://api.openweathermap.org/data/2.5/weather?q=Bakersfield&appid=APIKEY')
  .then(function(res) {
   return res.json();})
  .then(function(data) {
     console.log(data); })
     //do this to reatreeve data ^
    //let lat = data.coord.lat;
    //let lon = data.coord.lon;
   // let temp = data.main.temp;
   // document.getElementById('temp').textContent = temp;
   // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=<API_KEY>`)
    //  .then(res => res.json())
     // .then(data => {
      //  console.log(data); //do this to get data for the forloop for the 5 days 
 //   });
//})
