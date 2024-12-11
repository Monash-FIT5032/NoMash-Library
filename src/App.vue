<script setup>
import BHeader from './components/BHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app" class="container">
    <header>
      <BHeader />
    </header>

    <main>
      <!-- The router-view will dynamically load the component based on the route -->
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

/* You can add more styles here if needed to ensure consistent look */
</style>
