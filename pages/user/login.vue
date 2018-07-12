<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>
          欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
              <Input v-model="form.userName" placeholder="请输入用户名">
              <span slot="prepend">
                <Icon :size="16" type="person"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码">
              <span slot="prepend">
                <Icon :size="14" type="locked"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>


<script>
import { mapMutations } from 'vuex';
const crypto = require('crypto');
export default {
  layout: 'none',
  data() {
    return {
      form: {
        userName: 'root',
        password: 'root'
      },
      rules: {
        userName: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    ...mapMutations({
      set: 'set'
    }),
    async handleSubmit() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          const parms = {
            url: '/user/login',
            payload: {
              name: this.form.userName,
              password: crypto.createHash('md5').update(this.form.password).digest('hex')
            }
          }
          const result = await this.post(parms)
          if (result.code === 1) {
            this.set({ login: true, user: result.data })
            console.log(result.data)
            this.$router.push({
              path: '/shop'
            });
          } else {
            this.$Message.info(result.msg)
          }
        }
      });
    }
  }
}
</script>
<style lang="stylus">
</style>
