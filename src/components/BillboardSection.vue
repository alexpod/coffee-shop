<template lang="pug">
.billboard
  .billboard__container.container
    .billboard__subheading Welcome
    .billboard__heading Creamy Hot <br />and Ready to Serve
    .billboard__description A small river named Duden flows by their place and supplies <br />it with the necessary regelialia.
    // .billboard__action
      .button.button__primary Order now

</template>

<script setup>

</script>

<style lang="scss" scoped>
.billboard {
  background: url('/images/background/1-1.jpg') center center no-repeat;
  background-size: cover;
  backdrop-filter: blur(5px);
  min-height: 750px;
  position: relative;
  display: flex;
  &:before {
    content: '';
    backdrop-filter: blur(10px);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &__container {
    position: relative;
    color: #fff;
    text-align: center;
  }
  &__heading {
    text-transform: uppercase;
    font-size: 60px;
    text-shadow: 1px 2px 23px #000000a6;
  }
  &__subheading {
    margin-bottom: 10px;
    font-family: "Great Vibes", cursive;
    font-size: 30px;
    color: #c49b63;
    text-shadow: 1px 2px 23px rgba(0, 0, 0, 0.6509803922);
  }
  &__description {
    padding: 30px 0;
    font-size: 20px;
    text-shadow: 1px 2px 23px #000000a6;
  }
  &__action {
    display: flex;
    justify-content: center;
  }
}
</style>