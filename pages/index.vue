<template>
  <div class="main">
    <div class="fullscreen" :style="backgroundStyle">
      <div class="top-bar">
        <a href="https://www.facebook.com/goldig.gallery/" target="_blank">
          <i class="fab icon fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/goldig.gallery/" target="_blank">
          <i class="fab icon fa-instagram"></i>
        </a>
      </div>
      <div class="bottom-bar" />
    </div>
    <template v-for="(slice, index) in slices">
      <Slice :slice="slice" :key="index" />
    </template>
  </div>
</template>

<script>
import components from '@/components'
import slices from '@/slices'

export default {
  name: 'Home',
  components: {
    ...components,
    ...slices
  },

  computed: {
    slug() {
      return this.$router.currentRoute.params.page
    },
    page() {
      return this.$store.getters.homepage
    },
    slices() {
      return this.$store.getters.slices(this.page)
    },
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.page.image.url})`
      }
    }
  },

  asyncData({ params, store, error }) {
    if (!store.getters.homepage) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/imports';

.fullscreen {
  width: 100wv;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: relative;
}

.top-bar {
  padding: 10px;
  width: calc(100vw - 20px);
  background-color: black;
  text-align: right;
}

.bottom-bar {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: black;
  width: 100vw;
  height: 80px;
}

.icon {
  color: white;
  font-size: 40px;
  margin: 10px;
}
</style>