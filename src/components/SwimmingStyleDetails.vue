<template>
  <div class="swimmingDetails" v-if="style">
    <h2>{{ style.name }}</h2>
    <p>{{ style.description }}</p>
  </div>
</template>

<script lang="ts" setup>
import SwimmingStyleService from '@/Services/SwimmingStyleService'
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

<style lang="css" scoped>
.swimmingDetails {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border: 1px solid rgb(11, 180, 34);
  border-radius: 5px;
  background-color: rgb(11, 180, 34);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
}

.swimmingDetails p {
  font-size: 1rem;
  font-weight: normal;
  text-transform: none;
}

.swimmingDetails p:hover {
  animation: ride 1s ease-in-out infinite alternate;
}
/* create animation for p left to right and up to down */
@keyframes ride {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(10px, 10px);
  }
}
</style>
