<template lang="pug">
.product
  .product__image
    img(
      src="/images/products/1.jpg"
    )
  .product__title COFFEE CAPUCCINO
  .product__text A small river named Duden flows by their place and supplies
  .product__price $5.90
  .product__buttons 
    button(
      
    ) {{ isAdded ? 'Delete' : 'buy now' }}

</template>

<script setup>
defineProps({
  image: String,
  title: String,
  text: String,
  price: Number,
  isFaforite: Boolean,
  isAdded: Boolean
})
</script>

<style lang="scss" scoped>
.product {
  max-width: 200px;
  text-align: center;
  &__image {
    img {
      height: 200px;
    }
  }
  &__title {
    color: #fff;
  }
  &__price {
    color: #fff;
  }
  &__text {
    color: gray;
  }
  &__buttons {
    button {
      border: 1px solid #c49b63;
      background: transparent;
      color: #c49b63;
      padding: 0.375rem 0.75rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
      &:hover {
        background: #c49b63;
        color: white;
      }
    }
  }
}
</style>