<template>
  <div>
    <appHeader/>
    <div class="container py-5">
      <Loader v-if="isloader"/>
      <div class="row">


        <movie
          v-for="(film,i) in Films"
          :key="'Veysel'+i"
          :film="film"
        />
      </div>
    </div>


  </div>
</template>
<script>
import {mapGetters} from "vuex";
import appHeader from "./Appheader";
import Loader from "./loading";
import movie from "./movie"
export  default {
  data(){
    return{
      isloader :true
    }
  },
  created() {
    this.$store.dispatch("fetchMovies");
    this.$store.dispatch("fetchMovieDetails");

    // loader component start end finish
    setTimeout(()=>{
      this.isloader = false;
    },1000)

  },
  components:{
    appHeader,
    Loader,
    movie
  },
  computed:{
     ...mapGetters(['Films'])
  }
}

</script>
