<template>
  <div class="title text-2xl mb-8 bold flex justify-left">
    Continue Watching
  </div>
  <swiper :navigation="true" :modules="modules" class="mySwiper w-full" :slidesPerView="2" :spaceBetween="35">
    <swiper-slide>
      <swiper-slide>
        <div class="slide-container relative">
          <div class="slide-img">
            <NuxtImg src="/images/CardFilm.png" class="min-w-[360px] mx-auto" />
          </div>
          <div class="slide-info absolute top-[60%] left-2/4 flex flex-col items-center"
            style="transform: translate(-50%, -50%)">
            <div class="slide-info__play mb-2">
              <NuxtImg src="/icons/play.svg" />
            </div>
            <div class="slide-info__title text-grayscale1-50 bold text-xl mb-2">
              The Batman
            </div>
            <div class="slide-info__year text-grayscale7-700 text-md">
              2022
            </div>
          </div>
        </div>
      </swiper-slide> </swiper-slide>
    <swiper-slide>
      <div class="slide-container relative">
        <div class="slide-img">
          <NuxtImg src="/images/CardFilm2.png" class="min-w-[360px] mx-auto" />
        </div>
        <div class="slide-info absolute top-[60%] left-2/4 flex flex-col items-center"
          style="transform: translate(-50%, -50%)">
          <div class="slide-info__play mb-2">
            <NuxtImg src="/icons/play.svg" />
          </div>
          <div class="slide-info__title text-grayscale1-50 bold text-xl mb-2">
            Moon Knight
          </div>
          <div class="slide-info__year text-grayscale7-700 text-md">
            2022
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      slide 3
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
<style>
.swiper-button-prev {
  rotate: 180deg;
}

.swiper-button-next,
.swiper-button-prev {
  background-image: url('/icons/swiper-arrow.png');
  /* Путь к вашему изображению стрелки */
  background-size: contain;
  /* или 50% 50%, или любой другой размер, который вам подходит */
  background-repeat: no-repeat;
  background-position: center;
  /* Центрировать изображение внутри кнопки */
  color: transparent !important;
  /* Скрываем стандартный символ стрелки */
  width: 32px;
  /* Ширина кнопки */
  height: 32px;
  /* Высота кнопки */
}</style>
