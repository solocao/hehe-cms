<template>
  <div class="shop-user-address">
    <Card>
      <p slot="title">
        <Icon type="location"></Icon>
        地址
      </p>
      <a href="#" slot="extra" @click.prevent="changeLimit">
        <Button slot="extra" class="shop-address-btn" @click.native="minusItem(item)" type="ghost" size="small">新增
        </Button>
      </a>
      <div class="cart-container">
        <Row class="cart-title">
          <Col span="12">
          <span>地址</span>
          </Col>
          <Col span="3">
          <span>姓名</span>
          </Col>
          <Col span="3">
          <span>手机</span>
          </Col>

          <Col span="6">
          <span>操作</span>
          </Col>
        </Row>
        <Row class="cart-item" v-for="item in addresses" :key="item.index">
          <Col span="12">
          <div class="cart-info">
            <div>
              <span>{{item.address}}</span>
            </div>
          </div>
          </Col>
          <Col span="3">
          <div>
            <span>{{item.name}}</span>
          </div>
          </Col>
          <Col span="3"> {{item.mobile}}
          </Col>

          <Col span="6">
          <div>
            <Button class="shop-address-btn" @click.native="minusItem(item)" type="ghost" size="small">
              设为默认
            </Button>
            <Button class="shop-address-btn" @click.native="minusItem(item)" type="ghost" size="small">
              修改
            </Button>
            <Button class="shop-address-btn" @click.native="addItem(item)" type="ghost" size="small">
              删除
            </Button>
          </div>
          </Col>
        </Row>
      </div>
    </Card>

  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  layout: 'shop',
  data() {
    return {
      addresses: []
    }
  },
  computed: {
    ...mapState(['cart']),
    totalPrice() {
      let totalPrice = 0
      this.cart.forEach((x) => {
        totalPrice = totalPrice + x.price * x.count
      })
      return totalPrice
    }
  },
  methods: {
    async addressList() {
      const params = {
        url: 'address/list',
        payload: {},
        auth: true
      }
      const result = await this.get(params)
      this.addresses = result.data
      console.log('看看结果')
      console.log(result)
    },

    addItem(item) {
      this.$store.commit('addItem', item);
    },
    minusItem(item) {
      this.$store.commit('minusItem', item);
    }
  },
  mounted() {
    this.addressList()
  }

}
</script>

<style lang="stylus">
.shop-user-address {
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
      line-height: 80px;
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

.shop-address-btn {
  margin-right: 5px;
}
</style>
