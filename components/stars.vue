<template>
  <div class="sky">
    <transition-group name="star">
      <span v-for="spot in spots" class="star" :style="spot.style" :key="spot.key" />
    </transition-group>
  </div>  
</template>

<script>
const STAR_LIFETIME = 100
const STAR_BASE_TIME = 5000
const MAX_STARS = 200
let currentKey = 0

export default {
  data() {
    return {
      currentStep: 0,
      spots: [],
      expiration: {},
      creation: {}
    }
  },

  methods: {
    expire(time, spot) {
      if (!this.expiration[time]) {
        this.expiration[time] = []
      }

      this.expiration[time].push(spot)
    },
    schedule(time) {
      if (!this.creation[time]) {
        this.creation[time] = 1
      } else {
        this.creation[time] += 1
      }
    },
    add () {
      const position = {
        x: Math.round(Math.random() * 100),
        y: Math.round(Math.random() * 100)
      }
      currentKey += 1
      const spot = {
        style: {
          left: `${position.x}vw`,
          top: `${position.y}vh`,
          backgroundColor: `rgba(255, 203, 0, ${Math.random()})`
        },
        key: currentKey
      }

      this.spots.push(spot)

      const expirationTime = this.currentStep + Math.round(Math.random() * STAR_LIFETIME * STAR_BASE_TIME / 16)
      this.expire(expirationTime, spot)

      const creationTime = this.currentStep + Math.round(Math.random() * STAR_BASE_TIME * (this.spots.length > MAX_STARS ? STAR_LIFETIME : 1) / 16)
      this.schedule(creationTime)
    },
    step() {
      if (this.expiration[this.currentStep]) {
        this.spots = this.spots.filter(spot => !this.expiration[this.currentStep].includes(spot))
        delete this.expiration[this.currentStep]
      }

      if (this.creation[this.currentStep]) {
        for(let i=0; i < this.creation[this.currentStep]; i++) {
          this.add()
        }
      }

      this.currentStep += 1
      requestAnimationFrame(this.step)
    }

  },

  mounted () {
    this.add()
    this.step()
  }
}
</script>

<style lang="scss" scoped>
.sky {
  pointer-events: none;
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
