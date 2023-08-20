import { computed, nextTick, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const isOddOrEven = computed(() => (count.value % 2 === 0 ? 'even' : 'odd'))

  /* 
  Methods that mutate the store's state should be wrapped inside a `mutate` call.
  */
  function incrementCount(e: MouseEvent) {
    // console.log(e)
    count.value++
  }

  // function incrementCountPlus2(amount: number, e: MouseEvent) {
  //   // console.log(e)
  //   count.value += amount
  //   nextTick(() => {
  //     console.log('count', count.value)
  //   })
  // }

  const incrementCountPlus2Async = async (amount: number, e: MouseEvent) => {
    // console.log(e)
    count.value += amount
    await nextTick()
    console.log('count', count.value)
  }

  function decrementCount() {
    if (count.value === 0) return
    count.value--
  }

  return {
    count,
    decrementCount,
    incrementCount,
    incrementCountPlus2Async,
    doubleCount,
    isOddOrEven
  }
})
