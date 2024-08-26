const APIKEY = "cdc635c7341e0719bac9e9385ac7398f";
const APIURL =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const response = await fetch(APIURL + city + `&appid=${APIKEY}`);
    var data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML =
            Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        let weatherCondition = data.weather[0].main;
        weatherIcon.src = `/images/${weatherCondition}.png`;

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    getWeather(searchbox.value);
});