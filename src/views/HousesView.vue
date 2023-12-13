<!-- eslint-disable prettier/prettier -->
<template>
  <header>
    <h1>
      {{ currentHouseName || "GOT - Houses" }}
    </h1>
  </header>

  <section>
    <nav class="leftmenu">
      <input type="search" name="search" placeholder="Search" title="Start typing a House" autocomplete="off" autofocus
        @keyup="filterHouses($event.target.value)" />
      <ul>
        <li v-for=" house  in  listHouses " :key="house.slug">
          <a @click="setCurrentSlug(house.slug)">{{ house.slug }}</a>
        </li>
      </ul>
    </nav>

    <article>
      <ul>
        <h2>House Members</h2>
        <li v-for="    member     in     currentHouseMembers    " v-bind:key="member.slug">
          <router-link :to="'/persons/' + member?.slug">{{ member.name || "" }}</router-link>
        </li>
      </ul>
    </article>
  </section>
</template>

<script lang="js">

import { ref } from "vue";
const allHouses = ref([]);
let listHouses = ref([]);

export default {
  data() {
    const getData = async () => {
      const res = await fetch("https://api.gameofthronesquotes.xyz/v1/houses");
      const finalRes = await res.json();
      const sortedRes = finalRes.sort((a, b) => { return a.slug - b.slug });
      listHouses.value = allHouses.value = sortedRes;
    }
    getData();
    return {
      listHouses,
      currentSlug: this.$route.params.slug || null,
    };
  },
  methods: {
    setCurrentSlug(slug) {
      this.currentSlug = slug;
    },
    filterHouses(filterSlug) {
      listHouses.value = (filterSlug === "") ? allHouses.value :
        allHouses.value.filter((h) => {
          // return h.slug === filterSlug.toLowerCase().trim()
          return h.slug.search(filterSlug.toLowerCase().trim()) !== -1
        });
      return null;
    },
  },
  computed: {
    currentHouse() {
      if (this.currentSlug !== null) {
        const currentHouseInArray = this.listHouses.filter((h) => {
          return h.slug === this.currentSlug;
        });
        if (currentHouseInArray.length === 1) {
          return currentHouseInArray[0];
        }
      }
      return null;
    },
    currentHouseName() {
      if (this.currentHouse !== null) {
        return this.currentHouse.name;
      }
      return null;
    },
    currentHouseMembers() {
      if (this.currentHouse !== null) {
        return this.currentHouse.members;
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  background-image: url("@/assets/houses.png");
}
</style>
