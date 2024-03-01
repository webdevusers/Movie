<template>
  <NuxtLoadingIndicator />
  <BaseMainHead />
  <div class=" grid grid-cols-5 w-full">
    <div class="col-span-1">
      <BaseSidebar />
    </div>
    <div class="col-span-4">
      <slot />
    </div>
  </div>
</template>