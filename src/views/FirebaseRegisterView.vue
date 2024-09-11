<template>
  <div>
    <h1>Create an Account</h1>
    <p>
      <input type="text" placeholder="Email" v-model="email" />
    </p>
    <p>
      <input type="password" placeholder="Password" v-model="password" />
    </p>
    <p>
      <button @click="register">Save to Firebase</button>
    </p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();

const register = async () => {
  const auth = getAuth();
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("User Registered Successfully!");
    router.push("/firelogin");  // Redirect to login page after successful registration
  } catch (err) {
    error.value = err.message;
  }
};
</script>

<style scoped>
/* Add any styles needed for the registration form */
</style>
