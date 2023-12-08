<!-- eslint-disable prettier/prettier -->
<template>
  <!-- <div class="main"> -->
  <section>
    <header>
      <h1>
        GOT - Quotes
      </h1>
    </header>
    <article>
      <ul :key="componentKey">
        <li v-for=" quote  in  listQuotes " :key="quote.id">
          <h2>{{ quote.sentence }}</h2>
          <a @click="setPersonSlug(quote.character.slug)">{{ quote.character.name }}</a>
          <span v-if="quote.character.house.name">&nbsp;-&nbsp;</span>
          <a @click="setHouseSlug(quote.character.house.slug)">{{ quote.character.house.name }}</a>
        </li>
      </ul>
      <input type="button" value="Get 5 new" v-on:click="updateData" />
    </article>
  </section>

  <!-- </div> -->
</template>

<script lang="js">

import { ref } from "vue";
const allQuotes = ref([]);
let listQuotes = ref([]);

export default {
  data() {
    const getData = async () => {
      const res = await fetch("https://api.gameofthronesquotes.xyz/v1/random/5");
      const finalRes = await res.json();
      const sortedRes = finalRes.sort((a, b) => { return a.slug - b.slug });
      listQuotes.value = allQuotes.value = sortedRes;
    }
    getData();
    return {
      listQuotes,
      currentSlug: null
    };
  },
  methods: {
    async updateData() {
      const res = await fetch("https://api.gameofthronesquotes.xyz/v1/random/5");
      const finalRes = await res.json();
      const sortedRes = finalRes.sort((a, b) => { return a.slug - b.slug });
      listQuotes.value = allQuotes.value = sortedRes;
    },
  },
  setPersonSlug() { return null },
  setHouseSlug() { return null },
};
</script>

<style lang="scss" scoped>
section {
  background-image: url("@/assets/quotes.png");
}

article {
  ul {
    list-style: none;
    max-height: 98%;

    li {
      margin: 40px 0 0;
    }

    h2 {
      color: white;
      margin: 0.5rem 0;
      font-family: "Times New Roman", Times, serif;
      text-shadow: 0 2px 2px black;
      text-decoration-line: none;
    }
  }

  a {
    margin: 0 1rem;
    color: gold;
    font-size: smaller;
    font-style: italic;
    text-decoration: none;
    cursor: default;
  }
}
</style>
