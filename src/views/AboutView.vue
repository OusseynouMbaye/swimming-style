<template>
  <div>
    <h3>About</h3>
    <div>{{ dataTitle }}</div>

    <h2>{{ data.text }}</h2>
    <div>
      <input v-if="data.text" v-model="data.text" type="text" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// Non-reactive dataTitle
const dataTitle: string = 'This is an Non reactive dataTitle'

const data = reactive({
  text: 'This is an post page',
  description: 'This is a description'
})
</script>
