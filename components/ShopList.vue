<template>
  <div class="shop-order-list">
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
    <Row class="shop-order-item">
      <Col span="12">

      <img src="http://www.aaebike.com:9090/data/img/b0ea1f_1513915289515.jpg" alt="">
      <div>
        <span> 2018-02-12 22:01:13 订单号： 229880</span>
      </div>

      </Col>
      <Col span="3">
      <span>$6799</span>
      </Col>
      <Col span="3">
      <span>2</span>
      </Col>
      <Col span="3">
      <span>$89879</span>
      </Col>
      <Col span="3">
      <span>待付款</span>
      </Col>
    </Row>
    哈哈哈 是个list
  </div>
</template>
<script>
export default {

}
</script>

<style lang="stylus">
.shop-order-list {
  padding-left: 20px;

  .shop-order-title {
    display: flex;
    align-items: center;
    height: 36px;
    background: #eee;
  }

  .shop-order-item {
    display: flex;
    align-items: center;
    height: 100px;
    background: white;

    img {
      width: 80px;
      height: 80px;
      border: 1px solid #ebebeb;
      margin: 0px 20px;
      float: left;
    }

    div {
      float: left;
    }
  }
}
</style>
