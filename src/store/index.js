import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gnomes: []
  },
  mutations: {
    setGnomes(state, gnomes) {
      state.gnomes = gnomes
    }
  },
  actions: {
    getGnomesFromSource({ commit }) {
      axios
        .get(
          "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
        )
        .then((response) => {
          commit('setGnomes', response.data.Brastlewark);
        });


    }
  },
  getters: {
    getGnomes: state => state.gnomes,
    getGnomeById: state => id => state.gnomes.find(x => x.id == id),
    getGnomeByName: state => name => state.gnomes.find(x => x.name == name)
  }
})
