<template>
  <div>
    <input type="text" v-model="query" name="search" class="search-form">
  </div>
</template>

<script>
  export default {
    name: "SearchData",
    computed: {
      query: {
        get () {
          return this.$store.state.searchQuery
        },
        set (value) {
          this.$store.commit('setSearchQuery', value)
        }
      }
    }
  }
</script>

<style scoped>

</style>