<template>
  <div>
    <label>Search: </label>
    <input type="text" v-model="getSearchQuery" @input="setSearchQuery($event.target.value)" name="search"
           class="search-form">
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: "SearchData",
    computed: mapGetters(['getSearchQuery']),
    methods: mapMutations(['setSearchQuery']),
  }
</script>

<style scoped>

</style>
