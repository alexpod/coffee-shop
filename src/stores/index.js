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
  // const posts = ref([])
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
    const mainStore = useMainStore()

    mainStore.products.find(item => {
      if (item.id === object.id) item.isFavorites = !item.isFavorites
    })
  }
  const addToCart = (object) => {
    const mainStore = useMainStore()

    mainStore.products.find(item => {
      if (item.id === object.id) item.inCart = !item.inCart
    })
  }

  const countProductsInCart = () => {
    const mainStore = useMainStore()

    return mainStore.products.filter(item => item.inCart === true ).length
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
    countProductsInCart,
    addToCart
  }
  
})