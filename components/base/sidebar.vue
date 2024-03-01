<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useCurrentPage } from '~/store/currentPage'

const currentPage = useCurrentPage()
const selected = currentPage.selected;

const menuItems = ref([
  { name: 'Discovery', icon: '/icons/n-discovery.svg', activeIcon: '/icons/a-discovery.svg', link: '/' },
  { name: 'Top Rated', icon: '/icons/n-star.svg', activeIcon: '/icons/a-star.svg', link: '/toprated' },
  { name: 'Coming Soon', icon: '/icons/n-timer.svg', activeIcon: '/icons/a-timer.svg', link: '/comingsoon' },
])

const libraryItems = ref([
  { name: 'Recent Played', icon: '/icons/n-clock.svg', activeIcon: '/icons/a-clock.svg' },
  { name: 'Download', icon: '/icons/n-download.svg', activeIcon: '/icons/a-download.svg' },
  { name: 'Dark Mode', icon: '/icons/theme-switcher.svg', activeIcon: '/icons/theme-switcher.svg', toggleComponent: true },
  { name: 'Setting', icon: '/icons/n-settings.svg', activeIcon: '/icons/a-settings.svg' }
])

const change = (name: string) => {
  currentPage.chooseCurrentPage(name)
}
const darkMode = ref(false)

watchEffect(() => {
  console.log('Selected:', selected.value);
});
</script>

<template>
  <aside class="sidebar py-8 px-6 bg-grayscale1-50 h-[100%]">
    <p class="title text-grayscale7-500 text-lg mb-6">
      MENU
    </p>
    <nav class="main-list">
      <div v-for="item in menuItems" :key="item.name" class="main-list__item flex flex-row items-center mb-4">
        <div v-if="selected === item.link" class="absolute h-[24px] w-[4px] bg-redOrange-500 left-[0]"></div>
        <NuxtImg :src="selected === item.link ? item.activeIcon : item.icon" class="mr-3 w-6 h-6" />
        <NuxtLink to="#" @click.prevent="change(item.link)"
          :class="{ 'font-bold text-lg': true, 'text-gray-600': selected !== item.link }">
          {{ item.name }}
        </NuxtLink>
      </div>
    </nav>
    <hr class="my-4">
    <p class="title text-grayscale7-500 text-lg mb-6">
      LIBRARY
    </p>
    <nav class="library-list">
      <div v-for="item in libraryItems" :key="item.name" class="library-list__item flex flex-row items-center mb-4">
        <div v-if="selected === item.name" class="absolute h-[24px] w-[4px] bg-redOrange-500 left-[0]"></div>
        <NuxtImg :src="selected === item.name ? item.activeIcon : item.icon" class="mr-3 w-6 h-6" />
        <template v-if="item.toggleComponent">
          <NuxtLink to="#" @click.prevent="change(item.name)"
            :class="{ 'font-bold text-lg': true, 'text-gray-600': selected !== item.name }">
            {{ item.name }}
          </NuxtLink>
          <UToggle v-model="darkMode"/>
        </template>
        <template v-else>
          <NuxtLink to="#" @click.prevent="change(item.name)"
            :class="{ 'font-bold text-lg': true, 'text-gray-600': selected !== item.name }">
            {{ item.name }}
          </NuxtLink>
        </template>
      </div>
    </nav>
  </aside>
</template>