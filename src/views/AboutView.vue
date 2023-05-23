<template>
  <div class="about">
    <h2>{{ data.title }}</h2>
    <div>
      <input v-if="data.title" v-model="data.title" type="text" />
    </div>
    <div>{{ dataTitle }}</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
// const title = ref('This is an about page')

// Non-reactive dataTitle
const dataTitle: string = 'This is an Non reactive dataTitle'
const data = reactive({
  title: 'This is an about page',
  description: 'This is a description'
})
</script>

<style>
.about {
  /* border: 1px solid rgb(11, 180, 34); */
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  /* // center card */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
