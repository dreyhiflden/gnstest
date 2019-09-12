import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loading: true,
    searchQuery: "",
  },
  getters: {
    users: state => state.users.filter(user => user.name.toLowerCase().match(state.searchQuery.toLowerCase())),
    loading: state => state.loading,
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    },
    getFilteredUsers(state, query) {
      state.getters.users(state, query);
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    }
  },
  actions: {
    loadUsers({ commit }) {
      axios.get('test.json').then((response) => {
        commit('updateUsers', response.data);
        commit('changeLoadingState', false);
      })
    },
    updateSearchQuery({ commit }, query) {
      commit('getFilteredUsers', query)
    }
  }
});