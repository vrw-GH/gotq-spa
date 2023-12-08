<!-- eslint-disable prettier/prettier -->
<template>
  <!-- <div class="main"> -->
  <section>
    <h1>
      {{ currentPersonName || "GOT - Persons" }}
      <br>
      <a @click="setCurrentSlug(person.slug)">{{ currentPersonHouse || "House" }}</a>
    </h1>
    <header>
      <h1>
        {{ currentPersonName || "GOT - Persons" }}
        <br>
        <a @click="setCurrentSlug(person.slug)">{{ currentPersonHouse || "House" }}</a>
      </h1>
    </header>
    <nav class="leftmenu">
      <input type="search" name="search" placeholder="Search" @keyup="filterPersons($event.target.value)" />
      <ul>
        <li v-for=" person  in  listPersons " :key="person.slug">
          <a @click="setCurrentSlug(person.slug)">{{ person.slug }}</a>
        </li>
      </ul>
    </nav>

    <article>
      <h2>Quotes</h2>
      <ul>
        <li v-for=" quote  in  currentPersonQuotes " v-bind:key="quote.id">
          <a href="#">{{ quote }}</a>
        </li>
      </ul>
      <input v-if="currentPersonName" type="button" value="Change" /> <!-- v-on:click="" -->
    </article>
  </section>

  <!-- </div> -->
</template>

<script lang="js">

import { ref } from "vue";
const allPersons = ref([]);
let listPersons = ref([]);

export default {
  data() {
    const getData = async () => {
      const res = await fetch("https://api.gameofthronesquotes.xyz/v1/characters");
      const finalRes = await res.json();
      const sortedRes = finalRes.sort((a, b) => { return a.slug - b.slug });
      listPersons.value = allPersons.value = sortedRes;
    }
    getData();
    return {
      listPersons,
      currentSlug: null,
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
  },
  computed: {
    currentperson() {
      if (this.currentSlug !== null) {
        const currentpersonInArray = this.listPersons.filter((h) => {
          return h.slug === this.currentSlug;
        });
        if (currentpersonInArray.length === 1) {
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
        return this.currentperson.house ? this.currentperson.house.name : " - - ";
      }
      return null;
    },
    currentPersonQuotes() {
      if (this.currentperson !== null) {
        return this.currentperson.quotes;
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

h1 a {
  margin: 0 0 2rem;
  color: white;
  font-size: 2rem;
}

article li {
  a {
    color: white;
    text-decoration: none;
    cursor: default;
  }
}
</style>
