<template>
  <header>
    <nav class="app">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/modals">Modals</RouterLink>
      <RouterLink to="/posts">Posts</RouterLink>
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
  background-color: #1b1e3df2; /* #f1f1f1; */
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
}
.app a {
  text-decoration: none;
  color: #d4dcff;
}
.app a:hover {
  color: #5396e7;
  /* background-color: #5396e7; */
  /* border-radius: 5px; */
  opacity: 0.8;
}
</style>
