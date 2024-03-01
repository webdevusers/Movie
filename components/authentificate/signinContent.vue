<template>
  <div class="max-w-[501px] mx-auto">
    <div class="title text-2xl font-bold text-center mt-8 mb-20 tracking-wide">
      CineMax
    </div>
    <div class="h5 text-center mb-10 text-grayscale10-950 text-center max-w-[290px] mx-auto">
      Hey there, welcome back
    </div>
    <UButton label="Login with Google"
      class="bg-grayscale1-50 semibold text-lg rounded-3xl py-3 hover:text-white-50 duration-300 mb-6" block>
      <template #leading>
        <UAvatar src="/icons/i-google.svg" size="3xs" />
      </template>
    </UButton>
    <UButton label="Login with Facebook"
      class="bg-grayscale1-50 semibold text-lg rounded-3xl py-3 hover:text-white-50 duration-300  mb-6" block>
      <template #leading>
        <UAvatar src="/icons/i-facebook.svg" size="3xs" />
      </template>
    </UButton>

    <!-- Or login with -->
    <div class="flex items-center justify-center py-2 mb-6">
      <hr class="border-t border-gray-400 flex-grow mx-2">
      <span class="text-gray-600">Or login with</span>
      <hr class="border-t border-gray-400 flex-grow mx-2">
    </div>
    <!-- Login form -->
    <label class="text-grayscale7-500 text-lg">Full Name</label>
    <UInput placeholder="Enter your name"
      input-class="py-4 px-4 bg-grayscale1-50 outline-grayscale6-50 text-lg rounded-3xl" class="mt-2 mb-5" />
    <label class="text-grayscale7-500 text-lg">Password</label>
    <UInput placeholder="Enter your password" type="password"
      input-class="py-4 px-4 bg-grayscale1-50 outline-grayscale6-50 text-lg rounded-3xl" class="mt-2 mb-5" />
    <NuxtLink to="/authentificate/resetpass" class="text-redOrange-500 semibold text-lg flex justify-end mb-10">
      Forgot Password
    </NuxtLink>

    <!-- Login Button -->
    <UButton variant="solid" block
      class="mb-6 py-1 text-grayscale1-50 dark:text-grayscale1-50 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 xl:text-xl dark:bg-redOrange-500">
      Login
    </UButton>

    <!-- Redirect button -->
    <p class="text-grayscale6-500 semibold text-lg text-center">Already have an account? <NuxtLink to="/authentificate/signup" class="text-redOrange-500">Register</NuxtLink></p>
  </div>
</template>