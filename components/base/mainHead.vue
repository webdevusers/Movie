<template>
  <div class="head grid grid-cols-12 py-6 items-center">
    <div class="logo bold text-2xl tracking-wide col-span-2 text-center">
      CineMax
    </div>
    <div class="links col-span-5">
      <NuxtLink to="#" class="medium text-lg tracking-wide mr-9">Movies</NuxtLink>
      <NuxtLink to="#" class="medium text-lg tracking-wide mr-9">Series</NuxtLink>
      <NuxtLink to="#" class="medium text-lg tracking-wide mr-9">Animation</NuxtLink>
      <NuxtLink to="#" class="medium text-lg tracking-wide">Genres</NuxtLink>
    </div>
    <div class="profile-section col-span-5 flex flex-row items-center justify-end">
      <NuxtImg src="/icons/search.svg" class="w-6 h-6 mr-16" />
      <UButton variant="solid"
        class="py-1 mr-8 text-grayscale1-50 dark:text-grayscale1-50 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-2 xl:px-8 xl:text-xl dark:bg-redOrange-500">
        Subscribe</UButton>
      <NuxtImg src="/icons/notification.svg" class="w-6 h-6 mr-6" />
      <div class="profile flex flex-row items-center pr-4">
        <UAvatar src="/icons/profile.svg" alt="Avatar" class="w-8 mr-1"/>
        <NuxtImg src="/icons/arrow.svg" />
      </div>
    </div>
  </div>
</template>
