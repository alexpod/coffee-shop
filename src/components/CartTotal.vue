<template lang="pug">
.totals
  .totals__title CART TOTAL
  .totals__item.totals__subtotal
    span Subtotal
    span $ {{ mainStore.getProductsTotalPrice() }}
  .totals__item.totals__delivery
    span Delivery
    span $0.00
  .totals__item.totals__discount
    span Discount
    span $0.00
  .totals__item.totals__total
    span TOTAL
    span.selected $ {{ mainStore.getProductsTotalPrice() }}

</template>

<script setup>
import { useMainStore } from "@/stores";

const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
.totals {
  padding-top: 20px;
  &__title {
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 20px;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: #bfbfbf;
  }
  &__total {
    border-top: 1px solid rgb(255 255 255 / 25%);
    padding-top: 10px;
    text-transform: uppercase;
    & .selected {
      color: #c49b63;
    }
  }
}
</style>