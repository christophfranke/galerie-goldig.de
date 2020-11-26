<template>
  <span>{{ dateString }}</span>
</template>

<script>

const MONTH = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']

export default {
  name: 'Date',
  props: {
    date: {
      type: String,
      required: true
    }
  },

  computed: {
    dateObject () {
      return new Date(this.date)
    },

    dateString() {
      const day = this.dateObject.getDate()
      const month = MONTH[this.dateObject.getMonth()]
      const year = 1900 + this.dateObject.getYear()
      return `${day}. ${month} ${year}`
    }
  }
}
</script>
