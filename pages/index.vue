<template>
  <div class="center">
    <div>
      <div>
        <h1 class="title">galerie goldig</h1>
        <div class="address">
          <span>malplaquetstraße 42</span>
          <span class="middot">&middot;</span>
          <span>13347 berlin</span>
        </div>
      </div>
      <div class="links">
        <a href="https://www.facebook.com/goldig.gallery/" target="_blank">
          <i class="fab icon fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/goldig.gallery/" target="_blank">
          <i class="fab icon fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@mixin from($width) {
  @media only screen and (min-width: #{$width}px) {
    @content
  }
}

.title {
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  color: rgba(255,203,0,1);
  font-family: 'Arvo', serif;
  font-size: 40px;

  @include from(800) {
    font-size: 80px;
    margin-top: -20vh;
  }
}

.address {
  text-align: center;
  font-size: 24px;
  color: rgba(255,203,0,1);
  font-family: 'Arvo', serif;
}

.middot {
  margin: 0 10px;
}

.center {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.links {
  display: flex;
  justify-content: space-between;

  font-size: 60px;
  margin-top: 10vh;
  @include from(800) {
    margin-top: 20vh;
    font-size: 120px;
  }

  .icon {  
    font-size: 120px;
    color: white;
    padding: 30px;
    border-radius: 20px;

    &:hover {
      color: rgb(30, 30, 30);
      background: rgb(2,0,36);
      background: linear-gradient(146deg, rgba(2,0,36,1) 0%, rgba(255,203,0,1) 0%, rgba(255,235,168,1) 49%, rgba(255,190,0,1) 100%);
    }
  }
}

</style>