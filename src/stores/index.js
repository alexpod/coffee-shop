import { defineStore } from "pinia";
import { ref, reactive } from 'vue'
import axios from 'axios'

const url = "https://b5f7782b0525ab13.mokky.dev";

export const useMainStore = defineStore('mainStore', () => {
  const loader = ref(false)
  const favorites = reactive([])
  const cart = reactive([])
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

  
 /*  const getPosts = async (page, limit) => {
    const url = 'https://b5f7782b0525ab13.mokky.dev'

    const res = await fetch(url + new URLSearchParams({
      page: page,
      limit: limit,
    }));
    const data = await res.json();
    pageTotal.value = Math.ceil(res.headers.get('X-Total-Count') / limit);
    posts.value = data;
  } */

  const addToFavorites = (object) => {
    const mainStore = useMainStore()
    mainStore.products.push({ ...object, favorites: true})
  }
  
  return {
    loader,
    cart,
    products,
    favorites,
    is_sidebar_open,
    addToFavorites,
    getProducts
  }
  
})