<template>
  <div class="pt-40 max-w-[540px] mx-auto px-5">
    <div class="h5 text-center mb-3 text-grayscale10-950">
      Create New Password
    </div>
    <div class="medium text-grayscale7-700 text-center mb-10">
      Enter your new password
    </div>
    <label class="text-grayscale7-500 text-lg">New Password</label>
    <UInput placeholder="Enter your new password"
      input-class="py-4 px-4 bg-grayscale1-50 outline-grayscale6-50 text-lg rounded-3xl" class="mt-2 mb-10" />
    <label class="text-grayscale7-500 text-lg">Confirm new Password</label>
    <UInput placeholder="Enter your new password"
      input-class="py-4 px-4 bg-grayscale1-50 outline-grayscale6-50 text-lg rounded-3xl" class="mt-2 mb-10" />
    <UButton variant="solid" block
      class="py-1 text-grayscale1-50 dark:text-grayscale1-50 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 xl:text-xl dark:bg-redOrange-500">
      Confirm</UButton>
  </div>
</template>