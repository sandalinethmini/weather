const axios = require('axios');

const apiKey = 'weather'; // Replace with your actual API key

async function getWeather(city) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherData = response.data;
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

module.exports = { getWeather };
