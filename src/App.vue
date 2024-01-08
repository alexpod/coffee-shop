<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import ProductsList from "./components/ProductsList.vue";
import ProductsItem from "./components/ProductsItem.vue";
import SidebarSection from "./components/SidebarSection.vue";

</script>

<template lang="pug">
.page(
  class="w-4/5 m-auto"
)
  HeaderSection
  ProductsList
    ProductsItem
SidebarSection
</template>

<style scoped>

</style>
