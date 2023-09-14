<template>
  <MainLayout>
    <!-- <div class="text-white" >{{ user }}</div> -->
    <div id="IndexPage" class="w-full overflow-auto">
      <div class="mx-auto max-[500px] overflow-hidden">
        <div id="Posts" class="px-4 max-w-[600px] mx-auto">
          <div
            class="text-white"
            v-if="isPosts"
            v-for="post in posts"
            :key="post"
          >
            <Post :post="post" @isDeleted="posts = userStore.getAllPosts()" />
          </div>

          <div v-else>
            <client-only>
              <div
                v-if="isLoading"
                class="mt-20 w-full flex items-center justify-center mx-auto"
              >
                <div
                  class="text-white mx-auto flex flex-col items-center justify-center"
                >
                  <Icon
                    name="eos-icons:bubble-loading"
                    size="50"
                    color="#ffffff"
                  />
                  <div class="w-full mt-1">Cargando...</div>
                </div>
              </div>
              <div
                v-if="!isLoading"
                class="mt-20 w-full flex items-center justify-center mx-auto"
              >
                <div
                  class="text-white mx-auto flex flex-col items-center justify-center"
                >
                  <Icon name="tabler:mood-edit" size="50" color="#ffffff" />
                  <div class="w-full mt-1">Crea tu primer post!</div>
                </div>
              </div>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const user = useSupabaseUser();

let posts = ref([]);
let isPosts = ref(false);
let isLoading = ref(false);

/**
 * Redirecciona al usuario a la pagina de autenticacion si no esta logueado
 */
watchEffect(() => {
  if (!user.value) {
    return navigateTo("/auth");
  }
});

/**
 * Funcion que se ejecuta antes de montar el componente y obtiene todos los posts
 */
onBeforeMount(async () => {
  try {
    isLoading.value = true;
    await userStore.getAllPosts();
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
});

/**
 * Funcion que se ejecuta despues de montar el componente y obtiene todos los posts
 */
onMounted(() => {
  watchEffect(() => {
    if (userStore.posts && userStore.posts.length >= 1) {
      posts.value = userStore.posts;
      isPosts.value = true;
    }
  });
});

/**
 * Funcion que se ejecuta despues de montar el componente y obtiene todos los posts cuando se actualiza
 */
watch(() => {
  watchEffect(
    () => {
      if (userStore.posts && userStore.posts.length >= 1) {
        posts.value = userStore.posts;
        isPosts.value = true;
      }
    },
    { deep: true }
  );
});
</script>
