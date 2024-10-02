<template>
    <div>
      <h1>Weather Information</h1>
      <!-- Input field for entering city -->
      <input type="text" v-model="city" placeholder="Enter city name" />
      <!-- Button to search by city -->
      <button @click="searchByCity">Search</button>
  
      <!-- Weather Data Display -->
      <main v-if="weatherData">
        <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </main>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  // Replace this with your actual OpenWeatherMap API key
  const apikey = "Your_OpenWeatherMap_API_Key";
  
  export default {
    data() {
      return {
        city: "",
        weatherData: null,
      };
    },
    computed: {
      // Convert temperature from Kelvin to Celsius
      temperature() {
        return this.weatherData ? Math.floor(this.weatherData.main.temp - 273.15) : null;
      },
      // Get weather icon URL
      iconUrl() {
        return this.weatherData
          ? `http://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
          : null;
      },
    },
    methods: {
      // Fetch weather by city
      async searchByCity() {
        if (!this.city) {
          alert("Please enter a city");
          return;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
        await this.fetchWeatherData(url);
      },
      // Fetch weather data from API
      async fetchWeatherData(url) {
        try {
          const response = await axios.get(url);
          this.weatherData = response.data;
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      },
    },
  };
  </script>
  
  <style>
  /* You can add custom styling here */
  </style>
  