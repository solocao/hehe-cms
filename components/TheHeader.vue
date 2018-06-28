<template>
  <header class="main-header">
    <div class="info">
      网站头部 搜索相关
    </div>
    <affix relative-element-selector="#example-content">
      <div class="nav">
        <ul>
          <li>首页</li>
          <li>民心</li>
        </ul>
        分类栏目
      </div>
    </affix>
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link to="/" tag="li">
          <a>所有</a>
        </nuxt-link>
        <nuxt-link to="/about" tag="li">
          <a>关于</a>
        </nuxt-link>
      </ul>

    </nav>

  </header>
</template>
<style lang="stylus">
@import '../style/var.styl';

.main-header {
  width: content-max;

  .info {
    height: 50px;
    width: 100%;
    background: white;
  }

  .nav {
    height: 50px;
    width: 100%;
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

      li {
        float: left;
      }
    }
  }
}
</style>
