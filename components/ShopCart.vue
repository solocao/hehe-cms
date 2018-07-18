<template>
  <div class="shop-cart">
    <div class="empty" v-if="cart.length==0">
      你的购物车空空如野
    </div>
    <div class="detail" v-else>
      <div class="item" v-for="item in $store.state.cart" :key="item.id">
        <div>
          <img :src="item.img" alt="">
        </div>
        <div class="info">
          <div class="name">
            {{item.name}}
          </div>
          <div class="type">
            白色
          </div>
          <div class="price">
            <span>¥</span>
            <span>{{item.price}}</span>
          </div>
        </div>
        <div class="cart-operate">
          <Button @click.native="minusItem(item)" type="ghost" size="small" shape="circle" icon="android-remove"></Button>
          <span>{{item.count}}</span>
          <Button @click.native="addItem(item)" type="ghost" size="small" shape="circle" icon="android-add"></Button>
        </div>
      </div>
      <Row class="cart-footer">
        <Col span="16">
        <div class="count">
          共{{totalCount}}件商品
        </div>
        <div class="price">
          <span>合计</span>
          <span>{{totalPrice}}元</span>
        </div>
        </Col>
        <Col span="8">
        <nuxt-link class="title" exact to="/shop/cart">
          <button class="shop-btn">去购物车</button>
        </nuxt-link>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['cart']),
    totalPrice() {
      let totalPrice = 0
      this.cart.forEach((x) => {
        totalPrice = totalPrice + x.price * x.count
      })
      return totalPrice
    },
    totalCount() {
      let totalCount = 0
      this.cart.forEach((x) => {
        totalCount = totalCount + x.count
      })
      return totalCount
    }

  },

  methods: {
    addItem(item) {
      this.$store.commit('addItem', item);
    },
    minusItem(item) {
      this.$store.commit('minusItem', item);
    }
  }

}
</script>
<style lang="stylus">
.shop-cart {
  z-index: 9999;
  position: absolute;
  right: 0px;
  top: 44px;
  width: 360px;
  background: white;
  display: flex;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

  // 空购物车
  .empty {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weigth: bold;
  }

  // 详情
  .detail {
    width: 100%;

    .item {
      height: 100px;
      padding: 8px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #d6d6d6;

      img {
        width: 80px;
        height: 80px;
        border-radius: 2px;
        border: 1px solid #d6d6d6;
      }

      .info {
        margin-top: -6px;
        margin-left: 18px;
        height: 80px;
        width: 168px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .name {
          font-size: 14px;
          color: #3e64ea;
        }

        .type {
          font-size: 13px;
          color: #495060;
        }

        .price {
          font-size: 16px;
          font-weight: bold;
          color: rgb(232, 35, 25);
        }
      }

      .cart-operate {
        float: right;

        span {
          font-size: 14px;
          margin: 0px 6px;
        }
      }
    }

    .fotter {
    }
  }

  // 底部栏目
  .cart-footer {
    height: 70px;
    width: 100%;
    background: #F7F7F7;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 12px;

    .count {
    }

    .price {
      font-size: 16px;
      font-weight: bold;
      color: rgb(232, 35, 25);
    }

    .shop-btn {
      padding: 5px 10px;
      font-size: 13px;
      font-weight: 500;
      border-radius: 1000px;
      width: 84px;
      cursor: pointer;
      background: #fff;
      color: #3e64ea;
      border: 1px solid #3e64ea;
      font-family: Barlow, sans-serif;
      text-transform: uppercase;
      margin: 10px;
      -webkit-transition: all 0.15s ease-out;
      transition: all 0.15s ease-out;
      float: right;
    }
  }
}
</style>
