document.addEventListener("DOMContentLoaded", () => {

    // json formatter
    //free api docs
  const city_Input = document.getElementById("city-input");
  const getWeather = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const Temperature = document.getElementById("temperature");
  const Description = document.getElementById("description");
  const errorMsg = document.getElementById("error-message");
  console.log(cityName);
  console.log(getWeather);
  console.log(weatherInfo);
  console.log(Temperature);
  console.log(Description);
  console.log(city_Input);
    console.log(errorMsg);
    const API_KEY = "9272b95690829bc74295eda8cd6b75b2";
    // env variables
    getWeather.addEventListener("click", async () => {
        console.log("I am in getweather");
        const city = city_Input.value.trim();
        console.log(city);
        if (!city) return;

        // it may throw an error
        // server or database is always in another continent
        try
        {
            const data = await fetchWetherData(city);
            displayWetherData(data);
            
        } catch (error)
        {

            displayErrormsg();
        }

    })

    async function fetchWetherData(city) {
        console.log("I am in fetchWetherData");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        
        const response = await fetch(url);
        console.log(typeof response);
        console.log(response);
        if (!response.ok)
        {
            throw new Error("city not found");
        }

        const data = await response.json()
        return data;
    }

    function displayWetherData(data) {
        console.log("I am in displayWeatherData");
        console.log(data);
        const { name, main, weather } = data;
        console.log(cityName);
        cityName.textContent = name;
         Temperature.textContent = `Temperature : ${main.temp}`;
         Description.textContent = `Weather : ${weather[0].description}`;
        console.log("name changed");
        console.log(cityName);
        weatherInfo.classList.remove('hidden');
        errorMsg.classList.add('hidden');
       
    }

    function displayErrormsg()
    {
        console.log("I am in displayError()");
        // weatherInfo.classList.remove('hidden');
        errorMsg.classList.remove("hidden");
        console.log("I am still in error");
    }
});
