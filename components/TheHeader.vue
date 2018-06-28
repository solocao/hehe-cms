<template>
  <header class="main-header">
    <div class="info">
      网站头部 搜索相关
    </div>
    <affix relative-element-selector="#example-content">
      <div class="nav">
        <ul>
          <li>
            <span>首页</span>
          </li>
          <li>
            <span>明星</span>
          </li>
        </ul>
      </div>
    </affix>
  </header>
</template>
<style lang="stylus">
@import '../style/var.styl';

.main-header {
  .info {
    height: 50px;
    width: 100%;
    background: white;
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
