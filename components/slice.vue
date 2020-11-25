<template>
  <component :is="component" :items="slice.items" :primary="slice.primary" />
</template>

<script>
import components from '@/components'
import slices from '@/slices'
import sliceResolver from '@/util/sliceResolver'

export default {
  name: 'Slice',
  components: {
    ...components,
    ...slices
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  },

  computed: {
    component() {
      return sliceResolver(this.slice)
    }
  }
}
</script>