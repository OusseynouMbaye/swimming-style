<template>
  <div class="swimming-style-card">
    <img :src="style.image" :alt="style.name" />
    <h2>{{ style.name }}</h2>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  style: {
    type: Object,
    required: true
  }
})
</script>

<style lang="css" scoped>
.swimming-style-card {
  border: 1px solid rgb(11, 180, 34);
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  /* // center card */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.swimming-style-card img {
  width: 100%;
  max-width: 300px;
  height: auto;
}
</style>
