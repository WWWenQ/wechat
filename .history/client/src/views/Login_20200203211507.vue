<template>
  <div class="login">
    <div class="title">用户登录</div>
    <div class="content">
      <!-- 表单 -->
      <form>
      <InputGroup 
        label="账号"
        placeholder="请填写邮箱"
        v-model="user.email"
      />
      <InputGroup 
        label="密码"
        placeholder="请填写密码"
        v-model="user.password"
        type="password"
      />
      </form>
    <div class="but_wrap">
        <YButton :disabled="isDisabled" @click="loginClick">登录</YButton>
    </div>

    </div>
    <div class="footer_wrap">
      |
      <button class="register" @click="$router.push('/register')">注册账号</button>|
    </div>
  </div>
</template>

<script>
import InputGroup from "../components/InputGroup";
import YButton from "../components/YButton"
export default {
  name: "login",
  components: {
    InputGroup,
    YButton
  },
  computed:{
      isDisabled(){
          if(this.email&&this.password){
              return false
          }else{
              return true
          }
      }
  },
  data(){
      return{
          user:{
              email:"",
              password:""
          }
      }
  },
  
};
</script>


<style scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
}
.title {
  margin-top: 80px;
  font-size: 22px;
  text-align: center;
}
.footer_wrap {
  position: absolute;
  left: 0;
  bottom: 16px;
  text-align: center;
  width: 100%;
  color: #888;
}
.footer_wrap .register {
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #7b8ca9;
}
.content,
.btn_wrap {
  margin-top: 30px;
}
</style>
