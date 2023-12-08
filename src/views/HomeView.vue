<template>
  <div class="home">
    <div class="intro">
      <h1>Welcome to the GAME OF THRONES App</h1>
      <h3>Find interesting information about the GOT world</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
// eslint-disable-next-line prettier/prettier
export default class HomeView extends Vue { }
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
}

.intro {
  position: absolute;
  width: 50%;
  top: calc(10% + 20vw);
  left: 25%;
  margin: auto;

  h1 {
    color: darkviolet;
    font-size: 3rem;
    text-shadow: 2px 3px 13px white;
  }

  h3 {
    margin-top: 10%;
    color: white;
    text-shadow: 5px 5px 13px purple;
  }
}
</style>
