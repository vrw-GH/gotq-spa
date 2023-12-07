<template>
  <div class="houses">
    <header>
      <h1>🏠 Houses</h1>
    </header>

    <section>
      <nav>
        <ul>
          <li v-for="house in listHouses" :key="house.slug">
            <!-- <a href="#">{{ item.slug }}</a> -->
            <!-- <a @click="getItemData">${ item.slug }</a> -->
            <a @click="setCurrentSlug(house.slug)">{{ house.slug }}</a>
            <!-- <router-link :to="'/houses/' + item.slug">
                <span>{{ item.slug }}</span>
              </router-link> -->
          </li>
        </ul>
      </nav>

      <article>
        <!-- <HouseHold /> -->
        <!-- <router-view /> -->
        <h1>
          {{ currentHouseName }}
        </h1>
        <hr />
        <p>
          {{ currentHouseMembers }}
        </p>
      </article>
    </section>
  </div>
</template>

<script lang="js">
// import HouseHold from "../views/HouseHold.vue";

import { ref } from "vue";
const listHouses = ref([]);

export default {
  data() {
    async function getData() {
      const res = await fetch("https://api.gameofthronesquotes.xyz/v1/houses");
      const finalRes = await res.json();
      listHouses.value = finalRes;
    }
    getData();
    return {
      listHouses,
      currentSlug: null,
    };
  },
  methods: {
    setCurrentSlug(slug) {
      this.currentSlug = slug;
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
.houses {
  width: 100%;
  height: 100vh;
  margin: auto;
  box-sizing: border-box;
}

header {
  text-align: center;

  h1 {
    font-size: 3rem;
    color: darkviolet;
  }
}

section {
  display: flex;
}

nav {
  flex: 1;
  background: #ccc;
  padding: 20px;
  text-align: left;

  li {
    margin: 3px;
  }

  a:hover {
    background-color: darkviolet;
    cursor: pointer;
  }
}

article {
  flex: 4;
  background-color: #f1f1f1;
  padding: 10px;
}

@media (max-width: 600px) {
  section {
    flex-direction: column;
  }
}
</style>
