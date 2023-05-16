<template>
  <main>
    <h1>SwimmingStyleCard</h1>

    <div class="grid">
      <SwimmingStyleCard v-for="style in styles" :key="style.id" :style="style" />
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SwimmingStyleCard from '@/components/SwimmingStyleCard.vue'
import freeStyle from '../assets/img/Freestyle_Stroke.png'
import backstroke from '../assets/img/backstroke.png'
import breaststroke from '../assets/img/breaststroke.png'
import butterfly from '../assets/img/butterfly.png'
const styles = ref([
  {
    id: crypto.randomUUID(),
    name: 'Freestyle',
    image: freeStyle,
    stats: {
      speed: 5,
      endurance: 5,
      technique: 5,
      difficulty: 1
    },
    tags: ['crawl', 'freestyle', 'front crawl'],
    description:
      'The front crawl or forward crawl, also known as the Australian crawl or American crawl, is a swimming stroke usually regarded as the fastest of the four front primary strokes. As such, the front crawl stroke is almost universally used during a freestyle swimming competition, and hence freestyle is used metonymically for the front crawl.'
  },
  {
    id: crypto.randomUUID(),
    name: 'Backstroke',
    image: backstroke,
    stats: {
      speed: 3,
      endurance: 3,
      technique: 3,
      difficulty: 3
    },
    tags: ['back', 'backstroke', 'back crawl'],
    description:
      'Backstroke is one of the four swimming styles used in competitive events regulated by FINA, and the only one of these styles swum on the back. This swimming style has the advantage of easy breathing, but the disadvantage of swimmers not being able to see where they are going.'
  },
  {
    id: crypto.randomUUID(),
    name: 'Breaststroke',
    image: breaststroke,
    stats: {
      speed: 2,
      endurance: 2,
      technique: 2,
      difficulty: 5
    },
    tags: ['breast', 'breaststroke', 'frog'],
    description:
      "Breaststroke is a swimming style in which the swimmer is on their chest and the torso does not rotate. It is the most popular recreational style due to the swimmer's head being out of the water a large portion of the time, and that it can be swum comfortably at slow speeds. In most swimming classes, beginners learn either the breaststroke or the freestyle (front crawl) first. At the competitive level, breaststroke is one of the three basic styles swum in competition, along with freestyle and butterfly."
  },
  {
    id: crypto.randomUUID(),
    name: 'Butterfly',
    image: butterfly,
    stats: {
      speed: 1,
      endurance: 1,
      technique: 1,
      difficulty: 5
    },
    tags: ['fly', 'butterfly'],
    description:
      'Butterfly is a swimming stroke swum on the chest, with both arms moving symmetrically, accompanied by the butterfly kick (also known as the "dolphin kick"). While other styles like the breaststroke, front crawl, or backstroke can be swum adequately by beginners, the butterfly is a more difficult stroke that requires good technique as well as strong muscles. It is the newest swimming style swum in competition, first swum in 1933 and originating out of the breaststroke.'
  }
])
</script>

<style lang="css">
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
}
</style>
