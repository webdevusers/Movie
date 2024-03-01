<template>
  <div class="bg-redOrange-500 h-[100vh] relative overflow-hidden	">
    <div class="swiper absolute md:top-[85px] max-w-[600px]">
      <swiper :spaceBetween="30" :pagination="{
        clickable: true,
      }" :modules="modules" class="signupSwiper flex">
        <swiper-slide v-for="(item, idx) in swiperData" :key="idx" class="pb-10">
          <div class="slide-title text-[32px] text-amber-50">
            {{ item.title }}
          </div>
          <div class="slide-description text-[20px] text-amber-50">
            {{ item.description }}
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="mockup w-[100%]">
      <NuxtImg src="/images/AuthBackground.png" class="w-full" />
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default {
  data() {
    return {
      swiperData: [
        {
          title: "The biggest international and local film streaming",
          description: "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. "
        },
        {
          title: "Offers ad-free viewing of high quality",
          description: "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. "
        },
        {
          title: "Offers ad-free viewing of high quality",
          description: "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. "
        },
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<style>
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #F9F9F9;
}

.swiper-pagination-bullet-active {
  width: 24px !important;
  border-radius: 10px;
}
</style>