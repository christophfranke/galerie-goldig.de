<template>
  <div class="carousel">
    <client-only>
      <carousel :per-page="primary.images_per_page || 1" :navigation-enabled="true" :pagination-enabled="false" :adjustable-height="true" :loop="true">
        <slide v-for="(item, index) in items" :key="index">
          <div class="slide">
            <PrismicImage :image="item.image" class="image" />
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import components from '@/components'
export default {
  name: 'FotoCarousel',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '@/style/imports';

.VueCarousel-navigation-button {
  color: $bright !important;
}
</style>

<style lang="scss" scoped>
.carousel {
  width: calc(50vw + 20px);
  margin: 0 auto;
}

.image {
  width: calc(50vw - 16px);
}
</style>