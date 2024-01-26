<template lang="pug">
.shadow
.sidebar
  .sidebar__title Cart
  .sidebar__content(
    v-if="getProductsListInCart().length > 0"
  )
    CartItem(
      v-for="item in getProductsListInCart()"
      :content="item"
    )
      slot
  .sidebar__message(
    v-else
  )
    img(
        src="/images/cup.png"
      )
    .sidebar__message-text Please add <br />product to cart
  .sidebar__footer
    CartTotal(
      v-if="getProductsListInCart().length > 0"
    )
    .btn.btn-primary(
      @click="onSubmitOrder"
    ) {{ getProductsListInCart().length > 0 ? 'Proceed to Checkout': 'Close'}} 
</template>

<script setup>
import { useMainStore } from '@/stores'
import CartItem from './CartItem.vue'
import CartTotal from './CartTotal.vue'
const mainStore = useMainStore()


const onSubmitOrder = () => {
  mainStore.is_sidebar_open = false
}
const getProductsListInCart = () => {
  return mainStore.getProductsListInCart()

}
</script>

<style lang="scss" scoped>
.shadow {
  background-color: rgba(0 0 0 / .7);
  backdrop-filter: blur(2px);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 1s ease-out;
  z-index: 11;
}
.sidebar {
  position: fixed;
  background-color: #1d1a16;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  overflow: hidden;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 12;
  
  &__title {
    font-size: 24px;
    padding-bottom: 30px;
    text-align: center;
    color: #fff;
  }
  
  &__content {
    height: 100%;
    overflow: auto;
    padding-right: 10px;
  }
  &__message {
    text-align: center;
    img {
      display: block;
      margin: 0 auto 20px;
      max-width: 100px;
    }
    &-text {
      font-size: 24px;
    }
  }
}
.btn.btn-primary {
  background: #c49b63;
  border: 1px solid #c49b63;
  color: #000;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: transparent;
    color: #c49b63;
  }
}
</style>