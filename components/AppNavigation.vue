<template>
  <div class="navarea-shop">
    <div class="nav">
      <div class="capsule">
        <nuxt-link class="title" exact to="/">
          潮鞋前线
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
        <div>
          <!-- 购物车图标 -->
          <div class="cartitem" @mouseover="showCart=true" @mouseout="showCart=false">
            <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
            <span style="width:40px;height:40px">
              <nuxt-link to="/cart">
                <Icon type="ios-cart" size=30></Icon>
              </nuxt-link>
            </span>
            <transition name="slide-fade">
              <shop-cart v-show="showCart"></shop-cart>
            </transition>
          </div>
          <nuxt-link to="/cart">
            <div class="cartitem">
              <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
              <span style="width:40px;height:40px">
                <Icon type="person" size=30></Icon>
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <shop-header></shop-header>
  </div>
</template>
<script>
import ShopCart from './ShopCart.vue'
import ShopHeader from './ShopHeader.vue'
export default {
  data() {
    return {
      showCart: false
    }
  },
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

    .title {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .nav {
    width: 100vw;
    height: 60px;
    background: #fdf1f136;
    display: flex;
    align-items: center;
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

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
