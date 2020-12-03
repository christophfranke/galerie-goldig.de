<template>
  <div>
    <img class="image" :src="exhibition.image.url" v-if="exhibition.image.url" />
    <div class="main">
      <div class="left">
        <h1 class="title">{{ text(exhibition.title) }}</h1>
        <div class="date">
          <Date :date="exhibition.start"/> – <Date :date="exhibition.end" />
        </div>
        <div class="artist">{{ text(exhibition.artist) }}</div>
      </div>
      <div class="right">
        <template v-for="(slice, index) in slices">
          <Slice :slice="slice" :key="index" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import components from '@/components'
import slices from '@/slices'
import text from '@/util/text'

export default {
  name: 'Exhibition',
  components: {
    ...components,
    ...slices
  },

  computed: {
    slug() {
      return this.$router.currentRoute.params.slug
    },
    exhibition() {
      return this.$store.getters.exhibition(this.slug)
    },
    slices() {
      return this.$store.getters.slices(this.exhibition)
    },
  },

  methods: {
    text
  },

  asyncData({ params, store, error }) {
    if (!store.getters.exhibition(params.slug)) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/imports';

.image {
  width: calc(100vw - 16px);
  border: 8px solid $bright;
}

.main {
  padding: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.title {
  font-size: 80px;
}

.date {
  margin-top: 30px;
  font-size: 20px;
}

.artist {
  font-size: 30px;
  font-style: italic;
}

.left, .right {
  width: calc(100vw - 80px);
  @include from(l) {
    width: calc(50vw - 60px);
  }
  // background-color: pink;
  // outline: 1px solid black;
}

.right {
  margin-top: 80px;
  @include from(l) {
    margin-top: 0;
  }
}
</style>