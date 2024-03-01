<template>
  <NuxtLoadingIndicator />
  <BaseMainHead />
  <div class="container grid grid-cols-5">
    <div class="col-span-1">
      <BaseSidebar />
    </div>
    <div class="col-span-4">
      <slot />
    </div>
  </div>
</template>