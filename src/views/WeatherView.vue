<template>
    <div class="container">
        <div class="header">
          <h1>WEATHER APP</h1>
          <div class="search-bar">
            <input 
              type="text"
              v-model="city"
              placeholder="Enter city name"
              class="search-input"
            />
            <button @click="searchByCity" class="search-button">Search</button>
          </div>
        </div>

        <!-- If weatherData exists, display the information -->
        <div v-if="weatherData">
          <h2>
              {{ weatherData.name }}, {{ weatherData.sys.country }}
          </h2>
          <div>
            <!-- Display weather icon -->
            <img :src="iconUrl" alt="Weather Icon" />
            <p>{{ temperature }} °C</p>
          </div>
          <span>{{ weatherData.weather[0].description }}</span>
        </div>
    </div>
</template>

<script>
import axios from "axios";

const apikey = "63482c7bdcc40e7f80e6e46c0e119e94"; // Replace with your actual API key

export default {
    name: "App",
    data() {
        return {
            city: "", // City name input from user
            weatherData: null, // Weather data returned from API
        };
    },
    computed: {
        temperature() {
            return this.weatherData
                ? Math.floor(this.weatherData.main.temp)  // The API is set to metric (Celsius)
                : null;
        },
        iconUrl() {
            return this.weatherData
                ? `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`
                : null;
        },
    },
    methods: {
        async searchByCity() {
            if (!this.city) return;

            // Create the API URL for searching by city name
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}&units=metric`;

            try {
                const response = await axios.get(url);
                this.weatherData = response.data; // Store the weather data in the component's state
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        },
    },
};
</script>

<style scoped>
/* Add some basic styling */
.container {
    width: 50%;
    margin: auto;
    text-align: center;
}

.search-bar {
    margin: 20px 0;
}

.search-input {
    padding: 10px;
    font-size: 16px;
}

.search-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
}

.search-button:hover {
    background-color: darkblue;
}
</style>