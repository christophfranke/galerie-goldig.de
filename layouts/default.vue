<template>
  <div>
    <Stars />
    <Nuxt />
  </div>
</template>

<script>
import Stars from '@/components/stars'  

export default {
  components: {
    Stars
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: rgb(30, 30, 30);
}
</style>

