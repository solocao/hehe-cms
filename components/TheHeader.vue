<template>
  <header class="main-header">
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
  left: 0px;
  width: 100%;
  background: #022d30;

  .main_header {
    .nav-links {
    }
  }
}
</style>
