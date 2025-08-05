<template>
  <div class="home">Home</div>
  <Button @click="counterStore.incrementCount()">+</Button>
  {{ count }}
  {{ doubleCount }}
  <div v-intersection="binding">Test</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/app/stores/counter'
import { storeToRefs } from 'pinia'
import type { IntersectionBinding } from '@/app/directives/intersection/types'

const counterStore = useCounterStore()

const { count, doubleCount } = storeToRefs(counterStore)

const binding: IntersectionBinding = {
  active: () => fetchData()
}

const fetchData = () => {
  console.log('success')
}
</script>

<style lang="scss" scoped></style>
