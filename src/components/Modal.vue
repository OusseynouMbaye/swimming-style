<template>
  <teleport to=".modals-container">
    <div class="modal" v-if="modelValue">
      <h3>{{ title }}</h3>
      <slot />
      <button @click="handleButtonClick">Close modal</button>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },

  title: {
    type: String,
    default: 'No title Specified'
  }
})

const emit = defineEmits(['closeModal'])

const handleButtonClick = () => {
  emit('closeModal')
}
</script>

<style scoped>
.modal {
  background: beige;
  border: 1px solid rgb(0, 110, 77);
  border-radius: 5px;
  padding: 20px;
  margin-top: 10px;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}
</style>
