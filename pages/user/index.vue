<template>
  <div class="index">
    <transition name="zoom">
      <div class="login">
        <span class='login-title'>Fake House</span>
        <p>无人机飞行管理,我们更高效</p>
        <p>但,不仅如此</p>
        <transition name="fadeUp" mode="out-in">
          <i-button type="primary" long @click.stop="start" v-if="!isLogin" key="start">
            开始吧
          </i-button>
          <i-button type="success" long @click.stop="login" v-else key="login">登录</i-button>
        </transition>
        <transition name="fadeLeft">
          <div v-show="isLogin" v-click-outside="onClickOutside">
            <i-input size="large" placeholder="用户名,没有会自动注册" ref="user" v-model="username" @on-enter="login" style="margin-bottom:20px"></i-input>
            <i-input size="large" placeholder="密码" type="password" v-model="password" @on-enter="login"></i-input>
          </div>
        </transition>
      </div>
    </transition>
    <div class="section section-login" style="z-index: 6" :class="{'is-old': page > 0}">
      <transition name="fade">

        <div class="fullscreen" :class="{'is-login': isLogin}" ref="wallpaper" style="height: calc(100vh - 40px)"></div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
const crypto = require('crypto');
let resizeTimer

export default {
  name: 'index',
  data() {
    return {
      isLogin: false,
      page: 0,
      username: '',
      password: '',
      copyright: 'fake.house'
    }
  },
  asyncData({ store }) {
    return store.dispatch('wallpaper/FETCH')
  },
  mounted() {
    // alert(this.page)
    const img = new Image()
    img.src = 'https://www.google.co.jp/url?sa=i&source=images&cd=&ved=2ahUKEwiYvKy65qrcAhXUdt4KHRmlDAMQjRx6BAgBEAU&url=https%3A%2F%2Ffreewechat.com%2Fa%2FMzIwOTM0NjA0MQ%3D%3D%2F2247492440%2F1&psig=AOvVaw2Xm75iuBKR--rkaznl9vmJ&ust=1532077155197386'
    img.onload = () => {
      this.wallpaperVisible = true
    }
  },
  methods: {
    ...mapMutations({
      set: 'set'
    }),
    onClickOutside() {
      if (!this.username && !this.password) {
        this.isLogin = false
      }
    },
    start() {
      this.isLogin = true
      this.$nextTick(() => {
        this.$refs.user.focus()
      })
    },
    async login() {
      const parms = {
        url: '/user/login',
        payload: {
          name: this.username,
          password: crypto.createHash('md5').update(this.password).digest('hex')
        }
      }
      const result = await this.post(parms)
      if (result.code === 1) {
        this.set({ login: true, user: result.data })
        this.$router.push({
          path: '/shop'
        });
      } else {
        this.$Modal.confirm({
          title: '提示',
          content: '该用户不存在, 是否根据当前输入的用户名和密码注册用户?注：请妥善保管好你的密码，目前无法提供找回密码的通道。',
          onOk: () => {
            this.register()
          }
        })
      }
    },
    // 用户注册
    async register() {
      const params = {
        url: '/user/register',
        payload: {
          name: this.username,
          password: this.password
        }
      }
      const result = await this.post(params)
      if (result.code === 1) {
        this.set({ login: true, user: result.data, loves: result.data.loves })
        this.$router.push({
          path: '/shop'
        });
      } else {
        this.$Message.info(result.msg)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.index {
  color: #fff;

  .pagination {
    left: 40px;
    position: absolute;
    top: 50%;
    z-index: 2147483643;
    transform: translateY(-50%);

    .dot {
      border-radius: 50%;
      box-shadow: inset 0 0 0 3px #fff;
      cursor: pointer;
      height: 16px;
      margin-bottom: 10px;
      opacity: 0.4;
      position: relative;
      width: 16px;
      box-sizing: border-box;
    }

    .dot.active {
      background: #fff;
      box-shadow: none;
    }

    .dot:hover, .dot.active {
      opacity: 1;
    }
  }

  .login {
    display: block;
    left: 50%;
    margin-top: -165px;
    margin-left: -150px;
    position: absolute;
    top: 50%;
    width: 300px;
    box-sizing: border-box;
    z-index: 7;
    text-align: center;
    font-size: 17px;
    font-weight: 700;

    .login-title {
      width: 230px;
      margin-bottom: 15px;
      font-size: 30px;
      font-weight: bold;
      color: white;
    }

    button {
      height: 45px;
      margin: 30px 0 20px 0;
    }

    input {
      margin-bottom: 10px;
      font-weight: 400;
    }

    input, input:hover, input:focus {
      border-color: #fff;
      box-shadow: none;
    }
  }

  .section {
    background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532003025437&di=0d70e163b8b8e578f65bdb375b7370ec&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F72f7ec7f1174a8b38b3034eb0c1fb30611a0f759.jpg');
    background-size: cover;
    color: #fff;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
    transform: translateY(0);
    transition: transform 0.7s cubic-bezier(0.825, 0, 0.5, 1);

    @when old {
      transform: translateY(-100%);
    }

    .section-login {
      a {
        color: #fff;
      }

      .fullscreen {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 45px;
        height: calc(100vh - 40px);
        background: url('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4146670445,1982894859&fm=27&gp=0.jpg');

        &:before {
          content: '';
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          opacity: 0.6;
          background-color: rgba(0, 0, 0, 0.3);
          transition: all 0.5s;
        }

        &.is-login:before {
          background-color: rgba(0, 0, 0, 1);
        }
      }

      .about-btn {
        background: #56bc8a;
        box-shadow: inset 0 3px 0 rgba(0, 0, 0, 0.1);
        bottom: -45px;
        color: #fff;
        cursor: pointer;
        height: 45px;
        font-weight: 700;
        left: 0;
        line-height: 45px;
        position: absolute;
        text-align: center;
        width: 100%;
        z-index: 2;
        transition: bottom 0.3s ease-out 1.7s;
        bottom: 0;
      }

      .links {
        position: absolute;
        bottom: 45px;
        padding: 0 12px;
        margin: 0 0 13px 0;
        line-height: 25px;
        z-index: 90210;
        transition: opacity 0.2s linear;
        text-align: left;
      }

      .fullscreen-by {
        position: absolute;
        bottom: 45px;
        padding: 0 12px;
        margin: 0 0 13px 0;
        line-height: 25px;
        z-index: 90210;
        transition: opacity 0.2s linear;
        text-align: left;
      }

      .fullscreen-by {
        right: 0;

        .avatar {
          display: inline-block;
          border-radius: 2px;
          vertical-align: -8px;
          margin: 0;
          padding: 0;
          height: 24px;
          width: 24px;
          background-size: cover;
          background-position: 50% 50%;
          background-size: 24px;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
          margin-left: 10px;
        }

        img {
          display: block;
          width: 24px;
          height: 24px;
        }
      }

      .link {
        display: inline-block;
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        padding-right: 5px;
        padding-left: 5px;
        margin-left: -5px;
        margin-right: 12px;
        font-weight: normal;
      }
    }
  }

  .section-about {
    text-align: left;

    .section-title {
      font-size: 38px;
      font-weight: 700;
    }

    .section-description {
      font-size: 18px;
      margin-bottom: 100px;
    }

    .feature-list {
      width: 70%;
      height: 570px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -285px;
      margin-left: -35%;
      font-size: 13px;
    }

    .ivu-col {
      min-height: 200px;
      margin-bottom: 20px;
    }

    .feature-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #fff;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      font-size: 22px;
      color: #2d8cf0;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

      img {
        width: 25px;
      }

      i {
        font-size: 32px;
      }
    }

    h2 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 10px;
      text-align: center;
    }
  }
}
</style>
