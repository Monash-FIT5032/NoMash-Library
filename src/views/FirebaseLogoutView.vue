<template>
    <h1>Logout</h1>
    <p><button @click="logout">Logout via Firebase</button></p>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth"

const auth = getAuth()

const logout = () => {
    signOut(auth)
        .then(() => {
            console.log("Firebase Logout Successful!")
            console.log(auth.currentUser)// Redirect to the login page after logout
        })
        .catch((error) => {
            console.log("Logout error: ", error.message)
        })
}
</script>