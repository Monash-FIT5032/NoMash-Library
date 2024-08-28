<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input v-model="username" id="username" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const username = ref('')
  const password = ref('')
  const errorMessage = ref('')
  const hardcodedUsername = 'admin'
  const hardcodedPassword = 'password123'
  const isAuthenticated = ref(false)
  
  const login = () => {
    if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
      isAuthenticated.value = true
      router.push('/about')
    } else {
      errorMessage.value = 'Invalid username or password'
    }
  }
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>