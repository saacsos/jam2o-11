<template>
  <h1>{{ pageTitle }}</h1>

  <div v-if="artist" class="text-3xl mx-4">
    {{ artist.name }} {{  artist.id }}
  </div>

  <div v-if="artist">
    <div v-for="song in artist.songs" :key="song.id">
      <div class="text-xl mx-6 my-2">
        {{ song.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
// const config = useRuntimeConfig()
// console.log(config.public.apiBaseURL)
const pageTitle = `Artist No. ${route.params.id}`

type Song = {
  id: number,
  title: string
}

type Artist = {
  id: BigInteger,
  name: string,
  songs: Array<Song>
}


const { data: artist } = await useMyFetch<any>(
  `artist/${route.params.id}`,
  {}
)


</script>