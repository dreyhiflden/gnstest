<template>
  <div id="app">
    <UserTable />
  </div>
</template>

<script>
import UserTable from './components/UserTable.vue'

export default {
  name: 'app',
  components: {
    UserTable
  },
  created() {

  }
}
</script>

<style>
  html, body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
