<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CardPiece
      v-for="movie in moviesDB.movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CardPiece from "@/components/CardPiece.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    CardPiece,
  },
  data() {
    return {
      moviesDB: null,
    };
  },
  created() {
    this.moviesDB = require("../assets/json/moviesDB.json");
    console.log(this.moviesDB.movies);
  },
};
</script>

<style lang="scss" scoped>
</style>
