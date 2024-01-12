<template lang="pug">
.products
  .products__container.container
    ProductsItem(
      v-for="item in items"
      :key="item.id"
      :content="item"
    )
</template>

<script setup>
import ProductsItem from "@/components/ProductsItem.vue";

defineProps({
  items: Array
})
</script>

<style lang="scss" scoped>
.products {
  &__container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
}
</style>