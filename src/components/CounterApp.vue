<template>
  <div>
    <h1>Counter</h1>
    <div class="counterDiv">
      <button @click="counterStore.decrementCount">-</button>
      <p>{{ counterStore.count }}</p>
      <button @click="counterStore.incrementCount($event)">+</button>
      <button @click="counterStore.incrementCountPlus2(2, $event)">++</button>
    </div>
    <p>
      The number {{ counterStore.count }} is {{ counterStore.isOddOrEven }} and her double is
      {{ counterStore.doubleCount }}
    </p>

    <!-- <input v-model="title" type="text" /> -->
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
// hooks
import { watch } from 'vue'

const counterStore = useCounterStore()
// const title = ref('Counter')

watch(
  () => counterStore.count,
  (newCount) => {
    // console.log(`newCount: ${newCount}, oldCount: ${oldCount}`)
    if (newCount === 20) {
      alert('You have reached 20')
    }
  }
)
</script>

<style scoped>
.counterDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.counterDiv button {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgb(11, 180, 34);
  background-color: rgb(11, 180, 34);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
}
.counterDiv p {
  font-size: 1.5rem;
  cursor: pointer;
  animation: ride 1s ease-in-out infinite alternate;
}

@keyframes ride {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
