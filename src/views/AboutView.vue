<template>
  <div class="about">
    <h2>{{ title }}</h2>
    <div>
      <input v-if="!title" v-model="title" type="text" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const title = ref('This is an about page')
</script>

<style></style>
