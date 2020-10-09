<template>
  <div class="tyBox">
    <div class="tyFormBox">
      <div class="tyTabDiv">
        <span class="active">移动号码登录</span>
        <span>身份证登录</span>
      </div>
      <div class="js_panel">
        <div class="tyFormDiv">
          <input type="text" id="cbNum" v-model='name' placeholder="请输入有宽带的移动号码">
          <input type="text" id="smsCode" v-model='tel' style="width: 65%;" placeholder="请输入验证码">
          <div class="sms-code content" style="width: 35%;">发送验证码</div>
        </div>
        <button class="tyFormSubimt" id="getBByCNum" @click="add">去办理</button>

      </div>
      <div class="js_panel hide">
        <div class="tyFormDiv">
          <input id="name" type="text" placeholder="请输入机主真实姓名">
          <input id="ID_num" type="text" placeholder="请输入机主18位身份证号">
        </div>
        <button class="tyFormSubimt" id="getB">查找宽带账号</button>
      </div>
    </div>
    <div class="bNumLogin hide">
      <div class="tyTabDiv" style="background: rgba(0, 0, 0, 0);">
        <span class="active" style="width: 100%;">宽带服务号码登录</span>
      </div>
      <div class="">
        <div class="tyFormDiv">
          <input type="text" id="realName" v-model='name' placeholder="请输入机主真实姓名">
          <input type="text" id="realbNum" v-model='tel' placeholder="请输入以B开头的宽带服务号码">
        </div>
        <button class="tyFormSubimt" id="getBByName">去办理</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    props:{
      addMessage: {
        type: Function
      }
    },
    data() {
      return {name: '', tel: ''}
    },
    methods: {
      add() {
        //根据收集的数据，检查
        const name = this.name.trim();
        console.log(this.name);

        const tel = this.tel.trim();

        if (!name || !tel) {
          alert("空");
          return;
        }

        //->封装message
        const message = {
          name,
          tel
        }

        //添加到messages中
        this.addMessage(message);

        //清楚数据
        this.name='';
        this.tel='';


      }
    }
  }
</script>

<style scoped>

</style>
