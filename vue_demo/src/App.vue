<template>
  <div id="transaction_div" class="dislayb div-index">
    <Show/>
    <Dialog/>
    <Login :addMessage="addMessage"/>
    <List :messages="messages" :delMessage="delMessage"/>
  </div>
</template>

<script>
  import Login from './components/Login.vue'
  import Show from './components/Show.vue'
  import List from './components/List.vue'
  import Dialog from "./components/Dialog";

  export default {
    name: "App",
    components: {Login, Show, List,Dialog},
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
    },
    methods:{//在app上定义了messages，则操作messages的相关方法就要定义在app
      addMessage(message){
        this.messages.unshift(message);
      },
      delMessage(index){
        this.messages.splice(index,1);
      }
    }
  }
</script>

<style scoped>

</style>
