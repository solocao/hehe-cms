<template>
  <div class="navarea-shop">
    <div class="nav">
      <div class="capsule">
        <nuxt-link exact to="/">
          老黑站
        </nuxt-link>
        <ul>
          <nuxt-link to="/women">
            <li>鞋子</li>
          </nuxt-link>
          <nuxt-link to="/men">
            <li>衣服</li>
          </nuxt-link>
          <nuxt-link to="/sale">
            <li>其他</li>
          </nuxt-link>
        </ul>
        <nuxt-link to="/cart">
          <div class="cartitem">
            <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
            <span style="width:50px;height:50px">
              <Icon type="ios-cart" size=40></Icon>
            </span>
            <shop-cart></shop-cart>
          </div>
        </nuxt-link>
      </div>
    </div>
    <shop-header></shop-header>
  </div>
</template>
<script>
import ShopCart from './ShopCart.vue'
import ShopHeader from './ShopHeader.vue'
export default {
  components: {
    ShopCart,
    ShopHeader

  },
  computed: {
    cartTotal() {
      return this.$store.state.cartTotal;
    }
  }
};
</script>

<style lang="stylus">
.navarea-shop {
  height: 120px;

  .capsule {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav {
    width: 100vw;
    height: 60px;
    background: #fdf1f136;
    background: grey;
  }

  ul {
    padding-left: 0;
    display: flex;
    list-style: none outside none;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 0 50px;
  }

  a, a:visited, a:active {
    text-decoration: none;
    color: black;
  }

  .cartitem {
    position: relative;
    float: right;
  }

  .cartcount {
    font-family: 'Barlow', sans-serif;
    position: absolute;
    background: #ff2211;
    color: white;
    text-align: center;
    padding-top: 4px;
    width: 20px;
    height: 20px;
    font-size: 10px;
    margin: -5px 0 0 20px;
    border-radius: 1000px;
    font-weight: 700;
  }
}
</style>
