<template>
  <img :src="posterpath" alt="" class="poster" />
</template>
<script>
export default {
  props: {
    posterName: {
      type: String,
      required: true
    }
  },
  computed: {
    posterpath() {
      return `https://image.tmdb.org/t/p/w500/${this.posterName}`;
    }
  }
};
</script>
<style>
.poster{
  width: 100%;
}
</style>
