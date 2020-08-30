<template>
  <div id="app">
    <h1>Brastlewark Finder</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    this.$store.dispatch("getGnomesFromSource");
  },
};
</script>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
li {
  list-style: none;
}
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}

h1 {
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
