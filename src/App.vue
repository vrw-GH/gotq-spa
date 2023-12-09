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

.container {
  display: flex;
  width: 88%;
  margin: auto;
  border: 3px solid gold;
  min-height: 80dvh;
}

section {
  min-height: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  width: 100%;

  header {
    text-align: center;
    // background-color: lighten($color: #000000aa, $amount: 20);

    h1 {
      margin: 1rem 0 0;
      font-size: 3rem;
      color: darkviolet;
      text-shadow: 0 0 15px white;
    }
  }
}

.leftmenu {
  max-width: 80%;
  min-width: 10rem;
  margin: 0;
  padding: 20px;
  text-align: left;
  // overflow: hidden;

  ul {
    // list-style: circle inside;
    list-style: none;
    color: red;
    max-height: 10vh;
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
}

article {
  display: flex;
  flex-direction: row;
  // flex-wrap: nowrap;
  // align-items: center;
  align-items: stretch;
  justify-content: center;
  // justify-content: flex-start;
  padding: 10px;
  // min-height: 70vh;
  max-height: 70vh;
  // border: 1px yellow dashed;
  width: 90%;
  margin: auto;

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
    margin: 0;
    box-shadow: 0 0 3px white inset;
    background-color: #00008877;
    list-style: armenian outside;
    padding: 2px 1rem 1rem 1.6rem;
    color: red;
    overflow-y: auto;
    max-height: 66vh;
    min-height: 60vh;
    min-width: 70%;
    // border: 1px yellow dotted;

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
}

input[type="button"] {
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  border: outset;
  color: whitesmoke;
  background-color: purple;

  &:active {
    position: relative;
    top: 1px;
    left: 1px;
    border: inset;
    // box-shadow: 3px 2px 0 0 darkred;
  }
}

input[type="search"] {
  position: sticky;
  width: 100%;
  top: 0;
}

input[type="search"]::placeholder {
  color: lightgrey;
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
  #app {
    background-repeat: repeat;
    height: auto;
  }

  article {
    flex-direction: column;
    justify-content: flex-start;
  }

  section {
    flex-direction: column;

    h1 {
      line-height: 2.2rem;
    }

    ul {
      min-height: 30dvh;
    }

    nav {
      ul {
        min-height: 20%;
      }
    }
  }

  .leftmenu {
    max-width: 100%;
    // margin: 0 0 10px;
    max-height: 20vh;
  }

  footer {
    position: relative;
  }
}
</style>
