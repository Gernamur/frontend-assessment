<template>
  <div class="gnome-details">
    <router-link :to="{ name: 'GnomeList'}">
      <img class="icon" src="https://image.flaticon.com/icons/png/128/846/846551.png" />
    </router-link>
    <h1>Details</h1>
    <h2>{{gnome.name}}</h2>
    <img :src="gnome.thumbnail" />
    <div class="info">
      <span>Age</span>
      {{gnome.age}}
      <br />
      <span>Sex</span>
      {{getSex(gnome.name)}}
      <br />
      <span>weight</span>
      {{gnome.weight}}
      <br />
      <span>height</span>
      {{gnome.height}}
      <br />
      <span>Hair color</span>
      {{gnome.hair_color}}
      <br />
      <span>Professions</span>
      <ol>
        <li v-for="profession in gnome.professions" :key="profession">{{profession}}</li>
      </ol>

      <span>Friends</span>
      <ol>
        <li v-for="friend in gnome.friends" :key="friend">{{friend}}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getSex(name) {
      let bowels = [...name.split(" ")[0]].filter(
        (x) => x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
      );
      let lastBowel = bowels[bowels.length - 1];
      return lastBowel == "a" || lastBowel == "i" ? "Female" : "Male";
    },
  },
  computed: {
    gnome() {
      return this.$store.getters.getGnomeById(this.$route.params.id);
    },
  },
};
</script>

<style scoped>
.icon {
  width: 30px;
  height: 30px;
}
.gnome-details {
  width: 600px;
  margin: 0 auto;
}

.info {
  position: relative;
  left: 30px;
}

img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  float: left;
}

li {
  list-style-type: square;
}

span {
  font-weight: bolder;
}
</style>