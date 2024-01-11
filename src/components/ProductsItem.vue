<template lang="pug">
.product(
  class="transition hover:-translate-y-2 hover:shadow-xl"
)
  .product__favorite(
    :class="props.content.isFavorites ? 'product__favorite_active' : ''"
  ) 
    // span.icon.icon-heard2
  .product__image(
    @click="addToFavorite1(props.content)"
    title="Move to favorites"
  )
    img(
      src="/images/products/1.jpg"
    )
  .product__title COFFEE CAPUCCINO
  .product__text A small river named Duden flows by their place and supplies
  .product__price
  .product__buttons 
    button(
      @click="addToCart1(props.content)"
    ) {{ props.content.inCart ? 'Delete' : 'Add to cart' }}

</template>

<script setup>
import { useMainStore } from '@/stores/index.js';
const mainStore = useMainStore();

const props = defineProps({
  content: Object
})

const addToFavorite1 = (item) => {
  mainStore.addToFavorites(item)
}
const addToCart1 = (item) => {
  mainStore.addToCart(item)
}
</script>

<style lang="scss" scoped>
.product {
  max-width: 200px;
  text-align: center;
  padding-bottom: 30px;
  position: relative;
  border-radius: 6px;
  padding: 5px 5px 15px;
  &:hover {
    .product__image {
      box-shadow: 1px 1px 34px -7px rgba(209, 196, 115, 0.8);
    }
  }
  &__favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    background-color: rgba(128, 128, 128, 0.445);
    width: 15px;
    height: 15px;
    &_active {
      background-color: #c49b63;
    }
  }
  &__image {
    cursor: pointer;
    img {
      height: 200px;
      border-radius: 6px;
      border: 1px solid #c49b63;
    }
  }
  &__title {
    color: #fff;
    padding: 10px 0;
  }
  &__price {
    color: #fff;
  }
  &__text {
    color: gray;
    padding-bottom: 10px;
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