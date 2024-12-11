<template>
    <div class="register">
      <h2>User Registration</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username</label>
          <input v-model="username" type="text" id="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "UserRegister",
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      register() {
        console.log('Registering with', this.username, this.email, this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  