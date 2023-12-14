<!-- eslint-disable prettier/prettier -->
<template>
  <header>
    <h1>
      {{ currentPersonName || "GOT - Persons" }}
    </h1>
  </header>

  <section>
    <div class="scrollingImage"></div>
    <nav>
      <input type="search" name="search" placeholder="Search any name/house" title="Start typing a Name or House"
        autocomplete="off" autofocus @keyup="filterPersons($event.target.value)" />
      <ul>
        <li v-for=" person  in  listPersons " :key="person.slug">
          <a @click="setCurrentSlug(person.slug)">
            {{ person.slug }} - <i><small>{{ person.house?.slug }}</small>
            </i>
          </a>
        </li>
      </ul>
    </nav>

    <article>
      <ul :ref="'aScrollTo'">
        <h3 v-if="currentPersonHouse?.name">
          <router-link :to="'/houses/' + currentPersonHouse?.slug">{{ currentPersonHouse?.name || "" }}</router-link>
        </h3>
        <h2>Quotes</h2>
        <li v-for=" quote  in  currentPersonQuotes " v-bind:key="quote.id">
          {{ quote }}
        </li>
        <input v-if="currentPersonName" type="button" value="Change Quotes" v-on:click="changeQuotes(); gotoTop();" />
      </ul>
    </article>
  </section>
</template>

<script lang="js">

import { ref } from "vue";
const allPersons = ref([]);
let listPersons = ref([]);
let currentQuotes = ref([]);

export default {
  data() {
    const getData = async () => {
      const res = await fetch("https://api.gameofthronesquotes.xyz/v1/characters");
      const finalRes = await res.json();
      finalRes.sort((a, b) => { return a.slug.localeCompare(b.slug) });
      listPersons.value = allPersons.value = finalRes;
    }
    getData();
    return {
      listPersons,
      currentSlug: this.$route.params.slug || null,
    };
  },
  methods: {
    setCurrentSlug(slug) {
      this.currentSlug = slug;
    },
    filterPersons(filterSlug) {
      listPersons.value = (filterSlug === "") ? allPersons.value :
        allPersons.value.filter((h) => {
          // return h.slug === filterSlug.toLowerCase().trim()
          return h.name.toLowerCase().search(filterSlug.toLowerCase().trim()) !== -1
        });
      return null;
    },
    changeQuotes() {
      if (this.currentperson !== null) {
        const getNewQuotes = async () => {
          const res = await fetch("https://api.gameofthronesquotes.xyz/v1/random/3");
          const finalRes = await res.json();
          currentQuotes.value = finalRes.map((e) => e.sentence)
        }
        getNewQuotes();
        return currentQuotes;
      }
      return null;
    },
    gotoTop() {
      // console.log(this.$refs.aScrollTo);
      this.$nextTick(() => this.$refs.aScrollTo.scrollTo(0, 0))
    },
  },
  computed: {
    currentperson() {
      if (this.currentSlug !== null) {
        const currentpersonInArray = this.listPersons.filter((h) => {
          return h.slug === this.currentSlug;
        });
        if (currentpersonInArray.length === 1) {
          currentQuotes.value = currentpersonInArray[0].quotes
          return currentpersonInArray[0];
        }
      }
      return null;
    },
    currentPersonName() {
      if (this.currentperson !== null) {
        return this.currentperson.name;
      }
      return null;
    },
    currentPersonHouse() {
      if (this.currentperson !== null) {
        return this.currentperson.house ? this.currentperson.house : " - - ";
      }
      return null;
    },
    currentPersonQuotes() {
      if (this.currentperson !== null) {
        return currentQuotes.value
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  background-image: url("@/assets/persons.png");
}
</style>
