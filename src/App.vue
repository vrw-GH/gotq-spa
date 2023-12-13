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
  --baseFontFamily: Avenir, Helvetica, Arial, sans-serif;
  font-family: var(--baseFontFamily);
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

  >a {
    font-weight: bold;
    color: lightcoral;

    &.router-link-exact-active {
      color: darkviolet;
    }
  }

}

a:hover {
  padding: 0 3px;
  box-shadow: 0 0 10px gold;
  cursor: pointer;
}

.container {
  width: 88%;
  margin: auto;
  padding: 10px;
  border: 3px solid gold;
  min-height: 80dvh;

  >header {
    text-align: center;
    margin: 0.6rem 0 0.4rem;

    >h1 {
      margin: 0;
      font-size: 3rem;
      color: gold;
      text-shadow: 0 0 15px red;
    }
  }
}

section {
  display: flex;
  flex-direction: row;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 70dvh;
  min-height: 70%;
  width: 100%;
  box-shadow: 0 0 15px white inset;

  >nav {
    width: 20vw;
    max-width: 12rem;
    min-width: 7rem;
    margin: 10px;
    padding: 1px;
    text-align: left;
    overflow-y: auto;
    // border: 1px yellow dashed;

    >ul {
      list-style: none;
      color: lightcoral;

      >li {
        margin: 1px 0 0.75em -35px;
        text-transform: capitalize;
        font-family: var(--baseFontFamily);
        font-weight: 600;

      }
    }
  }

  >article {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: stretch;
    // justify-content: center;
    margin: 0;
    padding: 10px;
    height: 95%;
    overflow: hidden;
    // border: 1px orange dotted;

    >ul {
      margin: 0;
      background-color: #00008877;
      list-style: armenian outside;
      padding: 2px 1rem 1rem 1.6rem;
      overflow-y: auto;
      min-width: 70%;

      >h2 {
        font-size: 1.5rem;
        text-align: left;
        margin-left: -10px;
        color: darkviolet;
        text-shadow: 0 2px 4px black;
        text-decoration-line: overline;
        text-decoration-color: lightcoral;
      }

      >h3 {
        min-height: 3rem;
        text-align: left;
        margin-left: -10px;

        a {
          text-decoration: none;
          color: gold;
          font-size: 1.8rem;
        }
      }

      >li {
        margin: 10px 10px 0;
        text-transform: capitalize;
        text-align: left;
        font-family: "Times New Roman", Times, serif;
        color: white;
        font-weight: 600;

        >a {
          color: gold;
          font-weight: 600;
          text-decoration: none;
        }

        >a:hover {
          padding: 0 3px;
          box-shadow: 0 0 10px gold;
          cursor: pointer;
        }
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
  margin: 10px auto 0;

  &::placeholder {
    color: lightgrey;
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
  #app {
    background-repeat: repeat;
    height: auto;
  }

  section {
    flex-direction: column;

    >nav {
      width: 95%;
      max-width: none;
      max-height: 20vh;
    }

    >article {
      flex-direction: column;

      h3 {
        margin: 0;
        line-height: 2.2rem;
      }

      ul {
        min-height: 30dvh;
      }

    }
  }

  footer {
    position: relative;
  }
}
</style>
