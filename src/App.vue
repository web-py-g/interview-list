<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue"
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()

const isLoading = ref<boolean>(true)

onMounted(() => {
  onAuthStateChanged(getAuth(), (user) => {
    console.log(user);

    if (user) {
      userStore.userId = user.uid
    } else {
      userStore.userId = ''
    }
    isLoading.value = false
  })
})

</script>

<template>
  <app-progress-spinner v-if="isLoading" />

  <div class="container" v-else>
    <app-header />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  margin: auto;
  padding: 20px;
}
</style>
