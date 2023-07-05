<template>
  <Counter />
  <div>
    <input ref="myTestRef" v-model="myTest" type="text" v-autofocus class="custom-input" />
  </div>
</template>

<script lang="ts" setup>
/*
    Imports
*/
import Counter from '@/components/CounterApp.vue'
import { onMounted, ref, watch } from 'vue'

import { vAutofocus } from '@/directives/vAutofocus'

/*
ref() : is a function that takes an initial value and returns a reactive and mutable ref object.
*/
const myTest = ref('This is a test')

const myTestRef = ref(null)

onMounted(() => {
  // console.log(`myTestRef: ${myTestRef.value.offsetWidth} px wide!`)
}),
  /*
watch() : is a function that takes a source and a callback. The source can be a ref, reactive, computed, or a function that returns a value. The callback will be called whenever the source value changes.
*/

  watch(myTest, (newValue, oldValue) => {
    // console.log('myTest changed from', oldValue, 'to', newValue)
  })

/*
Computed properties : are functions that return a value based on other reactive properties.
*/

/*
Methods : are functions that can be called from the template.
*/

/*
Directives : are a way for you to attach some behavior to an element in the DOM.

const vAutofocus = {
  mounted(el: any) {
    el.focus()
  }
}*/
</script>

<style>
/* .custom-input {
  font-family: 'Segoe UI';
  font-weight: bold;
  font-size: 16px;
  color: blue;
  background-color: green;
  height: 30px;
  width: 200px;
} */
</style>
