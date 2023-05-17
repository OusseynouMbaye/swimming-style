<template>
  <div v-if="style">
    <h2>{{ style.name }}</h2>
    <p>{{ style.description }}</p>
  </div>
</template>

<script lang="ts" setup>
import SwimmingStyleService from '@/Services/SwimmingStyleService.js'
import { onMounted, ref } from 'vue'

const props = defineProps({
  id: {
    type: Number || String,
    required: true
  }
})

const style = ref()

const getSwimmingStyleById = async () => {
  SwimmingStyleService.getSwimmingStyleById(props.id)
    .then((response) => {
      //   console.log(response.data)
      style.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

onMounted(getSwimmingStyleById)
</script>
