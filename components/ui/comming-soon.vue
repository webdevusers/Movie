<template>
	<div class="w-full mb-8">
		<p></p>
		<swiper :pagination="{ clickable: true }" :modules="modules" class="mySwiper w-[1312px]" :space-between="35" :slides-per-view='2'>
			<template v-for="idx in 5" :key="idx">
				<swiper-slide class="slide-container relative w-[644px] h-[366px]">
					<div class="img">
						<NuxtImg src="/images/avatar2.svg" class="w-full" />
					</div>
					<div class="info-container absolute text-amber-50 z-10  bottom-12 left-10">
						<div class="bg-grayscale1-900 px-4 py-2 rounded-3xl medium text-md max-w-[80px] text-center mb-3">Series
						</div>и
						<div class="title h4 bold text-grayscale1-50 mb-2">
							MS. Marvel
						</div>
						<div class="breadcrumbs text-grayscale6-600 medium text-md mb-8">
							1 Season • 6 Episodes • Superhero • Marvel
						</div>
						<div class="flex flex-row items-center">
							<div class="redirect-button mr-8">
								<UButton class="text-lg semibold py-4 px-6 rounded-3xl duration-300 " icon="i-heroicons-play" size="sm"
									color="primary" variant="solid" label="Watch Thriller" :trailing="false" />
							</div>
							<div class="add-to-watchlist">
								<UButton class="bg-[none] hover:bg-[none] text-lg semibold" icon="i-heroicons-bookmark" size="sm"
									color="primary" variant="solid" label="Add Watchlist" :trailing="false" />
							</div>
						</div>
					</div>
				</swiper-slide>
			</template>
		</swiper>
	</div>
</template>
<script>
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Pagination],
		}
	},
}
</script>
<style>
.swiper-pagination-bullet {
	background: linear-gradient(90deg, rgba(255, 197, 197, 1) 0%, rgba(255, 100, 100, 1) 35%, rgba(237, 21, 21, 1) 90%);
	transition: .6s;
	width: 8px;
	height: 8px;
}

.swiper-pagination-bullet-active {
	width: 44px !important;
	height: 8px !important;
	border-radius: 7.5px;
}
</style>