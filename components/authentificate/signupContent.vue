<template>
  <div class="max-w-[501px] mx-auto">
    <div class="title text-2xl font-bold text-center mt-8 mb-20 tracking-wide">
      CineMax
    </div>
    <div class="h5 text-center mb-10 text-grayscale10-950">
      Register
    </div>

    <!-- Input Fields -->
    <div class="mb-10">
      <div class="input-field mb-5" v-for="(field, index) in fields" :key="index">
        <label class="text-grayscale7-500 text-lg">{{ field.label }}</label>
        <UInput :placeholder="field.placeholder" v-model="field.value"
          input-class="py-4 px-4 bg-grayscale1-50 outline-grayscale6-50 text-lg rounded-3xl mt-2" />
      </div>
    </div>

    <!-- Login Button -->
    <UButton variant="solid" block
      class="mb-6 py-1 text-grayscale1-50 dark:text-grayscale1-50 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 xl:text-xl dark:bg-redOrange-500">
      Login
    </UButton>

    <!-- Redirect button -->
    <p class="text-grayscale6-500 semibold text-lg text-center">Already have an account? <NuxtLink
        to="/authentificate/signin" class="text-redOrange-500">Login</NuxtLink>
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

interface Field {
  label: string;
  placeholder: string;
  value: string;
}

const fields = ref<Field[]>([
  { label: 'Full Name', placeholder: 'Enter your name', value: '' },
  { label: 'Email Address', placeholder: 'Enter your email address', value: '' },
  { label: 'Password', placeholder: 'Enter your password', value: '' },
  { label: 'Confirm Password', placeholder: 'Enter your password', value: '' }
]);
</script>