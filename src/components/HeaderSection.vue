<template lang="pug">
header.header.flex.justify-between.shadow-xl.rounded-md.min-h-20.items-center
  .header__container.container
    .header__logo Coffee
      span BLEND
    .header__navigation
      .header__favourite Favourites {{ mainStore.favorites.length }}
      // .header__profile Profile
      .header__cart(
        @click="openSidebarCart()"
      ) Cart
        span.header__cart-counter(
          v-if="getCountProductsCart() > 0"
        ) {{ getCountProductsCart() }}
      .header__price {{ mainStore.getProductsTotalPrice() ? `$ ${mainStore.getProductsTotalPrice()}` : '$ 0.00'}}
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
  position: fixed;
  width: 100%;
  backdrop-filter: blur(10px);
  z-index: 10;
  &__container {
    display: flex;
  }
  &__price {
    background-color: #c49b63;
    color: #000;
    font-weight: 600;
    padding: 2px 10px;
    border-radius: 4px;
    margin-left: 20px;
  }
  &__navigation {
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: right;
    align-items: center;
  }
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
      top: -8px;
      right: -22px;
      min-width: 18px;
      height: 18px;
      line-height: 10px;
      text-align: center;
      font-weight: bold;
      font-size: 14px;
      padding: 3px;
      color: #000;
    }
  }
}
</style>