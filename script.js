document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'ec19794572588d9e5ab49e9230fc0ce3'; // Make sure to replace with your actual API key

    // Function to fetch weather data
    function fetchWeather(cityName) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Weather data not found.');
                }
                return response.json();
            })
            .then(data => {
                displayWeatherData(data);
            })
            .catch(error => {
                console.error('Error fetching weather:', error);
            });
    }

    // Function to display weather data
    function displayWeatherData(data) {
        const currentWeatherDiv = document.getElementById('currentWeather');
        currentWeatherDiv.innerHTML = `
            <p>Temp: ${data.main.temp}°F</p>
            <p>Wind: ${data.wind.speed} MPH</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    }

    // Search button event listener
    document.getElementById('searchButton').addEventListener('click', function() {
        const cityInput = document.getElementById('cityInput');
        const cityName = cityInput.value.trim();

        if (cityName) {
            fetchWeather(cityName);
        } else {
            console.error('Please enter a city name.');
        }
    });
});

