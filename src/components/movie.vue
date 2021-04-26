<template>
<div class="col-md-4 mb-5">
  <div class="card">
    <router-link :to="moviedetail">
      <poster :posterName="film.poster_path" :src="returnimage" class="card-img-top" :alt="film.original_title" />
    </router-link>

    <div class="card-body">
      <h5 class="card-title">{{ film.original_title }}</h5>
      <p class="card-text">{{ film.overview }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Average rating : {{ film.vote_average }}</small>
    </div>
  </div>
</div>
</template>
<script>
import poster from "./poster";
export default {
  name: "film",
  data() {
    return {
      api_key: "85a2d8ad782ebcf111f1b80be384217d"
    };
  },
  props: {
    film: {
      type: Object,
      required: true
    }
  },
  computed: {
    returnimage() {
      return `https://image.tmdb.org/t/p/w500/${this.film.poster_path}`;
    },
    moviedetail() {
      return `movie/${this.film.id}`;
    }
  },
  components: {
    poster
  }
};
</script>
<style >
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
