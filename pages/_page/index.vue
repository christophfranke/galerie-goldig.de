<template>
  <div class="main">
    <template v-for="(slice, index) in slices">
      <Slice :slice="slice" :key="index" />
    </template>
  </div>
</template>

<script>
import components from '@/components'
import slices from '@/slices'

export default {
  name: 'Page',
  components: {
    ...components,
    ...slices
  },

  computed: {
    slug() {
      return this.$router.currentRoute.params.page
    },
    page() {
      return this.$store.getters.page(this.slug)
    },
    slices() {
      return this.$store.getters.slices(this.slug)
    },
  },

  asyncData({ params, store, error }) {
    if (!store.getters.page(params.page)) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
