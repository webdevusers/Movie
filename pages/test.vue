<script setup lang="ts">

// SEO && PAGE META
definePageMeta({
  layout: 'default',
})
useSeoMeta({
  title: 'CineMax | Добро пожаловать',
  description: 'Home page',
})

// COLOR MODE SETUP
const colorMode = useColorMode()

console.log(colorMode.preference)

// Toggle components test
const selected = ref(false)
const selected1 = ref(true)
const selected2 = ref(true)

</script>
<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
  <!-- Primary solid button -->
  <UButton variant="solid"
    class="py-1 text-grayscale1-50 dark:text-grayscale1-50 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 xl:text-xl dark:bg-redOrange-500">
    Primary Button</UButton>
  <!-- Bordered button -->
  <UButton variant="ghost"
    class="py-1 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 xl:text-xl">Primary
    Button</UButton>
  <!-- Ghost button -->
  <UButton variant="ghost"
    class="py-1 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 xl:text-xl border-2 border-redOrange-500">
    Primary Button</UButton>
  <!-- Disabled button -->
  <UButton disabled
    class="!bg-grayscale6-500 dark:!bg-grayscale6-500 sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 px-4 py-1 rounded-3xl">
    Disable button</UButton>
  <!-- State button -->
  <UButton variant="solid"
    class="py-1 text-grayscale1-50 dark:text-grayscale1-50 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 xl:text-xl bg-emerald-500 dark:bg-emerald-500 hover:bg-emerald-600">
    Primary Button</UButton>

  <div class="grid grid-cols-2 space-content-center">
    <div class="grid-span-1">
      <div class="input-test">
        <label class="text-grayscale7-500 text-lg">Input Title</label>
        <UInput placeholder="Type here..."
          input-class="py-4 px-4 bg-grayscale1-50 outline-grayscale6-50 text-lg rounded-3xl" class="mt-2 mb-2" />

        <label class="text-grayscale7-500 text-lg">Input Title</label>
        <UInput placeholder="Type here password..." type="password"
          input-class="py-4 px-4 bg-grayscale1-50 outline-grayscale6-50 text-lg rounded-3xl" class="mt-2 mb-2" />

        <UInput icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :trailing="false"
          placeholder="Search..." input-class="py-4 px-4 bg-grayscale1-50 outline-grayscale6-50 text-lg rounded-3xl" class="mt-2 mb-2" />


        <UInput placeholder="X" input-class="bg-grayscale1-50 outline-grayscale6-50 text-2xl rounded-3xl py-3 px-2 max-w-[56px] text-center"/>



        <label class="text-grayscale7-500 text-lg">Input Title</label>
        <UTextarea textarea-class="bg-grayscale1-50 outline-grayscale6-50 text-lg p-4 rounded-3xl" placeholder="Type here..."/>

      </div>
    </div>
    <div class="grid-span-2">
      <UToggle v-model="selected" />
      <UToggle v-model="selected1"/>
      <UCheckbox v-model="selected2" name="notifications" label="Notifications" />
    </div>
  </div>
</template>

<style>
body {}
</style>
