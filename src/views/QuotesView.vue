<!-- eslint-disable prettier/prettier -->
<template>
  <header>
    <h1>
      GOT - Quotes
    </h1>
  </header>
  <section>
    <article>
      <ul :ref="'aScrollTo'">
        <li v-for=" quote  in  listQuotes " :key="quote.id">
          <h2>{{ quote.sentence }}</h2>
          <router-link :to="{ name: 'Character', params: { slug: quote.character.slug } }">{{ quote.character.name || ""
          }}</router-link>
          <span v-if="quote.character.house.name">&nbsp;-&nbsp;</span>
          <router-link :to="'/houses/' + quote.character.house.slug">{{ quote.character.house.name || "" }}</router-link>
        </li>
        <input type="button" value="Get 5 new" v-on:click="updateData(); gotoTop();" />
      </ul>
    </article>
  </section>
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
    gotoTop() {
      // console.log(this.$refs.aScrollTo);
      this.$nextTick(() => this.$refs.aScrollTo.scrollTo(0, 0))
    },
  },
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
      text-align: center;
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
