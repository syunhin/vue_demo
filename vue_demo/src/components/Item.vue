<template>
  <li class="tyKdListLi">
    <div class="tyKdMsg"><span>{{message.name}}</span><span class="tyKdListSpan">{{message.tel}}</span></div>
    <i class="tyUserExit"></i></li>
</template>

<script>
  export default {
    name: "Item",
    props: ['message']
  }
</script>

<style scoped>

</style>
