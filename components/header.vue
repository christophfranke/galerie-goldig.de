<template>
  <header class="header">
    <nuxt-link to="/" class="title">goldig</nuxt-link>
    <nav class="menu">
      <nuxt-link :to="entry.link" v-for="entry in entries">{{ entry.title }}</nuxt-link>
    </nav>
    <div class="social-media">
      <a href="https://www.facebook.com/goldig.gallery/" target="_blank">
        <i class="fab icon fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/goldig.gallery/" target="_blank">
        <i class="fab icon fa-instagram"></i>
      </a>
    </div>
  </header>
</template>

<script>
import text from '@/util/text'
import linkResolver from '@/util/linkResolver'

export default {
  computed: {
    entries () {
      const title = entry => {
        if (entry.title.length > 0) {
          return text(entry.title)
        }

        const page = this.$store.getters.content.find(content => content.id === entry.page.id)
        return text(page.data.title)
      }
      return this.$store.getters.menu.data.pages.map(entry => ({
        title: title(entry),
        link: linkResolver(entry.page)
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/imports';

.header {
  background: $dark;
  padding: 20px;

  display: flex;
  font-size: 40px;
  position: relative;
}

.title {
  @include gold-text;
  margin: 0 auto 0 0;
  &:hover {
    text-transform: uppercase;
  }
}

.menu {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50vw;
  display: flex;

  a {
    margin-right: 15px;
    font-size: 20px;
    &:hover {
      @include gold-text;
    }
  }
}

.icon {
  @include social-media-icon;
}
</style>