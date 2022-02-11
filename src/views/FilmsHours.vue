<template>
  <header class="flex-right">
    <img src="@/assets\icons\color\netflix.png" />
    <div class="flex-down">
      <div class="flex-right">
        <div class="button-router button-red button-small">
          <img
            src="@\assets\icons\black\notification.png"
            class="recolor-red"
          />
          <p>films</p>
        </div>
        <router-link to="/series-by-hours">
          <div class="button-router button-small">
            <img
              src="@\assets\icons\black\video-camera.png"
              class="recolor-grey-light"
            />
            <p>series</p>
          </div>
        </router-link>
      </div>
      <div class="view-info">
        <h1>Most Popular Netflix Films</h1>
        <p>Total view hours per title in its first 28 days on Netflix.</p>
      </div>
      <div class="flex-right date-info">
        <img src="@\assets\icons\black\calendar.png" class="recolor-grey" />
        <p class="text-grey">September 2021</p>
      </div>
    </div>
    <div class="flex-down column-buttons">
      <router-link to="/"
        ><div class="button-router button-big">
          <img src="@\assets\icons\black\user.png" class="recolor-grey-light" />
          <img
            src="@\assets\icons\black\close.png"
            class="recolor-grey-light"
          />
          <p>NEtflix accounts</p>
        </div>
      </router-link>
      <div class="button-router button-big button-red">
        <img src="@\assets\icons\black\clock-circle.png" class="recolor-red" />
        <img src="@\assets\icons\black\close.png" class="recolor-red" />
        <p>View Hours</p>
      </div>
    </div>
  </header>

  <main>
    <CardPiece
      v-for="movie in moviesDB.movies"
      :key="movie.id"
      :movie="movie"
      :counterVal="movie.hours"
      msgIcon="hours"
      msg="View Hours"
    />
  </main>

  <footer>
    <div class="sources">
      <h3>sources</h3>
      <div class="link-list">
        <div class="link-source">
          <img src="@\assets\icons\black\link.png" class="recolor-grey-light" />
          <a href="https://voxmediaevents.com/code2021">
            <span>code 2021</span>
            <span>(voxmediaevents.com/code2021)</span>
          </a>
        </div>
        <div class="link-source">
          <img src="@\assets\icons\black\link.png" class="recolor-grey-light" />
          <a
            href="https://theverge.com/2021/9/27/22697364/netflix-viewing-data-code-2021"
          >
            <span>The Verge</span>
            <span
              >(theverge.com/2021/9/27/22697364/netflix-viewing-data-code-2021)</span
            >
          </a>
        </div>
        <div class="link-source">
          <img src="@\assets\icons\black\link.png" class="recolor-grey-light" />
          <a href="https://imdb.com">
            <span>IMDB Ratings</span>
            <span>(imdb.com)</span>
          </a>
        </div>
        <div class="link-source">
          <img src="@\assets\icons\black\link.png" class="recolor-grey-light" />
          <a href="https://rottentomatoes.com">
            <span>Rotten Tomatoes</span>
            <span>(rottentomatoes.com)</span>
          </a>
        </div>
      </div>
    </div>
    <img src="@\assets\icons\color\main.png" />
  </footer>
</template>

<script>
// @ is an alias to /src
import CardPiece from "@/components/CardPiece.vue";

export default {
  name: "FilmsHours",
  components: {
    CardPiece,
  },
  data() {
    return {
      moviesDB: null,
    };
  },
  created() {
    this.moviesDB = require("../assets/json/moviesDB.json");
    this.moviesDB.movies.sort(function (a, b) {
      return b.hours - a.hours;
    });
  },
};
</script>

<style lang="scss">
</style>
