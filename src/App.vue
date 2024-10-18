<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BHeader from './components/BHeader.vue';
// import CountBookAPI from './views/CountBookAPI.vue';

// Access the current route
const route = useRoute();

// Define the computed property
const showHeader = computed(() => {
  if (route.name === 'CountBookAPI' || route.name === 'GetAllBookAPI') {
    return false;
  }
  return true;
});
</script>

<template>
  <div class="main-container">
    <!-- Conditionally display the header based on showHeader -->
    <header v-if="showHeader">
      <BHeader />
    </header>
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>
<style scoped>

/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
