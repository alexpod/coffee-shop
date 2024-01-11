<template lang="pug">
.page(
  :class="{'is-open': mainStore.is_sidebar_open}"
)
  HeaderSection
  .section
    .section__subtitle Discover
    h2.section__title BEST COFFEE SELLERS
    p Far far away, behind the word mountains, far from the countries Vokalia and <br />Consonantia, there live the blind texts.
  .filters 
    select(
      @change="onChangeSelect"
    )
      option(value="id") ID
      option(value="price") Price 
      option(value="type") Type
    input(
      type="text"
      placeholder="Search..."
      v-model="filters.search"
    )
  ProductsList(
    :items="mainStore.products"
  )
SidebarSection(
  v-if="mainStore.is_sidebar_open"
)
</template>

<script setup>
import { onMounted, ref, reactive, watch } from "vue"
import axios from 'axios'
import HeaderSection from "./components/HeaderSection.vue"
import SidebarSection from "./components/SidebarSection.vue"
import ProductsList from "@/components/ProductsList.vue"
import { useMainStore } from '@/stores/index.js';
const mainStore = useMainStore();

const items = ref([])
const url = 'https://b5f7782b0525ab13.mokky.dev'
const filters = reactive ({
  category: '',
  search: ''
})

const onChangeSelect = (event) => {
  filters.category = event.target.value;
}
const onChangeSearch = (event) => {
  filters.search = event.target.value;
}

const byFilters = () => {
  console.log('filters', filters)
}
/* const getProducts = async () => {
  try {
    const { data } = await axios.get(`${url}/products`, {
      params: {
        page: 1,
        limit: 6
      }
    })
    items.value = data.items.map((obj) => ({
      ...obj,
      isFavorites: false,
      inCart: false
    }))
    console.log(items.value)
  } catch (err) {
    console.log("Error: ", err);
  }
} */

const getFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`${url}/favorites`)
    items.value = items.value.map(item => {
      const favorite = favorites.find(favorite => favorite.productId === item.id)
      console.log('favorites', favorites)
      if (!favorite) return item

      return {
        ...item,
        isFavorites: true,
        favoriteId: favorite.id        
      }
    })
    console.log('items.value', items.value)
  } catch (err) {
    console.log("Error: ", err);
  }
}

const getProducts = () => {
  mainStore.getProducts()
}

onMounted( () => {
  getProducts()
})

watch(filters, byFilters)
</script>

<style lang="scss" scoped>
.section {
  text-align: center;
  &__title {
    font-family: "Poppins", Arial, sans-serif;
    background: #151111;
    font-size: 15px;
    line-height: 1.8;
    font-weight: 300;
    color: gray;
    z-index: -1;
    font-size: 40px;
    font-weight: 700;
    position: relative;
    text-transform: uppercase;
  }
  &__subtitle {
    font-size: 50px;
    display: block;
    margin-bottom: 0;
    font-family: "Great Vibes", cursive;
    color: #c49b63;
    line-height: 1;
    margin-bottom: -21px;
  }
}
.filters {
  padding: 50px 0 30px;
}
  select {
    margin-right: 10px;
  }
</style>
