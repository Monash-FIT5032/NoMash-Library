<template>
  <div class="login-container">
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input v-model="username" id="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../store' 

const router = useRouter()
const username = ref('')
const password = ref('')
const errorMessage = ref('')
const hardcodedUsername = 'admin'
const hardcodedPassword = 'password123'

const login = () => {
  if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
    store.isAuthenticated = true  
    errorMessage.value = ''  
    router.push('/about')
  } else {
    errorMessage.value = 'Invalid username or password'
  }
}
</script>

<style>
.login-container {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.login {
  display: grid;
  gap: 1rem;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.form-group {
  display: grid;
  gap: 0.5rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>