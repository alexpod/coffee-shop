<template lang="pug">
.products.flex
  ProductsItem(
    v-for="item in items"
    :key="item.id"
    :id="item.id"
    :title="item.title"
    :image="item.image"
    :price="item.price"
    :isFavorite="item.isFavorites"
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
  gap: 15px;
  flex-wrap: wrap;
}
</style>