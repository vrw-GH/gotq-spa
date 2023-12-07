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
            <a @click="setCurrentId(house.slug)">{{ house.slug }}</a>
            <!-- <router-link :to="'/houses/' + item.slug">
                <span>{{ item.slug }}</span>
              </router-link> -->
          </li>
        </ul>
      </nav>

      <article>
        <!-- <HouseHold /> -->
        <!-- <router-view /> -->
        <h1>{{ currentHouse }}</h1>
        <p>{{ currentHouseName }}</p>
      </article>
    </section>

    <footer>
      <p>Footer</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const listHouses = ref([]);

async function getData() {
  const res = await fetch("https://api.gameofthronesquotes.xyz/v1/houses");
  const finalRes = await res.json();
  listHouses.value = finalRes;
}

getData();
</script>

<script lang="ts">
// import HouseHold from "../views/HouseHold.vue";
export default {
  data() {
    return {
      listHouses: [],
      currentId: null,
    };
  },
  methods: {
    setCurrentId(id) {
      this.currentId = id;
    },
  },
  computed: {
    currentHouse() {
      if (this.currentId !== null) {
        const currentHouseInArray = this.listHouses.filter((h) => {
          return h.slug === this.currentId;
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
  }
}

article {
  flex: 4;
  background-color: #f1f1f1;
  padding: 10px;
}

footer {
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
}

@media (max-width: 600px) {
  section {
    flex-direction: column;
  }
}
</style>
