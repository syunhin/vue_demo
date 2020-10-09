<template>
  <div>
    <img src="../../static/images/broadband_ty_renew/tyKdTitle.png" alt="" class="tyKdTitle">
    <h2 v-show="messages.length<1">空</h2>
    <ul class="tyKdList" id="tyKdList">
      <Item v-for="(message,index) in messages" :key="index" :message="message" :index="index" :delMessage="delMessage"/>
    </ul>
  </div>
</template>

<script>
  import Item from './Item'

  export default {
    name: "List",
    props: {
      messages: Array, delMessage: Function
    },
    components: {
      Item
    }
  }
</script>

<style scoped>

</style>
