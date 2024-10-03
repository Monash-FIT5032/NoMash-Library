<script setup lang="ts">
import { isAuthenticated, logout } from '@/router/authentication';    
</script>

<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Home (Week 5)</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/FirebaseLogin" class="nav-link" active-class="active">FireBaseLogin</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/getBookCount" class="nav-link" active-class="active">GetBookCount</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active">Count Book API</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/GetAllBookAPI" class="nav-link" active-class="active">Get All Book API</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active">Get Weather</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/FirebaseRegister" class="nav-link" active-class="active">FirebaseRegister</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/FirebaseLogout" class="nav-link" active-class="active">FirebaseLogout</router-link>
        </li>
       
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">AddBook</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/deletebook" class="nav-link" active-class="active">DeleteBook</router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to="/updatebook" class="nav-link" active-class="active">UpdateBook</router-link>
        </li>
        <li v-if="isAuthenticated" class="nav-item">
          <router-link to="" class="nav-link" @click="logout">Logout</router-link>
        </li>
        
      </ul>
    </header>
  </div>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
