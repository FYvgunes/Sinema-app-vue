<template>
  <section>
    <loader v-if="isloader" />
    <section v-if="dataupdate">
      <BackdropImage :contentTypeUid="movie.backdrop_path" />
      <div></div>
      <div class="container py-5">
        <div class="row">
          <div class="col-sm-4">
            <poster :posterName="movie.poster_path" />
          </div>
          <div class="col-sm-8 details">
            <router-link
              tag="a"
              class="btn btn-success get-ticket"
              :to="getticket"
            >
              Get Ticket
            </router-link>

            <h2 class="">{{ movie.title }}</h2>
            <p>{{ movie.overview }}</p>
            <samp>Category:</samp
            ><samp v-for="category in movie.genres" :key="category">
              :{{ category.name }},</samp
            >
            <p>Runtime : {{ runtime }}</p>
            <div>Average Rating : {{ movie.vote_average }}</div>
            <div class="">
              Product Company: {{ movie.production_companies[0].name }}
            </div>
            <div class="">Release Date : {{ movie.release_date }}</div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import loader from "./loading";
import BackdropImage from "./backdorimage";
import poster from "./poster";

export default {
  data() {
    return {
      isloader: true,
      dataupdate: false
    };
  },
  name: "movieDetails",
  created() {
    this.$store.dispatch("fetchMovieDetails", this.Movieid).then(() => {
      this.isloader = false;
      this.dataupdate = true;
    });
  },
  computed: {
    Movieid() {
      return this.$route.params.id;
    },
    movie() {
      return this.$store.state.movieDetail[this.Movieid];
    },
    runtime() {
      const { runtime } = this.movie;
      const Hour = Math.floor(runtime / 60);
      const minute = runtime - 60 * Hour;
      return `${Hour}h ${minute}m`;
    },
    getticket() {
      return `/movie/getticket/${this.Movieid}`;
    }
  },
  methods: {},
  components: {
    loader,
    BackdropImage,
    poster
  }
};
</script>
<style scoped>
.details {
  color: #fff;
  text-align: left;
}
.get-ticket {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
