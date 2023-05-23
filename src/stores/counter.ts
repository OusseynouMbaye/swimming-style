import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const isOddOrEven = computed(() => (count.value % 2 === 0 ? 'even' : 'odd'))
  function incrementCount(e: MouseEvent) {
    // console.log(e)
    count.value++
  }

  function incrementCountPlus2(amount: number, e: MouseEvent) {
    // console.log(e)
    count.value += amount
  }
  function decrementCount() {
    if (count.value === 0) return
    count.value--
  }

  return { count, decrementCount, incrementCount, incrementCountPlus2, doubleCount, isOddOrEven }
})
