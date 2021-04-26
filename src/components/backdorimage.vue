<template>
  <img class="imageback" :src="imagePath">
</template>

<script>
export default {
  name: "backdorimage",
  props: {
    contentTypeUid: {
      type: String, // not 'string'
      required: false
    },
  },
  computed:{
    imagePath(){
      return `https://image.tmdb.org/t/p/w500${this.contentTypeUid}`;
     
    }
  }
}
</script>

<style scoped>
.imageback{
  width: 100%;
  height:100vh;
  position: absolute;
  top:0;
  left:0;
  filter: blur(30px);
  transform: scale(1.05);

}
</style>
