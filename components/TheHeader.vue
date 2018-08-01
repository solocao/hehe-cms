<template>
  <header class="main-header">
    <div class="cms-title">
      <nuxt-link :to="`/`">
        企业信息网
      </nuxt-link>
    </div>
    <affix relative-element-selector="#example-content">
      <div class="nav">
        <ul>
          <li v-for="item in category">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
    </affix>
  </header>
</template>

<script>
export default {
  data() {
    return {
      category: ['首页', '资讯', '国内', '陕西', '党建', '财经', '公益', '汽车', '用车', '新车', '论文', '人物']

    }
  }
}
</script>

<style lang="stylus">
@import '../style/var.styl';

.main-header {
  background: white;
  width: 100%;

  .cms-title {
    height: 50px;
    width: 1200px;
    margin: 0px auto;
    background: white;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }

  .nav {
    height: 50px;
    background: white;
    box-shadow: 0px 2px 5px rgba(158, 158, 158, 0.15);

    &:before {
      content: '';
      display: block;
      height: 2px;
      background: linear-gradient(to right, #f3005c, #ffde00);
    }

    &:hover {
    }

    ul {
      // 把前面的小圆点点弄没
      list-style: none;
      width: content-max;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;

      li {
        padding-right: 30px;

        span {
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
