<template>
  <div class="shop-user-address">
    <Card>
      <p slot="title">
        <Icon type="location"></Icon>
        地址
      </p>

      <Button slot="extra" class="shop-address-btn" @click="mode='add'" type="ghost" size="small">新增
      </Button>

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
            <Button class="shop-address-btn" @click.native="addressDefault(item.index)" type="ghost" size="small">
              {{address}} 设为默认{{item.active}}
            </Button>
            <Button class="shop-address-btn" @click.native="handleUpdate(item)" type="ghost" size="small">
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
    <Modal v-model="addressModel" :title="modelTitle" @on-ok="ok" @on-cancel="cancel">
      <Form :model="form" label-position="top">
        <FormItem label="收货人">
          <Input v-model="form.name"></Input>
        </FormItem>
        <FormItem label="联系电话">
          <Input v-model="form.mobile"></Input>
        </FormItem>
        <FormItem label="地址">
          <Input v-model="form.address"></Input>
        </FormItem>
      </Form>
    </Modal>

  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  layout: 'shop',
  data() {
    return {
      mode: null,
      addresses: [],
      form: {
        address: null,
        name: null,
        mobile: null
      }
    }
  },
  computed: {
    ...mapState(['cart']),
    addressModel() {
      if (this.mode === null) {
        return false
      } else {
        return true
      }
    },
    modelTitle() {
      if (this.mode === 'add') {
        return '新增'
      }
      if (this.mode === 'update') {
        return '编辑'
      }
    },
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

    ok() {
      if (this.mode === 'add') {
        this.addressAdd()
      }
      if (this.mode === 'update') {
        this.addressUpdate()
      }

      this.mode = null
    },
    cancel() {
      this.mode = null
    },

    addItem(item) {
      this.$store.commit('addItem', item);
    },
    minusItem(item) {
      this.$store.commit('minusItem', item);
    },
    async addressAdd() {
      const { name, mobile, address } = this.form
      const params = {
        url: 'address/add',
        payload: {
          name: name,
          mobile: mobile,
          address: address
        },
        auth: true
      }
      const result = await this.post(params)
      console.log(result)
      this.addressList()
    },
    addressRemove() {

    },

    async  addressDefault(index) {
      const params = {
        url: 'address/update',
        payload: {
          index,
          active: 1
        },
        auth: true
      }
      const result = await this.post(params)
      console.log(result)
      this.addressList()
    },
    async addressUpdate() {
      const { index, name, mobile, address } = this.form
      const params = {
        url: 'address/update',
        payload: {
          index,
          name,
          mobile,
          address
        },
        auth: true
      }
      const result = await this.post(params)
      console.log(result)
      this.addressList()
    },
    handleUpdate(item) {
      this.mode = 'update'
      this.form.name = item.name
      this.form.mobile = item.mobile
      this.form.address = item.address
      this.form.index = item.index
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
