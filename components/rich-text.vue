<template>
  <div class="cms-content" :class="className" v-html="html" />
</template>

<script>
  import PrismicDOM from 'prismic-dom'
  import linkResolver from '~/util/linkResolver'

  export default {
    name: 'RichText',
    props: {
      content: {
        type: Array,
        required: true,
      },
      className: {
        type: String,
        required: false
      }
    },

    computed: {
      html() {
        return PrismicDOM.RichText
          .asHtml(this.content, linkResolver)
          .replace(/<a([^>]*)>/g, (match, group) => {
            return `<a${group} onclick="return goto(this)">`
          })
      },
    },

    mounted () {
      if (window) {
        window.goto = element => {
          if (element.rel !== 'noopener') {
            const href = element.getAttribute('href')
            if (href.match(/^https?:\/\//)) {
              return true
            }

            this.$router.push(href)
            return false
          }
        }
      }
    }
  }
</script>