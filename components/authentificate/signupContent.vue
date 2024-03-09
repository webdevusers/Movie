<template>
  <div class="max-w-[501px] mx-auto">
    <div class="title text-2xl font-bold text-center mt-8 mb-20 tracking-wide">
      CineMax
    </div>
    <div class="h5 text-center mb-10 text-grayscale10-950">
      Register
    </div>

    <!-- Input Fields -->
    <div class="mb-10">
      <div class="input-field mb-5" v-for="(field, index) in fields.slice(0, 2)" :key="index">
        <label class="text-grayscale7-500 text-lg">{{ field.label }}</label>
        <UInput :placeholder="field.placeholder" v-model="field.value" :required="true"
          input-class="py-4 px-4 bg-grayscale1-50 outline-grayscale6-50 text-lg rounded-3xl mt-2" />
      </div>
      <div class="input-field mb-5" v-for="(field, index) in fields.slice(2, 4)" :key="index">
        <label class="text-grayscale7-500 text-lg">{{ field.label }}</label>
        <UInput :placeholder="field.placeholder" v-model="field.value" type="password"
          input-class="py-4 px-4 bg-grayscale1-50 outline-grayscale6-50 text-lg rounded-3xl mt-2" />
      </div>
    </div>

    <!-- Login Button -->
    <UButton variant="solid" block @click="Authentificate"
      class="mb-6 py-1 text-grayscale1-50 dark:text-grayscale1-50 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 xl:text-xl dark:bg-redOrange-500">
      Sign Up
    </UButton>

    <!-- Redirect button -->
    <p class="text-grayscale6-500 semibold text-lg text-center">Already have an account? <NuxtLink
        to="/authentificate/signin" class="text-redOrange-500">Login</NuxtLink>
    </p>
  </div>


  <template v-if="error.status === 'Error'">
    <div class="notify shadow-lg rounded-2xl">
      <div class="notify-container py-[15px] px-4 relative">
        <div class="title font-bold">
          {{ error.status }}
        </div>
        <div class="desc">
          {{ error.message }}
        </div>
        <div class="cross absolute right-[25px] top-[15px]">
          <svg viewBox="0 0 24 24" width="24px" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </template>
</template>
<script setup lang="ts">
import { AuthValidation } from '~/middleware/signupValidation'
import {useRouter} from 'vue-router'
import { ref } from 'vue';
const router = useRouter()

interface Field {
  label: string;
  placeholder: string;
  value: string;
}

const fields = ref<Field[]>([
  { label: 'Full Name', placeholder: 'Enter your name', value: '' },
  { label: 'Email Address', placeholder: 'Enter your email address', value: '' },
  { label: 'Password', placeholder: 'Enter your password', value: '' },
  { label: 'Confirm Password', placeholder: 'Enter your password', value: '' }
]);

let valResponse: any;
let error: any = ref({
  status: '',
  message: ''
});

const Authentificate = async () => {
  valResponse = AuthValidation(fields.value[0].value, fields.value[1].value, fields.value[2].value, fields.value[3].value)

  if (valResponse.data.status === 'Success') {
    const response = await $fetch('/api/authentificate/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: fields.value[0].value,
        email: fields.value[1].value,
        password: fields.value[2].value,
      })
    });


    if (response.data.status === "OK") {
      router.push('/')
    } else {
      error.value = {
        status: response.data.status,
        message: response.data.message
      }
    }

    console.log(response)
  } else if (valResponse.data.status === 'Error') {
    error.value = valResponse.data;

    setTimeout(() => {
      error.value = {
        status: '',
        message: ''
      }
    }, 3000)
  }
}

</script>
<style>
.notify {
  top: 50px;
  right: 20px;
  z-index: 1000;
  width: 360px;
  background: #ffffff;
  position: absolute;
  display: block;
  height: 80px;
  border: 1px solid #FF2222;
  animation: 0.3s notify ease-in-out;
}

@keyframes notify {
  from {
    top: -50px;
  }

  to {
    top: 50px;
  }
}
</style>