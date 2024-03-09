<script setup>
import { useToastStore } from '~/store/toasts';

const toast = useToastStore();

function showDefaultToast() {
  toast.message.value = 'This is a default toast notification';
  toast.show.value = true;
  toast.description.value = '12321312'
  
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <template v-if="toast.show.value === true">
      <UNotification :timeout="toast.worktime.value" :id="1" :title="toast.message.value"
        :description="toast.description.value" />
    </template>
  </NuxtLayout>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('./styles/index.css');

* {
  font-family: "Montserrat", sans-serif;
}
</style>