<template>
  <div>
    <h1>Firebase Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const login = async () => {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        alert('Logged in successfully');
        
        // Log current user to the console
        console.log(auth.currentUser);
      } catch (error) {
        console.error('Error logging in:', error.message);
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>
