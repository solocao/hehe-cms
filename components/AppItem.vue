<template>
  <div class="item" style="width:290px;height:340px">
    <p>{{ item.name }}</p>
    <span class="salepill" v-if="item.sale">Sale</span>
    <img style="width:200px;height:180px" :src="item.img_list[0]" :alt="`Image of ${item.name}`">
    <p>{{ item.sale_price | usdollar }}</p>
    <div class="btn-group">
      <button class="btn-add" @click="go(item)">查看</button>
      <button class="btn-add" @click="addItem">加入购物车</button>
    </div>
  </div>
</template>

<script>
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
  methods: {
    addItem() {
      this.$store.commit('addItem', this.item);
    },
    go(item) {
      const { _id } = item
      this.$router.push({
        path: '/shop/' + _id
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.item {
  border-radius: 5px;
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
