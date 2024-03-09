<template>
  <NuxtImg src="/images/error-page-bg.png" class="fixed z-0" />
  <div class="flex h-[100vh] z-10 bg-[#0D0C0F]">
    <div class="m-auto max-w-[465px] p-6 text-white">
      <div class="error-text text-center text-[200px] font-bold mb-20">
        <p class="text-white-50">4<span class="text-redOrange-500">0</span>4</p>
      </div>
      <p class="text-center text-2xl mb-12 text-white-50">
        Oops! Looks like something's wrong
      </p>
      <div class="text-center mt-4">
        <NuxtLink to="/"
          class="flex flex-row justify-center items-center border-[#ffffff] border-2 max-w-[260px] mx-auto rounded-[24px] px-4 py-2 rounded-md text-white-50">
          <NuxtImg src="/icons/error-left-arrow.svg" class="mr-2 w-6" />
          <p>Back to home</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style>
@font-face {
  font-family: 'inkFree';
  src: url('/fonts/ink-free.ttf');
}

.error-text {
  font-family: 'inkFree' !important;
}
</style>