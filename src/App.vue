<template>
  <h1>You did it!</h1>
  <p>
    Visit <a class="test" href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org </a> to
    read the
  </p>
</template>

<script setup lang="ts">
const test: number = 2;
console.log(test)

</script>

<style scoped lang="scss">
.test {
  &-test {
    display: block;
  }
}
</style>
