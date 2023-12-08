<!-- eslint-disable prettier/prettier -->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/quotes">Quotes</router-link> |
    <router-link to="/persons">Persons</router-link> |
    <router-link to="/houses">Houses</router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
  <footer>
    <p>
      Web app developed by: Victor Wright (Stack: Vue, Vanilla JS, API,
      HTML/CSS/SCSS)
      <br />
      Visit: <a href="http://www.wrightsdesk.com" target="_blank" rel="noopener noreferrer">
        wrightsdesk
      </a>
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
  background: linear-gradient(-180deg, black 60%, grey);
  background-image: url("@/assets/got-front.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 98dvh;
}

.container {
  display: flex;
  width: 88%;
  margin: auto;
  border: 3px solid gold;
  min-height: 84dvh;

  header {
    text-align: center;
    background-color: lighten($color: #000000aa, $amount: 20);

    h1 {
      font-size: 3rem;
      color: darkviolet;
      text-shadow: 0 0 15px white;
    }
  }
}

nav {
  position: sticky;
  top: 0;
  background-color: #000000aa;
  padding: 20px;

  a {
    font-weight: bold;
    color: lightcoral;

    &.router-link-exact-active {
      color: darkviolet;
    }
  }
}

section {
  display: flex;
  min-height: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px red dotted;
  width: 100%;
}

.leftmenu {
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  overflow: scroll;

  ul {
    list-style: armenian outside;
    color: red;
    max-height: 70vh;
  }

  li {
    margin: 10px 0 10px -15px;
    text-transform: capitalize;
  }

  a:hover {
    padding: 0 3px;
    box-shadow: 0 0 10px gold;
    cursor: pointer;
  }

  input[type="search"] {
    position: sticky;
    top: 0;
  }

  input[type="search"]::placeholder {
    color: lightgrey;
  }
}

article {
  padding: 10px;
  min-height: 70vh;
  max-height: 55vh;
  // border: 1px yellow dashed;

  h1 {
    margin: 0;
    min-height: 3rem;
    box-shadow: 0 0 12px white;
    font-family: "Franklin Gothic Medium", Arial, sans-serif;
    color: red;
    text-shadow: 0 0 2px gold;
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: darkviolet;
    text-shadow: 0 2px 4px black;
    text-decoration-line: overline;
    text-decoration-color: lightcoral;
  }

  ul {
    margin: auto;
    width: fit-content;
    box-shadow: 0 0 3px white inset;
    background-color: #00008877;
    list-style: armenian outside;
    padding: 2px 2rem 1rem 2.6rem;
    color: red;
    max-height: 80%;
    overflow-y: auto;
    // border: 1px yellow dotted;
  }

  li {
    margin: 10px 10px 0;
    text-transform: capitalize;
    text-align: left;

    a {
      // color: lightcoral;
      color: white;
      font-weight: 600;
    }

    a:hover {
      padding: 0 3px;
      box-shadow: 0 0 10px gold;
      cursor: pointer;
    }
  }
}

footer {
  position: sticky;
  bottom: 0;
  background: linear-gradient(0deg, black, transparent);
  padding: 10px;
  text-align: center;
  color: silver;
  font-size: x-small;

  a {
    color: white;
  }
}

@media (max-width: 600px) {
  section {
    flex-direction: column;
  }

  .leftmenu {
    max-height: 20vh;
  }
}
</style>
