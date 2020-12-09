<template>
  <img :width="image.dimensions.width" :height="image.dimensions.height" :src="image.url" v-if="image.url" :class="className" :alt="image.alt">
</template>

<script>
  import PrismicDOM from 'prismic-dom'

  export default {
    name: 'PrismicImage',
    props: {
      image: {
        type: Object,
        required: true,
      },
      className: {
        type: String,
        default: ''
      }
    },
  }
</script>
