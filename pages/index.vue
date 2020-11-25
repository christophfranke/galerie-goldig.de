<template>
  <div class="center">
    <div>
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
@import '@/style/imports';

.center {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  @include from(500) {
    width: 65vw;
    flex-direction: row;
  }

  font-size: 60px;
  @include from(800) {
    width: 40vw;
    max-width: 600px;
    font-size: 120px;
  }

  .icon {  
    font-size: 120px;
    color: white;
    padding: 30px;
    border-radius: 20px;

    &:hover {
      color: rgb(30, 30, 30);
      background: rgba(2,0,36, 1);
      background: linear-gradient(146deg, rgba(255,203,0,1) 0%, rgba(255,235,168,1) 49%, rgba(255,190,0,1) 100%);
    }
  }
}

</style>