import { defineStore } from "pinia";

//Define a new store
export const useUserStore = defineStore("user", {
  //Se define el estado inicial
  state: () => ({
    posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),

  //Acciones que modifican el estado
  actions: {
    /**
     * Función para obtener todos los posts
     * @returns Retorna un array con todos los posts
     */
    async getAllPosts() {
      const res = await useFetch("/api/get-all-posts");
      this.posts = res.data;
      return res.data;
    },
  },
});
