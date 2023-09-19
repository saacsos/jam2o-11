<template>
  <h1>Index Page</h1>
  <Counter name="One"></Counter>
  <Counter :name="counterTwo"></Counter>
  <img src="~/assets/img/cat.jpg" alt="">
  <img src="/images/FELV-cat.jpg" alt="">
</template>

<script setup lang="ts">
const counterTwo = "Counter Two"
</script>