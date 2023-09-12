<template>
  <h1>{{ pageTitle }}</h1>

  <img style="width:200px" src="https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg" alt="">
  <img style="width:300px" :src="image">
  <div v-for="artist of artists" :key="artist.id">
    <div @click="change(artist.image)">
      {{ artist.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const pageTitle = `Artist No. ${route.params.id}`
const image = useState<string>(undefined)

const change = function (_image: string) {
  image.value = _image
}

const artists = [
  {
    id: 1,
    name: "Getsunova",
    image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
  },
  {
    id: 2,
    name: "4EVE",
    image: "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"
  }
]
</script>