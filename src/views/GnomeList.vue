<template>
  <div class="gnome-list">
    <label for>Search</label>
    <input v-model="searchText" />
    <ul>
      <li class="bc-primary-2" v-for="gnome in getGnomes.filter(filterGnome)" :key="gnome.id">
        <router-link :to="{ name: 'GnomeDetails', params: { id: gnome.id }}">
          <img :src="gnome.thumbnail" />
          {{gnome.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    filterGnome(gnome) {
      return (
        gnome.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        gnome.professions.includes(this.searchText)
      );
    },
  },
  computed: {
    ...mapGetters(["getGnomes"]),
  }
};
</script>

<style scoped>

.gnome-list {
  width: 600px;
  margin: 0 auto;
}

img {
  width: 30px;
  height: 30px;
  object-fit: cover;
}

li:hover {
  background-color: #828089;
}
</style>