<template>
  <div class="user-hover-card">
    <ul class="c-ul">
      <li>我的订单</li>
      <li>收货地址</li>
      <li>售后服务</li>
      <li>退出登录</li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
.user-hover-card {
  z-index: 9999;
  position: absolute;
  right: -47px;
  top: 45px;
  width: 120px;
  background: white;
  box-shadow: 2px 2px 2px #F3F4F5;

  .c-ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    li {
      width: 100%;
      height: 30px;
      list-style: none;
      padding: 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        cursor: pointer;
        background: #F3F4F5;
      }
    }
  }
}
</style>
