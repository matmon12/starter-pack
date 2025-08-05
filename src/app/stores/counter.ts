import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)
  const doubleCount = computed<number>(() => count.value * 2)
  const incrementCount = (): number => {
    return count.value++
  }

  return {
    count,
    doubleCount,
    incrementCount,
  }
})

if(import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
