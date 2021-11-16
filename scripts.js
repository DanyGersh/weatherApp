//Type in search bar to change this parameter
let city;
//weather description Language
let language = "en";
//°C, you can change it
let countSys = "metric"

//To get it, go to openweathermap.org, sign up and paste your api key
let appId = "9e336924763ed143f523f9b44df06ce4";
async function getWeather(){
  //Get weather data
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=${language}&appid=${appId}`;
  let response = await fetch(url);
  //Parse it to JSON
  let data = await response.json();
  //Find our weatherBlock (index.html)
  let weatherBlock = document.querySelector(".weather");

  //Paste required block, and round temperature
  weatherBlock.innerHTML = `
  <div class="weatherTemp">${Math.round(data['main']['temp']) + "°C"}</div>
  <div class="weatherStatus">${data['weather'][0]['description']}</div>`
}

//Search bar
let searchField = document.getElementById("search");
function searchWeather(){
  city = searchField.value; 
  getWeather();
}