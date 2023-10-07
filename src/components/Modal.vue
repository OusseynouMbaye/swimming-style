<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h3>This is a modal</h3>
      <slot />
      <button>Close modal</button>
    </div>
  </teleport>
</template>

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
