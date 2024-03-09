<template>
  <NuxtLoadingIndicator />
  <BaseMainHead />
  <div class=" grid grid-cols-7 w-full">
    <div class="col-span-1">
      <BaseSidebar />
    </div>
    <div class="col-span-6">
      <slot />
    </div>
  </div>
</template>