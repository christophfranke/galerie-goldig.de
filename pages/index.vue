<template>
  <div class="main">
    <div class="fullscreen" :style="backgroundStyle">
      <Header class="top-bar" />

      <div class="exhibition" v-if="exhibition">
        <nuxt-link :to="exhibition.url" class="link">
          <h2 class="title">{{ text(exhibition.title) }}</h2>
          <div class="date">
            <Date :date="exhibition.start" /> – <Date :date="exhibition.end" />
          </div>
          <div class="image">
            <img :src="exhibition.thumbnail.url" />
          </div>
          <div class="artist">{{ text(exhibition.artist) }}</div>
        </nuxt-link>
      </div>

      <div class="goldig" v-else>
        <h1>GOLDIG</h1>
      </div>
    </div>

    <template v-for="(slice, index) in slices">
      <Slice :slice="slice" :key="index" />
    </template>
  </div>
</template>

<script>
import Header from '@/components/header'
import components from '@/components'
import slices from '@/slices'
import text from '@/util/text'

export default {
  name: 'Home',
  layout: 'home',
  components: {
    ...components,
    ...slices,
    Header
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
  background-color: $transparent-background;
}



.exhibition {
  padding: 40px 60px;
  background-color: $transparent-background;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  top: Max(17vh, 100px);
  @include from(m) {
    top: 25vh;
  }

  a {
    text-decoration: none;
  }

  .date {
    margin-bottom: 15px;
  }

  .image {
    width: auto;
    height: 45vh;
    padding: 8px 0;
    background-color: $bright;

    img {
      margin-top: -8px;
      display: block;
      border: 8px solid transparent;
    }
  }

  .artist {
    margin-top: 15px;
  }

  .link:hover {
    .title, .date, .artist {
      @include gold-text;
    }
    .image {
      background: $gold-background;
    }
  }
}

.goldig {
  position: absolute;
  left: 50%;
  top: 20vh;
  transform: translateX(-50%);

  background: $transparent-background;
  width: 50vw;
  height: 70vh;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 120px;
    @include gold-text;
  }
}
</style>
