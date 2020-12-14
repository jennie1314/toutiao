<template>
  <div class="login">
    <van-nav-bar
      title="登录"
      left-arrow
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="userInfo.username"
        name="username"
        label="手机号"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="userInfo.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {

      }
    }
  }
</script>

<style lang="stylus">
  @import '../../assets/stylus/variable.styl'
  .van-nav-bar
    background $bgColor
    .van-nav-bar__title,.van-icon
      color #fff
</style>