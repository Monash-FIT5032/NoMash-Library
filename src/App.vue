<script setup>
import BHeader from './components/BHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <BHeader />
  </header>

  <main>
    <!-- The router-view will dynamically load the component based on the route -->
    <router-view />
  </main>
</template>

