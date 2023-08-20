<template>
  <div class="modals">
    <h2>Modals</h2>
    <button @click="showModal = true">Show modal</button>
    <teleport to=".modals-container">
      <div class="modal" v-if="showModal">
        <h3>This is a modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex deleniti in nobis
          doloremque inventore voluptates officiis expedita voluptatum est magni dolor molestias.
          Neque quia quis eos nostrum ad. Eos?
        </p>
        <button @click="showModal = false">Close modal</button>
      </div>
    </teleport>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const showModal = ref(false)
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
