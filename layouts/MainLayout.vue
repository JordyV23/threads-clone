<template>
  <div id="MainLayout" class="h-screen">
    <!-- Top Menu con el Icono de la APP -->
    <div class="w-full max-w-[500px] mx-auto">
      <div
        id="TopMenu"
        class="w-full flex items-center justify-center px-2 h-10 my-2"
      >
        <img class="w-[35px]" src="/threads-logo.png" />
      </div>
    </div>

    <!-- Aqui va el contenido de la pagina -->
    <div class="flex w-full max-w-[500px] mx-auto h-screen">
      <slot />
    </div>

    <!-- Barra de controles inferior -->
    <div
      id="BottomNav"
      class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black"
    >
      <div
        class="flex w-full max-w-[500px] mx-auto flex items-center justify-around"
      >
        <!-- Boton de Home -->
        <button @click="navigateTo('/')" class="w-full h-full">
          <Icon
            name="material-symbols:home-outline"
            size="35"
            color="#ffffff"
          />
        </button>

        <!-- Boton de Crear post -->
        <button @click="userStore.isMenuOverlay = true" class="w-full h-full">
          <Icon
            class="mb-1"
            name="material-symbols:edit-square-outline-rounded"
            size="32"
            color="#ffffff"
          />
        </button>

        <!-- Boton de Cerrar sesion -->
        <button @click="userStore.isLogoutOverlay = true" class="w-full h-full">
          <Icon
            class="mb-1"
            name="ph:sign-out"
            size="32"
            color="#ffffff"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useStore } from "~/stores/user";
const userStore = useStore();

</script>
