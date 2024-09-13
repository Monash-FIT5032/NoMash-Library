<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <!-- Other Links -->
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            Home (Week 7)
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">
            About
          </router-link>
        </li>
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

        <!-- New Firebase Register Link -->
        <li class="nav-item">
          <router-link to="/fireregister" class="nav-link" active-class="active">
            Firebase Register
          </router-link>
        </li>
      </ul>
    </header>
  </div>
</template>
