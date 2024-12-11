<template>
  <div>
    <h1>Create an Account</h1>
    <p>
      <input type="text" placeholder="Email" v-model="email" required />
    </p>
    <p>
      <input type="password" placeholder="Password" v-model="password" required />
    </p>
    <p>
      <button @click="register">Save to Firebase</button>
    </p>
    <p v-if="error">{{ error }}</p> <!-- Display error message if any -->
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
  if (!email.value || !password.value) {
    error.value = "Email and password are required!";
    return;
  }

  const auth = getAuth();
  try {
    // Create the user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log("Registration successful:", userCredential.user); // Log the user information

    alert("User Registered Successfully!");
    
    // Redirect to login page after successful registration
    router.push("/firelogin");
  } catch (err) {
    console.error("Error during registration:", err.message); // Log error in console
    error.value = err.message; // Show error in UI
  }
};
</script>

<style scoped>
/* Add any styles needed for the registration form */
</style>
