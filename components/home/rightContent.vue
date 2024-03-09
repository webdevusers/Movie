<template>
  <div class="w-full ">
    <div class="title bold text-xl mb-6">
      Top Movies
    </div>
    <div class="flex flex-col items-start">
      <!-- Iterate over movies array -->
      <div class="flex flex-row mb-6" v-for="(movie, index) in movies" :key="index">
        <div class="img mr-4">
          <!-- Use movie.img for the src attribute -->
          <NuxtImg :src="movie.img" class="sm:min-w-[115px]" />
        </div>
        <div class="info flex flex-col items-start justify-between">
          <p class="border-athensGray-100 border-2 rounded-xl py-1 px-2 medium text-sm text-grayscale6-500">PG-13</p>
          <!-- Use movie.title for the movie title -->
          <p class="bold text-lg">
            {{ movie.title }}
          </p>
          <div class="type flex flex-row items-center">
            <div class="img mr-2">
              <NuxtImg src="/icons/kino.svg" />
            </div>
            <!-- Use movie.type for the type -->
            <div class="text text-grayscale7-700">
              {{ movie.type }}
            </div>
          </div>
          <div class="rate flex flex-row items-center">
            <div class="img mr-2">
              <NuxtImg src="/icons/star-home.svg" />
            </div>
            <!-- Use movie.rate for the rate -->
            <div class="text text-lg semibold">
              {{ movie.rate }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <UButton variant="ghost" block
      class="py-1 mb-10 px-4 text-md rounded-3xl font-semibold sm:py-3 sm:px-6 sm:text-lg xl:py-4 xl:px-8 xl:text-xl border-2 border-redOrange-500">
      See All</UButton>
    <div class="title bold text-xl mb-6">
      Favorites Genres
    </div>
    <div class="grid grid-cols-3 gap-3">
      <!-- Iterate over genres array -->
      <div v-for="(genre, index) in genres" :key="index" class="col-span-1">
        <!-- Use genre.title for the genre title -->
        <p class="text-md semibold bg-grayscale1-50 py-2 px-4 rounded-xl text-center">
          {{ genre.title }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

interface Movie {
  title: string;
  img: string;
  type: string;
  rate: number;
}

interface Genre {
  title: string;
}

const movies: Ref<Movie[]> = ref([
  {
    title: 'The Shawshank Redemption (1994)',
    img: '/images/CardImg.png',
    type: 'Drama',
    rate: 9.2
  },
  {
    title: 'The Godfather',
    img: '/images/CardImg2.png',
    type: 'Crime • Drama',
    rate: 9.2
  },
  {
    title: 'The Dark Knight (2008)',
    img: '/images/CardImg3.png',
    type: 'Action • Crime',
    rate: 9.2
  }
])

const genres: Ref<Genre[]> = ref([
  {
    title: 'Action'
  },
  {
    title: 'Fantasy'
  },
  {
    title: 'Comedy'
  },
  {
    title: 'Sci-Fi'
  },
  {
    title: 'Drama'
  },
  {
    title: 'Romance'
  },
  {
    title: 'Mystery'
  },
  {
    title: 'Horror'
  },
]);
</script>
