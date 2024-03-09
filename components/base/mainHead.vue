<script setup lang="ts">
import { useCurrentPage } from '~/store/currentPage'

const currentPage = useCurrentPage()
const selected = currentPage.selected;

const change = (name: string) => {
  currentPage.chooseCurrentPage(name)
}

let openSearch = ref(false)

const toggleSearch = (value: boolean) => {
  openSearch.value = value
}

</script>
<template>
  <div class="head grid grid-cols-12 py-6 items-center">
    <div class="logo bold text-2xl tracking-wide col-span-2 text-center" @click="change('/')">
      CineMax
    </div>
    <div class="links col-span-5">
      <NuxtLink to="#" class="medium text-lg tracking-wide mr-9">Movies</NuxtLink>
      <NuxtLink to="#" class="medium text-lg tracking-wide mr-9">Series</NuxtLink>
      <NuxtLink to="#" class="medium text-lg tracking-wide mr-9">Animation</NuxtLink>
      <NuxtLink to="#" class="medium text-lg tracking-wide">Genres</NuxtLink>
    </div>
    <div class="profile-section col-span-5 flex flex-row items-center justify-end">
      <template v-if="openSearch === false" @click="toggleSearch(true)">
        <NuxtImg src="/icons/search.svg" class="w-6 h-6 mr-16 cursor-pointer" />
      </template>
      <template v-else>
        <div class="search-container mr-4 flex flex-row items-center">
          <UInput icon="i-heroicons-magnifying-glass" placeholder="Search..." input-class="rounded-3xl text-md active"
            class="mr-3" />
          <svg @click="toggleSearch(false)" width="24px" height="64px" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </g>
          </svg>
        </div>
      </template>
      <NuxtLink to="/subscribe">
        <UButton variant="solid"
          class="py-1 mr-8 text-grayscale1-50 dark:text-grayscale1-50 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-2 xl:px-8 xl:text-xl dark:bg-redOrange-500">
          Subscribe</UButton>
      </NuxtLink>
      <NuxtImg src="/icons/notification.svg" class="w-6 h-6 mr-6" />
      <div class="profile flex flex-row items-center pr-4">
        <UAvatar src="/icons/profile.svg" alt="Avatar" class="w-8 mr-1" />
        <NuxtImg src="/icons/arrow.svg" />
      </div>
    </div>
  </div>
</template>
<style>
.active {
  animation: 1s activeAnimation ease-in-out;
}

@keyframes activeAnimation {
  0% {
    width: 0;
  }

  30% {
    width: 30%;
  }

  60% {
    width: 70%;
  }

  100% {
    width: 100%;
  }
}</style>