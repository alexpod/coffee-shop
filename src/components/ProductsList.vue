<template lang="pug">
.products.flex.gap-2
  ProductsItem(
    v-for="item in items"
    :key="item.id"
    :title="item.title"
    :image="item.image"
    :price="item.price"
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
  flex-wrap: wrap;
}
</style>