<!-- eslint-disable prettier/prettier -->
<template>
  <!-- <div class="main"> -->
  <section>
    <header>
      <h1>
        {{ currentPersonName || "GOT - Persons" }}
        <br>
        <!-- <a @click="gotoHouse(currentPersonHouse.slug)">{{ currentPersonHouse?.name || "" }}</a> -->
        <!-- <a :href="'/houses/' + currentPersonHouse?.slug">{{ currentPersonHouse?.name || "" }}</a> -->
        <router-link :to="'/houses/' + currentPersonHouse?.slug">{{ currentPersonHouse?.name || "" }}</router-link>
      </h1>
    </header>

    <article>
      <nav class="leftmenu">
        <input type="search" name="search" placeholder="Search" title="Start typing a Name or House" autocomplete="off"
          autofocus @keyup="filterPersons($event.target.value)" />
        <ul>
          <li v-for=" person  in  listPersons " :key="person.slug">
            <a @click="setCurrentSlug(person.slug)">
              {{ person.slug }} - <i><small>{{ person.house?.slug }}</small>
              </i>
            </a>
          </li>
        </ul>
      </nav>

      <ul :ref="'aScrolTo'">
        <h2>Quotes</h2>
        <li v-for=" quote  in  currentPersonQuotes " v-bind:key="quote.id">
          <a href="#">{{ quote }}</a>
        </li>
        <input v-if="currentPersonName" type="button" value="Change Quotes" v-on:click="changeQuotes(); gotoTop();" />
      </ul>
    </article>
  </section>

  <!-- </div> -->
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
      // console.log(this.$refs.aScrolTo);
      this.$nextTick(() => this.$refs.aScrolTo.scrollTo(0, 0))
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

h1 a {
  margin: 0 0 2rem;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

article li {
  a {
    color: white;
    text-decoration: none;
    cursor: default;
  }
}
</style>
