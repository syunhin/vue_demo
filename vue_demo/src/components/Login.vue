<template>
  <div class="tyBox">
    <div class="tyFormBox">
      <div class="tyTabDiv">
        <span class="active">移动号码登录</span>
        <span>身份证登录</span>
      </div>
      <div class="js_panel">
        <div class="tyFormDiv">
          <input type="text" id="cbNum" placeholder="请输入有宽带的移动号码">
          <input type="text" id="smsCode" style="width: 65%;" placeholder="请输入验证码">
          <div class="sms-code content" style="width: 35%;">发送验证码</div>
        </div>
        <button class="tyFormSubimt" id="getBByCNum">去办理</button>

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
          <input type="text" id="realName" placeholder="请输入机主真实姓名">
          <input type="text" id="realbNum" placeholder="请输入以B开头的宽带服务号码">
        </div>
        <button class="tyFormSubimt" id="getBByName">去办理</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
