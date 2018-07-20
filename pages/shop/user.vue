<template>
  <div class="user-shop-info">
    <row>
      <Col span="4">
      <div class="user-shop-box">
        <Card :bordered="false">
          <p slot="title">我的</p>
          <div class="user-shop-container">
            <ul>
              <li @click="switchTab('cart')">
                <span>我的购物车</span>
              </li>
              <li @click="switchTab('order')">
                <span>我的订单</span>
              </li>
              <li @click="switchTab('info')">
                <span>账户资料</span>
              </li>
              <li @click="switchTab('address')">
                <span>收货地址</span>
              </li>
            </ul>
          </div>
        </Card>

      </div>
      </Col>
      <Col class="shop-tab" span="20">
      <!-- <shop-cart v-if="activeTab==='cart'"></shop-cart> -->
      <shop-list v-if="activeTab==='order'"></shop-list>
      <user-address v-if="activeTab==='address'"></user-address>
      </Col>
    </row>
  </div>
</template>
<script>
import ShopOrder from '../../components/ShopOrder.vue';
import ShopList from '../../components/ShopList.vue';
import UserAddress from '../../components/shop/UserAddress.vue';
import ShopCart from './cart.vue';
export default {
  data() {
    return {
      activeTab: 'cart'
    }
  },
  layout: 'shop',
  components: {
    ShopOrder,
    ShopList,
    UserAddress,
    ShopCart
  },
  methods: {
    switchTab(active) {
      this.activeTab = active
    }
  }

}
</script>
<style lang="stylus">
.user-shop-info {
  width: 1200px;
  margin: 0 auto;

  .user-shop-box {
    background: white;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);

    .user-shop-header {
      height: 60px;
    }

    .user-shop-container {
      li {
        list-style: none;
        position: relative;
        height: 48px;
        border-bottom: 1px solid #ebebeb;
        line-height: 48px;
        font-style: normal;
        text-decoration: none;
        color: #009a61;
        transition: all 0.15s ease-out;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          cursor: pointer;
        }
      }
    }
  }

  .shop-tab {
    padding-left: 20px;
  }
}
</style>
