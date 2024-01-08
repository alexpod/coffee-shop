<template lang="pug">
.totals
  .totals__title CART TOTALS
  .totals__item.totals__subtotal
    span Subtotal
    span $20.60
  .totals__item.totals__delivery
    span Delivery
    span $20.60
  .totals__item.totals__discount
    span Discount
    span $20.60
  .totals__item.totals__total
    span TOTAL
    span $20.60


</template>

<script setup>
</script>

<style lang="scss" scoped>
.totals {
  padding-top: 100px;
  &__title {
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 20px;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  &__total {
    border-top: 1px solid rgb(255 255 255 / 25%);
    padding-top: 10px;
    text-transform: uppercase;
  }
}
</style>