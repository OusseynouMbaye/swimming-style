<template>
  <header>
    <nav class="app">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.app {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
}
.app a {
  text-decoration: none;
  color: #01b2f8;
}
.app a:hover {
  color: #fff;
  background-color: #557adf;
  border-radius: 5px;
  opacity: 0.8;
}
</style>
