<template>
  <div class="about">
    <h1>About Our Library</h1>
    <p>Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
    <button @click="logout">Logout</button> <!-- Logout button -->
  </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router'
import { store } from '../store' // Import global state

const router = useRouter()

// Logout function to reset authentication state and navigate to login page
const logout = () => {
  store.isAuthenticated = false  // Reset the authentication state
  router.push('/login')          // Redirect to the login page
}
</script>
  
<style>
.about {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>