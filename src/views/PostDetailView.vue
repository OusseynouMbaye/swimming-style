<template>
  <div class="post-detail">
    <h3>Post details</h3>
    <p>display the content of post with ID of {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div><button type="button" @click="goHomeIn3Second">Go home in 3s</button></div>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script lang="ts" setup>
// useRoute
import { useRoute, useRouter } from 'vue-router'
// au lieu de faire $route.params.id
const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(`the post id is: ${route.params.id}`)
}

const goHomeIn3Second = () => {
  setTimeout(() => {
    router.push('/')
  }, 3000)
}

//$route.params.id
</script>
