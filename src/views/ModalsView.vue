<template>
  <div class="modals">
    <h2>Modals</h2>
    <button @click="showModal = true">Show modal</button>
    <Modal v-model="showModal" @closeModal="showModal = false" title="My Modal title (via props)">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex deleniti in nobis
        doloremque inventore voluptates officiis expedita voluptatum est magni dolor molestias.
        Neque quia quis eos nostrum ad. Eos?
      </p>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)
</script>
