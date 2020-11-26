<template>
  <header>
    <nuxt-link to="/" class="title">goldig</nuxt-link>
    <div class="social-media">
      <a href="https://www.facebook.com/goldig.gallery/" target="_blank">
        <i class="fab icon fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/goldig.gallery/" target="_blank">
        <i class="fab icon fa-instagram"></i>
      </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/style/imports';

header {
  color: $dark;
  background: $dark;
  padding: 20px;

  display: flex;
  font-size: 40px;
}

.title {
  @include gold-text;
  margin: 0 auto 0 0;
  &:hover {
    text-transform: uppercase;
  }
}

.icon {
  @include social-media-icon;
}
</style>