<template>
  <Card :bordered="false">
    <p slot="title">我的订单</p>
    <a href="#" slot="extra" @click="orderList">
      <Icon type="ios-loop-strong"></Icon>
      刷新
    </a>
    <div class="shop-order-list" v-for="order in orders">
      <Row class="shop-order-title">
        <Col span="12">
        <span> 2018-02-12 22:01:13 订单号： 229880</span>
        </Col>
        <Col span="3">
        <span>单价</span>
        </Col>
        <Col span="3">
        <span>数量</span>
        </Col>
        <Col span="3">
        <span>付款金额</span>
        </Col>
        <Col span="3">
        <span>交易状态</span>
        </Col>
      </Row>
      <Row class="shop-order-item" v-for="(product,index) in order.product_list">
        <Col span="12">
        <img :src="product.img" alt="">
        <div>
          <span>{{product.name}} </span>
        </div>

        </Col>
        <Col span="3">
        <span>{{product.price}}</span>
        </Col>
        <Col span="3">
        <span>{{product.count}}</span>
        </Col>
        <Col span="3" v-if="index===0">
        <span>{{order.total_price}}</span>
        </Col>
        <Col span="3" v-if="index===0">
        <span>待付款</span>
        </Col>
      </Row>
    </div>
  </Card>
</template>
<script>
export default {
  data() {
    return {
      orders: []
    }
  },
  methods: {
    async  orderList() {
      const params = {
        url: 'order/list',
        payload: {
          admin: 0
        },
        auth: true
      }
      const result = await this.post(params)
      this.orders = result.data
      console.log('看看结果')
      console.log(result)
    }
  },
  mounted() {
    this.orderList()
  }

}
</script>

<style lang="stylus">
.shop-order-list {
  .shop-order-title {
    display: flex;
    align-items: center;
    height: 36px;
    border-bottom: 1px solid #ebebeb;
    font-size: 12px;
    font-weight: bold;
  }

  .shop-order-item {
    display: flex;
    align-items: center;
    height: 100px;
    background: white;
    font-size: 12px;

    img {
      width: 80px;
      height: 80px;
      border: 1px solid #ebebeb;
      margin-right: 20px;
      float: left;
    }

    div {
      float: left;
    }
  }
}
</style>
