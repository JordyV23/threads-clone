<template>
  <div class="z-50 bottom-0 h-full w-full">
    <div class="py-2 w-full">
      <div class="flex items-center justify-between">
        <div class="flex items-center text-white">
          <img class="rounded-full h-[35px]" :src="post.image" />
          <div class="ml-2 font-semibold text-[18px]">
            {{ post.name }}
          </div>
        </div>

        <div @click="isMenu = !isMenu" class="relative">
          <button
            :disabled="isDeleting"
            class="flex items-center text-white p-1 h-[24px] w-[2 px] hover:bg-gray-800 rounded-full cursor-pointer"
            :class="isMenu ? 'bg-gray-800' : ''"
            >
            <Icon v-if="!isDeleting" name="bi:three-dots" color="#ffffff" size="18" />
            <Icon v-else name="eos-icons:bubble-loading" color="#ffffff" size="18" />

        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useUserStore} from "~/stores/user";
const userStore = useUserStore();

const runtimeConfig = useRuntimeConfig();
let isMenu = ref(false);
let isLike = ref(false);
let isDeleting = ref(false);

const emit = defineEmits(["isDeleted"]);
const props = defineProps({post: Object});

</script>
