import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loading: true,
    searchQuery: "",
    currentSort:'name',
    currentSortDir:'asc'
  },
  getters: {
    users: state => state.users.filter(user => user.name.toLowerCase().match(state.searchQuery.toLowerCase())
      || user.location.toLowerCase().match(state.searchQuery.toLowerCase())
      || user.currency.toString().match(state.searchQuery)),
    loading: state => state.loading,
    sortedUsers: function(state, getters) {
      return getters.users.sort((a, b) => {
        let modifier = 1;
        if(state.currentSortDir === 'desc') modifier = -1;
        if(a[state.currentSort] < b[state.currentSort]) return -1 * modifier;
        if(a[state.currentSort] > b[state.currentSort]) return 1 * modifier;
        return 0;
      })},
    totalCurrency: (state, getters) => getters.users.reduce((acc, user) => acc + user.currency, 0),
    isEmptyList: (state, getters) => getters.users.length === 0,
    getSearchQuery: (state) => state.searchQuery,
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
    },
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
    },
    sort(state, sortType) {
      if (sortType === state.currentSort) {
        state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      state.currentSort = sortType;
    }
  },
});
