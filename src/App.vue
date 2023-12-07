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
  <footer>
    <p>
      Web app developed by: Victor Wright (Stack: Vue, Vanilla JS, API,
      HTML/CSS/SCSS)
    </p>
  </footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  // background-color: black;*
  background: linear-gradient(-180deg, black 60%, grey);
}

.container {
  display: flex;
  width: 80%;
  margin: auto;
  border: 3px solid gold;
  min-height: 88vh;
}

footer {
  position: sticky;
  bottom: 0;
  background: linear-gradient(0deg, black, transparent);
  padding: 10px;
  text-align: center;
  color: lightgrey;
  font-size: x-small;
}

nav {
  position: sticky;
  top: 0;
  background-color: #000000aa;
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
