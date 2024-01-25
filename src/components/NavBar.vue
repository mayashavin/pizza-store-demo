<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    </nav>
    <Cart />
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import Cart from './Cart.vue';
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

nav {
    display: inline-flex;
    gap: 30px;
    justify-content: center;
}

.router-link-active, .router-link-exact-active {
    text-decoration: underline;
}
</style>
