<template>
  <div class="main">
    <h1 class="title">{{ text(page.title) }}</h1>
    <template v-for="(slice, index) in slices">
      <Slice :slice="slice" :key="index" />
    </template>
  </div>
</template>

<script>
import components from '@/components'
import slices from '@/slices'
import text from '@/util/text'

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
      return this.$store.getters.slices(this.page)
    },
  },

  methods: {
    text
  },

  asyncData({ params, store, error }) {
    if (!store.getters.page(params.page)) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 20px;
  margin: 20px auto 100px auto;
  width: 50vw;
}

.title {
  margin-bottom: 40px;
}
</style>