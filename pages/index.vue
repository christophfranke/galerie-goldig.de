<template>
  <div class="main">
    <div class="fullscreen" :style="backgroundStyle">
      <div class="top-bar">
        <nuxt-link to="/" class="title"><h1>goldig</h1></nuxt-link>
        <div class="social-media">
          <a href="https://www.facebook.com/goldig.gallery/" target="_blank">
            <i class="fab icon fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/goldig.gallery/" target="_blank">
            <i class="fab icon fa-instagram"></i>
          </a>
        </div>
      </div>

      <div class="exhibition" v-if="exhibition">
        <nuxt-link :to="exhibition.url" class="link">
          <h2 class="title">{{ text(exhibition.title) }}</h2>
          <div class="date">
            <Date :date="exhibition.start" /> – <Date :date="exhibition.end" />
          </div>
          <img class="image" :src="exhibition.image.small.url" />
          <div class="artist">Ausstellung von {{ text(exhibition.artist) }}</div>
        </nuxt-link>
      </div>
    </div>
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
  name: 'Home',
  layout: 'home',
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
    exhibition() {
      return this.$store.getters.currentExhibition
    },
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.page.image.url})`
      }
    }
  },

  methods: {
    text
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

$transparent-background: rgba($dark, 0.8);

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
  background-color: $transparent-background;
  display: flex;
  align-items: center;

  .title {
    text-decoration: none;
    margin: 0 auto 0 0;
    display: block;

    h1 {
      @include gold-text;
      font-size: 40px;
    }

    &:hover {
      text-transform: uppercase;
    }
  }

  .icon {
    @include social-media-icon;
  }
}



.exhibition {
  padding: 40px 60px;
  background-color: $transparent-background;
  position: absolute;
  bottom: 5vh;
  left: 5vw;
  border-radius: 10px;

  a {
    text-decoration: none;
  }

  .date {
    margin-bottom: 15px;
  }

  .image {
    width: Max(30vw, 30vh);
    @include from(m) {
      width: Max(25vw, 25vh);
    }
    @include from(l) {
      width: Max(20vw, 20vh);
    }
  }

  .artist {
    margin-top: 15px;
  }

  .link:hover {
    .title, .date, .artist {
      @include gold-text;
    }
  }
}
</style>
