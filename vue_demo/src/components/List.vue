<template>
  <div>
    <img src="../../static/images/broadband_ty_renew/tyKdTitle.png" alt="" class="tyKdTitle">
    <ul class="tyKdList" id="tyKdList">
      <Item v-for="(message,index) in messages" :key="index" :message="message"/>
    </ul>
  </div>
</template>

<script>
  import Item from './Item'

  export default {
    name: "List",
    props: ['messages'], //声明接收属性，此属性就回变成了组件自己的属性。
    components: {
      Item
    }
  }
</script>

<style scoped>

</style>
