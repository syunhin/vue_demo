<template>
  <div id="transaction_div" class="dislayb div-index">
    <Show/>
    <Login/>
    <List :messages="messages"/>
  </div>
</template>

<script>
  import Login from './components/Login.vue'
  import Show from './components/Show.vue'
  import List from './components/List.vue'

  export default {
    name: "App",
    components: {Login, Show, List},
    data() {
      return {
        messages: [
          {
            name: 'sunxuan',
            tel: '15513620015'
          }, {
            name: 'houjj',
            tel: '13521514954'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
