<template>
  <main>
    <h1>SwimmingStyleCard</h1>

    <div class="grid">
      <SwimmingStyleCard v-for="style in styles" :key="style" :style="style" />
    </div>
  </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SwimmingStyleCard from '@/components/SwimmingStyleCard.vue'
import SwimmingStyleService from '@/Services/SwimmingStyleService'

// import freeStyle from '../assets/img/Freestyle_Stroke.png'
// import backstroke from '../assets/img/backstroke.png'
// import breaststroke from '../assets/img/breaststroke.png'
// import butterfly from '../assets/img/butterfly.png'

const styles = ref([])
// const styles = reactive({ values: [] })

const getSwimmingStyles = async () => {
  SwimmingStyleService.getAllSwimmingStyles()
    .then((response) => {
      // console.log(response.data)
      styles.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

onMounted(getSwimmingStyles)
</script>

<style lang="css">
h1 {
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
}
</style>

<!-- axios
.get('https://my-json-server.typicode.com/OusseynouMbaye/swimming-style/styles')
.then((response) => {
  console.log(response.data)
  styles.values = response.data
} -->

<!-- fetch('https://my-json-server.typicode.com/OusseynouMbaye/swimming-style/styles')
    .then((response) => {
      // console.log(response.json())
      styles.values = response.json()
    })
    .then((data) => {
      styles.values = data
    })
    .catch((error) => {
      console.log(error)
    }) -->
