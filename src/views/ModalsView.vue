<template>
  <div class="modals">
    <h2>Modals</h2>
    <button @click="showModal = true">Show modal</button>
    <Modal v-if="showModal">
      <template v-slot:title> This is a modal</template>
      <slot />
    </Modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)
</script>
