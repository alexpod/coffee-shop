<template lang="pug">
.product
  .product__image
    img(
      :src="`images/products/${props.content.id}.jpg`"
    )
  .product__content
    .product__row
      .product__title {{ props.content.title }}
      .product__price $ {{ props.content.price }}
    .product__text {{ props.content.description }}
    //.product__buttons 
      button(
        
      ) X

</template>

<script setup>
const props = defineProps({
  content: Object,
})
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  padding-bottom: 20px;
  &__image {
    width: 60px;
    min-width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
    img {
      height: 60px;
      width: 60px;
    }
  }
  &__row {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
    position: relative;
    &:after {
      position: absolute;
      bottom: 35%;
      left: 0;
      right: 0;
      content: '';
      width: 100%;
      height: 1px;
      border-bottom: 1px dashed #674c27;
      z-index: -1;
    }
  }
  &__content {
    width: calc(100% - 65px);
  }
  &__title {
    color: #fff;
    background-color: #1d1a16;
    padding-right: 5px;
  }
  &__price {
    width: 80px;
    color: #c49b63;
    text-align: right;
    background: #151111;
    font-size: 16px;
  }
  &__text {
    color: gray;
    font-size: 12px;
  }
  &__buttons {
    button {
      border: 1px solid #c49b63;
      background: transparent;
      color: #c49b63;
      padding: 0.375rem 0.75rem;
      transition: color 0.15s ease-in-out;
      &:hover {
        background: #c49b63;
        color: white;
      }
    }
  }
}
</style>