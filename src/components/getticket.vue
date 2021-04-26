<template>
  <div>
    <backdorimage :contentTypeUid="movie.backdrop_path" />
    <div class="container py-5">
      <div class="row"></div>
    </div>
    <poster :posterName="movie.poster_path" />
  </div>
</template>
<script>
import backdorimage from "./backdorimage";
import poster from "./poster";
export default {
  components: {
    backdorimage,
    poster
  },
  computed: {
    Movieid() {
      return this.$route.params.id;
    },
    movie() {
      return this.$store.state.movieDetail[this.Movieid];
    }
  }
};
</script>
<style></style>
