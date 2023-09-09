import { defineStore } from "pinia";

//Define a new store
export const useUserStore = defineStore("user", {
  //Se define el estado inicial
  state: () => ({
    posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),
});
