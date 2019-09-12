<template>
  <div>
    <SearchData />
    <table class="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in this.$store.getters.users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.location }}</td>
          <td>{{ user.currency }}</td>
        </tr>
        <tr v-if="isEmpty">Nothing to show...</tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import SearchData from "./SearchData";

  export default {
    components: {
      SearchData
    },
    computed: {
      isEmpty: function () {
        return this.$store.getters.users.length === 0;
      }
    }
  }
</script>

<style scoped>
  .user-table {
    border: 1px solid #4c4c4c;
    width: 600px;
  }

  thead th {
    text-align: left;
  }
</style>
