<template>
  <div class="container w-full relative mb-8">
    <swiper :slidesPerView="4" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper w-full">

      <template v-for="(item, idx) in images" :key="idx">
        <swiper-slide class="border-athensGray-100 border-2 rounded-xl px-8 py-4">
          <NuxtImg class='w-[115px] h-[60px] mx-auto' :src="item.url"></NuxtImg>

        </swiper-slide>
      </template>
    </swiper>
    <div class="absolute right-0 bottom-[1px] h-[99%] rounded-xl w-[105px] z-10 custom-bg">
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
  data() {
    return {
      images: [
        {
          url: "/icons/disney.svg",
        },
        {
          url: "/icons/national-geographic.svg",
        }, {
          url: "/icons/star-wars.svg",
        }, {
          url: "/icons/marvel.svg",
        }, {
          url: "/icons/disney.svg",
        },
        {
          url: "/icons/national-geographic.svg",
        }, {
          url: "/icons/star-wars.svg",
        }, {
          url: "/icons/marvel.svg",
        }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {};
  },
};
</script>
<style>
.custom-bg {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 1) 100%);
}

</style>