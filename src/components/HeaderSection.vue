<template lang="pug">
header.header.flex.justify-between.shadow-xl.rounded-md.min-h-20.items-center
  .header__logo Coffee
    span BLEND

  .header__cart(
    @click="openSidebarCart()"
  ) Cart
    span.header__cart-counter(
      v-if="getCountProductsCart() > 0"
    ) {{ getCountProductsCart() }}
  .header__price 0.0000
  .header__favourite Favourites
  .header__profile Profile
</template>

<script setup>
import { useMainStore } from "@/stores"

const mainStore = useMainStore()

const getCountProductsCart = () => {
  return mainStore.countProductsInCart()
}

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
  &__cart {
    position: relative;
    cursor: pointer;
    &-counter {
      border: 1px solid #c49b63;
      background-color: #c49b63;
      justify-content: center;
      border-radius: 50%;
      position: absolute;
      top: -10px;
      right: -29px;
      min-width: 20px;
      height: 24px;
      line-height: 17px;
      text-align: center;
      font-weight: bold;
      font-size: 14px;
      padding: 3px;
      color: #000;
    }
  }
}
</style>