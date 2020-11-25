<template>
  <div class="container">
    <RichText :content="primary.content" />
  </div>
</template>

<script>
import components from '~/components'

export default {
  name: 'TextBlock',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/imports';
</style>