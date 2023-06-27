<template>
  <div class="post">
    <h1>{{ title }}</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`"> {{ post.title }}</RouterLink>
      </li>
    </ul>

    <textarea v-autofocus />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

const title = ref('Post title')

const posts = reactive([
  { id: 'id1', title: 'Post 1' },
  { id: 'id2', title: 'Post 2' },
  { id: 'id3', title: 'Post 3' }
])
</script>

<style scoped>
.post {
  /* border: 1px solid rgb(11, 180, 34); */
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  /* // center card */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
