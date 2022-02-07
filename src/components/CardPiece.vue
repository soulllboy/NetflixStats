<template>
  <div class="outer">
    <img :src="movie.poster" />
    <p>{{ movie }}</p>
  </div>
</template>

<script>
export default {
  name: "CardPiece",
  props: {
    movie: Object,
  },
};
</script>

<style lang="scss" scoped>
div.outer {
  width: 536px;
  height: 264px;
  display: flex;
  align-items: center;
  padding: 24px;

  background: white;
  border: 1px solid rgba(42, 49, 53, 0.08);
  box-shadow: 0px 2px 8px rgba(42, 49, 53, 0.16);
  border-radius: 24px;
}
p {
  color: red;
}
</style>