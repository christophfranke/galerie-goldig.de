<template>
  <footer>
    <RichText :content="footer.content" />
    <nuxt-link :to="linkResolver(link.page)" v-for="link in footer.links">
      {{ text(page(link.page.slug).title) }}
    </nuxt-link>
  </footer>
</template>

<script>
import components from '@/components'
import linkResolver from '@/util/linkResolver'
import text from '@/util/text'

export default {
  name: 'Footer',
  components,

  computed: {
    footer() {
      console.log(this.$store.getters.footer.data)
      return this.$store.getters.footer.data
    }
  },

  methods: {
    page (slug) {
      return this.$store.getters.page(slug)
    },
    linkResolver,
    text
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/imports';

footer {
  padding: 20px;
  text-align: center;
  color: $dark;
  background: $gold-background;
  font-size: 20px;
}

a, a:visited {
  color: $dark;
}
</style>