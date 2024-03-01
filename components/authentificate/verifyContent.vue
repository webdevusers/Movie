<template>
  <div class="pt-40 max-w-[540px] mx-auto px-5">
    <div class="h5 text-center mb-3 text-grayscale10-950">
      Verifying Your Account
    </div>
    <div class="medium text-grayscale7-700 text-center mb-10">
      We have just sent you 4 digit code via your email example@gmail.com
    </div>
    <div class="number-inputs flex flex-row justify-center mb-10">
      <UInput
      v-for="(number, idx) in numbers" 
        :key="idx"
        :id="'input-' + idx"
        v-model="numbers[idx]"
        placeholder="X"
        input-class="bg-grayscale1-50 outline-grayscale6-50 text-2xl rounded-3xl py-3 px-2 max-w-[56px] text-center mr-2"
        @input="handleInput(idx)"
      />
    </div>
    <UButton variant="solid" block
    class="py-1 text-grayscale1-50 dark:text-grayscale1-50 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 xl:text-xl dark:bg-redOrange-500">
    Next</UButton>
    <UButton variant="ghost" block
    class="text-grayscale6-500 hover:bg-[none] py-1 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 xl:text-xl">
    Resend code</UButton>
  </div>
</template>

<script setup lang="ts">
const numbers = ref<string[]>(['', '', '', '', '']);

const handleInput = (index: number) => {
  numbers.value[index] = numbers.value[index].replace(/[^\d]/g, '');

  if (numbers.value[index].length > 1) {
    numbers.value[index] = numbers.value[index].substring(0, 1);
  }

  const nextIndex = index + 1;
  if (nextIndex < numbers.value.length) {
    const nextInput = document.getElementById(`input-${nextIndex}`) as HTMLInputElement;
    if (nextInput) {
      nextInput.focus();
    }
  }
};
</script>