import { defineStore } from "pinia";
import { ref, reactive } from 'vue'
import axios from 'axios'

const url = "https://b5f7782b0525ab13.mokky.dev";

export const useMainStore = defineStore('mainStore', () => {
  const loader = ref(false)
  const favorites = reactive([])
  const cart = reactive([])
  const cart_counter = reactive(0)
  const is_sidebar_open = ref(false)
  const products = ref([])
  const pageTotal = ref(0)

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${url}/products`, {
        params: {
          page: 1,
          limit: 10
        }
      })
      products.value = data.items.map((obj) => ({
        ...obj,
        isFavorites: false,
        inCart: false
      }))
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  const addToFavorites = (object) => {
    products.value.find(item => {
      if (item.id === object.id && !item.isFavorites) {
        favorites.value = favorites.push(item)
        item.isFavorites = !item.isFavorites
      } else if (item.id === object.id && item.isFavorites) {
        favorites.value = favorites.pop(item)
        item.isFavorites = !item.isFavorites
      }
    })
  }

  /* const getFavoriteCounts = () => {
    products.value.find(item => {
      if (item.isFavorites) favorites.push(item.isFavorites)
    })
  } */

  const addToCart = (object) => {
    products.value.find(item => {
      if (item.id === object.id) item.inCart = !item.inCart
    })
  }

  const countProductsInCart = () => {
    return products.value.filter(item => item.inCart === true ).length
  }

  const getProductsListInCart = () => {
    return products.value.filter(item => item.inCart)
  }

  const getProductsTotalPrice = () => {
    return products.value.filter(item => item.inCart).reduce((accumulator, item) => accumulator + item.price, 0).toFixed(2)
  }
  
  return {
    loader,
    cart,
    cart_counter,
    products,
    favorites,
    is_sidebar_open,
    addToFavorites,
    getProducts,
    getProductsListInCart,
    getProductsTotalPrice,
    countProductsInCart,
    addToCart
  }
  
})