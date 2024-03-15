<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sodales augue. Sed odio
      urna, commodo quis lorem eu, suscipit tempus diam. Donec fermentum egestas massa, quis tempus
      lorem facilisis non. Duis tincidunt quam vel ex ultricies sagittis. Aliquam dignissim quam sed
      dapibus lobortis. Donec tincidunt eros eget tristique interdum. Nulla quis ullamcorper quam.
      Sed tempor arcu eget erat hendrerit ultrices. Pellentesque vitae mauris sit amet augue mollis
      volutpat pulvinar eget augue. Vestibulum id massa euismod, feugiat dolor vel, tristique
      turpis. Nunc vel est sit amet mauris mattis molestie at ac nulla. Duis vel pharetra enim.
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
