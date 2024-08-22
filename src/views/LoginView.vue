<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h2>Login</h2>
                <form @submit.prevent="handleLogin">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" v-model="formData.username"
                            placeholder="Enter your username" />
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="formData.password"
                            placeholder="Enter your password" />
                    </div>

                    <button type="submit">Login</button>
                </form>

                <p v-if="isAuthenticated">You are logged in!</p>
                <p v-if="loginError" class="error">{{ loginError }}</p>
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import { login, isAuthenticated } from '@/router/authentication';
import router from '@/router';

const formData = ref({
    username: '',
    password: ''
});

const loginError = ref('');

const handleLogin = () => {
    login(formData.value.username, formData.value.password);

    if (isAuthenticated.value) {
        loginError.value = '';
        router.push('/about')
        console.log('Authentication successful');
    } else {
        loginError.value = 'Invalid username or password';
        console.log('Authentication failed');
    }

    // Reset the form fields
    formData.value.username = '';
    formData.value.password = '';
};



</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.error {
    color: red;
    margin-top: 10px;
}
</style>