<template>
  <div>
    <SearchData />
    <table class="user-table">
      <thead>
        <tr>
          <th @click="sort('name')">Name</th>
          <th @click="sort('location')">Location</th>
          <th @click="sort('currency')">Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in sortedUsers" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.location }}</td>
          <td>{{ user.currency }}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td></td>
          <td>{{ totalCurrency }}</td>
        </tr>
        <tr v-if="isEmptyList">Nothing to show...</tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  import SearchData from "./SearchData";

  export default {
    components: { SearchData },
    computed: mapGetters(['sortedUsers', 'users', 'totalCurrency', 'isEmptyList']),
    methods: mapMutations(['sort']),
  }
</script>

<style scoped>
  .user-table {
    border: 1px solid #4c4c4c;
    width: 600px;
  }

  tr {
    border: 1px solid black;
  }

  thead th {
    text-align: left;
  }
</style>
