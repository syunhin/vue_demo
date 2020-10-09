<template>
  <li class="tyKdListLi">
    <div class="tyKdMsg"><span>{{message.name}}</span><span class="tyKdListSpan">{{message.tel}}</span></div>
    <i class="tyUserExit"></i><i @click="delItem">删除</i></li>
</template>

<script>
  export default {
    name: "Item",
    props: {
      message:Object,
      index:Number,
      delMessage:Function
    },methods:{
      delItem(){
        if(window.confirm(`确定要删除${this.message.name}吗?`)){
          this.delMessage(this.index);
        }
      }
    }

  }
</script>

<style scoped>

</style>
