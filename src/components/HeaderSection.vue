<template lang="pug">
header.header.flex.justify-between.shadow-xl.rounded-md.min-h-20.items-center
  .header__logo Coffee
    span BLEND

  .header__cart(
    @click="openSidebarCart()"
  ) Cart
  .header__price 0.0000
  .header__favourite Favourites
  .header__profile Profile
</template>

<script setup>
import { useMainStore } from "@/stores"

const mainStore = useMainStore()

const openSidebarCart = () => {

  mainStore.is_sidebar_open = true
  // eslint-disable-next-line vue/custom-event-name-casing
  // emits('openSidebarCart')

  // emit event to parent component (App.vue)
  // and pass 'true' as an argument
  //$emit('openSidebarCart', true);


}
</script>

<style lang="scss" scoped>
.header {
  color: #fff;
  &__logo {
    font-family: "Josefin Sans", Arial, sans-serif;
    font-size: 22px;
    line-height: 1;
    text-transform: uppercase;
    span {
      text-transform: uppercase;
      font-size: 12px;
      display: block;
      text-align: center;
      color: #fff;
      letter-spacing: 5px;
    }
  }
}
</style>