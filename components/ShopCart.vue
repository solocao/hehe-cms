<template>
  <div class="shop-cart">
    <div class="empty">

    </div>
    <div class="detail">
      <div class="item">
        <div>
          <img src="http://www.aaebike.com:9090/data/img/2ada81_1513910170835.jpg" alt="">
        </div>
        <div class="info">
          <div class="name">
            阿迪达斯限量
          </div>
          <div class="type">
            白色
          </div>
          <div class="price">
            <span>¥</span>
            <span>4500</span>
          </div>
        </div>
        <div class="cart-operate">
          <Button type="ghost" size="small" shape="circle" icon="android-remove"></Button>
          <span>1</span>
          <Button type="ghost" size="small" shape="circle" icon="android-add"></Button>
        </div>

      </div>
      <Row class="cart-footer">
        <Col span="16">
        <div class="count">
          共2件商品
        </div>
        <div class="price">
          <span>合计</span>
          <span>5009元</span>
        </div>
        </Col>
        <Col span="8">
        <button class="shop-btn">去购物车</button>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
.shop-cart {
  z-index: 9999;
  position: absolute;
  right: 40px;
  width: 360px;
  background: white;
  display: flex;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

  // 空购物车
  .empty {
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
