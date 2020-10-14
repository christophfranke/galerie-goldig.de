<template>
  <div>
    <div class="sky">
      <transition-group name="star">
        <span v-for="spot in spots" class="star" :style="spot.style" :key="spot.key" />
      </transition-group>
    </div>
    <Nuxt />
  </div>
</template>

<script>
const STAR_LIFETIME = 150
const STAR_BASE_TIME = 2000
const MAX_STARS = 200

export default {
  data() {
    return {
      spots: []
    }
  },

  methods: {
    add () {
      const position = {
        x: Math.round(Math.random() * 100),
        y: Math.round(Math.random() * 100)
      }
      const spot = {
        style: {
          left: `${position.x}vw`,
          top: `${position.y}vh`,
          backgroundColor: `rgba(255, 203, 0, ${Math.random()})`
        },
        key: `${position.x}x${position.y}`
      }

      this.spots.push(spot)

      setTimeout(() => {
        this.spots = this.spots.filter(s => s !== spot)
      }, Math.random() * STAR_LIFETIME * STAR_BASE_TIME)

      setTimeout(() => {
        this.add()
      }, Math.random() * STAR_BASE_TIME * (this.spots.length > MAX_STARS ? STAR_LIFETIME : 1))
    }
  },

  mounted () {
    this.add()
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: rgb(30, 30, 30);
}
</style>

<style lang="scss" scoped>
.sky {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  animation: rotation 1800s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.star {
  display: block;
  position: absolute;
  width: 1px;
  height: 1px;
  background-color: gold;
}

.star-enter-active,
.star-leave-active {
  transition: opacity 6s;
}
.star-enter,
.star-leave-to {
  opacity: 0;
}
</style>