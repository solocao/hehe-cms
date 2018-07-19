<template>
  <div class="shop-item">
    <p>{{ item.name }}</p>
    <span class="salepill" v-if="true">Sale</span>
    <img style="width:200px;height:180px" :src="item.img_list[0].url" :alt="`Image of ${item.name}`">
    <p>{{ item.sale_price | usdollar }}</p>
    <div class="btn-group">
      <button class="btn-add" @click="go">查看</button>
      <a target="_blank" :href="item.link">
        <button class="btn-add">立即购买</button>
      </a>
    </div>
    <div class="love-icon">
      <Icon type="heart" :size="36" :color="heartColor(item._id)" @click="lightHeart(item._id)"></Icon>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  filters: {
    usdollar: function (value) {
      return `$${value}`;
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
    async   lightHeart(productID) {
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
    go() {
      const { _id } = this.item
      this.$router.push({
        path: '/shop/' + _id
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.shop-item {
  border-radius: 4px;
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  p {
    font-size: 18px;
  }

  .salepill {
    background: rgb(232, 35, 25);
    color: white;
    font-family: 'Barlow', sans-serif;
    position: absolute;
    right: 30px;
    top: 60px;
    padding: 2px 10px 4px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    border-radius: 1000px;
  }

  .btn-group {
    display: flex;
    justify-content: space-between;
  }

  .love-icon {
    position: absolute;
    left: 10px;
    top: 8px;
    cursor: pointer;
  }
}

.btn-add {
  padding: 5px 10px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 1000px;
  width: 100px;
  cursor: pointer;
  background: #fff;
  color: #3e64ea;
  border: 1px solid #3e64ea;
  font-family: Barlow, sans-serif;
  text-transform: uppercase;
  margin: 10px;
  -webkit-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;

  &:hover {
    background: #3e64ea;
    color: white;
  }
}
</style>
