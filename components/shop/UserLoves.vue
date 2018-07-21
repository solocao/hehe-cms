<template>
  <div class="user-loves">
    <Card :bordered="false">
      <p slot="title">我的订单</p>
      <a href="#" slot="extra" @click="lovesList">
        <Icon type="ios-loop-strong"></Icon>
        刷新
      </a>
      <Row class="love-order-title">
        <Col span="12">
        <span>商品</span>
        </Col>
        <Col span="3">
        <span>单价</span>
        </Col>
        <Col span="3">
        <span>日期</span>
        </Col>
        <Col span="6">
        <span>操作</span>
        </Col>
      </Row>
      <div class="shop-order-list" v-for="love in lovesL" :key="love.id">
        <Row class="shop-order-item">
          <Col span="12">
          <img :src="love.product_id.img_list[0].url" alt="">
          <div>
            <span>{{love.product_id.name}} </span>
          </div>
          </Col>
          <Col span="3">
          <span>{{love.product_id.sale_price}}</span>
          </Col>
          <Col span="3">
          <span>{{love.create_at}}</span>
          </Col>
          <Col span="3" v-if="index===0">
          <span>{{love.sale_price}}</span>
          </Col>
          <Col>
          <div class="love-icon">
            <Icon type="heart" :size="36" :color="heartColor(love.product_id._id)" @click="lightHeart(love.product_id._id)"></Icon>
          </div>
          </Col>
        </Row>
      </div>
    </Card>

  </div>

</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
      lovesL: []
    }
  },
  computed: {
    ...mapState(['loves'])

  },
  methods: {
    ...mapMutations({
      set: 'set'
    }),
    heartColor(productID) {
      if (this.loves.findIndex(x => x === productID) > -1) {
        return 'red'
      } else {
        return '#EEEFF0'
      }
    },
    // 点亮小爱心
    async  lightHeart(productID) {
      const index = this.loves.findIndex(x => x === productID)
      if (index > -1) {
        this.loves.splice(index, 1)
        this.set({ loves: this.loves })
        const params = {
          url: 'user/loves/delete',
          payload: {
            product_id: productID
          },
          auth: true
        }
        const result = await this.post(params)
        console.log(result)
      } else {
        this.loves.push(productID)
        this.set({ loves: this.loves })
        // 后台新增
        const params = {
          url: 'user/loves/add',
          payload: {
            product_id: productID
          },
          auth: true
        }
        const result = await this.post(params)
        console.log(result)
      }
    },
    async  lovesList() {
      const params = {
        url: 'user/loves/list',
        payload: {
        },
        auth: true
      }
      const result = await this.get(params)
      this.lovesL = result.data
      console.log('看看结果')
      console.log(result)
    }
  },
  mounted() {
    this.lovesList()
  }

}
</script>

<style lang="stylus">
.love-order-title {
  display: flex;
  align-items: center;
  height: 36px;
  border-bottom: 1px solid #ebebeb;
  font-size: 12px;
  font-weight: bold;
}

.shop-order-list {
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

.love-icon {
  cursor: pointer;
}
</style>
