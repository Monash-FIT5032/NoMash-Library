<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <!-- Home Link -->
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            Home (Week 7)
          </router-link>
        </li>

        <!-- About Link -->
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">
            About
          </router-link>
        </li>

        <!-- Contact Us Link -->
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" active-class="active">
            Contact Us
          </router-link>
        </li>

        <!-- Firebase Login Link -->
        <li class="nav-item">
          <router-link to="/firelogin" class="nav-link" active-class="active">
            Firebase Login
          </router-link>
        </li>

        <!-- Add Book Link -->
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">
            Add Book
          </router-link>
        </li>

        <!-- Firebase Register Link -->
        <li class="nav-item">
          <router-link to="/fireregister" class="nav-link" active-class="active">
            Firebase Register
          </router-link>
        </li>

        <!-- Get Book Count Link -->
        <li class="nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active">
            Get Book Count
          </router-link>
        </li>

        <!-- Get Weather Link (New) -->
        <li class="nav-item">
          <router-link to="/GetWeather" class="nav-link" active-class="active">
            Get Weather
          </router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'BHeader'
}
</script>
