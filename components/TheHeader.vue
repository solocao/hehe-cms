<template>
  <header class="main-header">
    <div style="height:50px;width:100%;background:blue">
      网站头部
    </div>
    <affix class="sidebar-menu" relative-element-selector="#example-content">
      <div style="height:50px;width:100%;background:yellow">
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
<style lang="stylus" scoped>
.main_header {
  position: fixed;
  top: 0px;
  s;
  left: 0px;
  width: 100%;
  background: #022d30;

  .main_header {
    .nav-links {
    }
  }
}
</style>
