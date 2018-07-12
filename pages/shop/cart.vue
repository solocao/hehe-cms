<template>
  <div class="shop-cart-wrapper">
    <Card>
      <p slot="title">
        <Icon type="location"></Icon>
        购物车清单
      </p>
      <a href="#" slot="extra" @click.prevent="changeLimit">
        <Icon type="ios-loop-strong"></Icon>
        刷新
      </a>
      <div class="cart-container">
        <Row class="cart-title">
          <Col span="12">
          <span>商品信息</span>
          </Col>
          <Col span="3">
          <span>单价</span>
          </Col>
          <Col span="3">
          <span>数量</span>
          </Col>
          <Col span="3">
          <span>小计</span>
          </Col>
          <Col span="3">
          <span>操作</span>
          </Col>
        </Row>
        <Row class="cart-item" v-for="item in cart" :key="item.id">
          <Col span="12">
          <div class="cart-info">
            <!-- {{item}} -->
            <img :src="item.img" alt="">
            <div>
              <span>{{item.name}}</span>
            </div>
          </div>
          </Col>
          <Col span="3">
          <div>
            <span>$</span>
            <span>{{item.price}}</span>
          </div>
          </Col>
          <Col span="3">
          <div class="cart-operate">
            <Button @click.native="minusItem(item)" type="ghost" size="small" shape="circle" icon="android-remove"></Button>
            <span>{{item.count}}</span>
            <Button @click.native="addItem(item)" type="ghost" size="small" shape="circle" icon="android-add"></Button>
          </div>
          </Col>
          <Col span="3">
          <span>小计</span>
          </Col>
          <Col span="3">
          <div>
            <Button type="ghost" size="small" shape="circle" icon="android-close"></Button>
          </div>
          </Col>
        </Row>
        <Row class="cart-title">
          <Col span="12">
          <span>收货地址</span>
          <Button size="small" type="ghost">修改收货地址</Button>
          </Col>
          <Col span="12">
          <span>总价</span>
          </Col>
        </Row>
        <Row style="margin-top:12px">
          <Col span="12" class="cart-address">
          <Row> 姓名：曹伟 手机：17768118595</Row>
          <Row>
            多伦多失去
          </Row>
          </Col>
          <Col span="12">
          <span class="big-price">
            {{totalPrice}}
          </span>
          </Col>
        </Row>
        <Row class="cart-footer">
          <button text="现在购买" class="btn-shop" style="float:right">立即下单</button>
        </Row>
      </div>
    </Card>

  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  layout: 'shop',
  computed: {
    ...mapState(['cart', 'user']),
    totalPrice() {
      let totalPrice = 0
      this.cart.forEach((x) => {
        totalPrice = totalPrice + x.price * x.count
      })
      return totalPrice
    },
    address() {
      const address = this.uers.addresses.find(x => x.active === 1)
      return address
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
.shop-cart-wrapper {
  width: 100%;
  margin: 0 auto;

  .cart-header {
    width: 100%;
    height: 60px;
  }

  .cart-container {
    .cart-title {
      position: relative;
      z-index: 1;
      line-height: 38px;
      height: 38px;
      font-size: 12px;
      border-bottom: 1px solid #dbdbdb;
      border-bottom-color: rgba(0, 0, 0, 0.08);
      font-weight: bold;
    }

    .cart-item {
      position: relative;
      z-index: 1;
      line-height: 100px;
      font-size: 12px;
      background: white;
      border-bottom: 1px solid #dbdbdb;
      border-bottom-color: rgba(0, 0, 0, 0.08);

      .cart-info {
        display: flex;
        align-items: center;
        padding-left: 10px;

        img {
          width: 80px;
          height: 80px;
          border-radius: 3px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
        }
      }

      .cart-operate {
        span {
          font-size: 14px;
          margin: 0px 6px;
        }
      }
    }

    width: 100%;
  }
}

.shop-address-item {
  width: 276px;
  height: 120px;
  margin: 0 0 30px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  background: #fafafa;
  line-height: 14px;
  text-align: left;
  word-wrap: break-word;
  word-break: normal;
  color: #626262;
  cursor: pointer;
  user-select: none;

  .address-field {
    padding: 2px;
    margin: 2px;
    font-size: 13px;
  }
}

.cart-footer {
  .btn-shop {
    width: 145px;
    height: 50px;
    line-height: 48px;
  }
}

.cart-address {
  font-size: 12px;
}

.big-price {
  font-size: 20px;
  font-weight: bold;
  color: red;
}
</style>
