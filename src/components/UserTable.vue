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
      </tbody>
    </table>
  </div>
</template>

<script>
  import SearchData from "./SearchData";

  export default {
    components: {SearchData},
  }
</script>

<style scoped>
 .user-table {
   border: 1px solid #4c4c4c;
 }
</style>
