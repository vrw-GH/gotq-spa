<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/houses">Houses</router-link> |
    <router-link to="/persons">Persons</router-link> |
    <router-link to="/quotes">Quotes</router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
}

.container {
  display: flex;
  width: 80%;
  margin: auto;
  border: 3px solid gold;
  min-height: 90vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: lightcoral;

    &.router-link-exact-active {
      color: darkviolet;
    }
  }
}
</style>
