<template>
  <main class="capsule">
    <app-masthead/>
    <div class="contain">
      <app-sidebar :pricerange.sync="highprice" />
      <transition-group name="items" tag="section" class="content">
        <app-item v-for="(item, index) in products" :item="item" :key="item.id">
        </app-item>
      </transition-group>
    </div>
  </main>
</template>

<script>
import AppSidebar from '../../components/AppSidebar.vue';
import AppMasthead from '../../components/AppMasthead.vue';
import AppItem from '../../components/AppItem.vue';

export default {
  layout: 'shop',
  components: {
    AppSidebar,
    AppMasthead,
    AppItem
  },
  data() {
    return {
      highprice: 300,
      products: []
    };
  },
  computed: {
    // products() {
    //   return this.$store.state.products.filter(el =>
    //     this.$store.state.sale
    //       ? el.price < this.highprice && el.sale
    //       : el.price < this.highprice
    //   );
    // }
  },
  methods: {
    // 产品列表
    async productList() {
      const params = {
        url: 'product/list',
        payload: {}
      }
      const result = await this.post(params)
      this.products = result.data
      console.log(this.products)
      console.log('看看结果')
      console.log(result)
    }
  },
  mounted() {
    console.log('k俺看')
    console.log(this.$store)

    this.productList()

    this.products1 = [{ 'name': 'Khaki Suede Polish Work Boots', 'price': 149.99, 'category': 'women', 'sale': true, 'article': 'shoe', 'img': 'shoe1.png' }, { 'name': 'Camo Fang Backpack Jungle', 'price': 39.99, 'category': 'women', 'sale': false, 'article': 'jacket', 'img': 'jacket1.png' }, { 'name': 'Parka and Quilted Liner Jacket', 'price': 49.99, 'category': 'men', 'sale': true, 'article': 'jacket', 'img': 'jacket2.png' }, { 'name': 'Cotton Black Cap', 'price': 12.99, 'category': 'men', 'sale': true, 'article': 'hats', 'img': 'hat1.png' }, { 'name': 'Knit Sweater with Zips', 'price': 29.99, 'category': 'women', 'sale': false, 'article': 'sweater', 'img': 'sweater1.png' }, { 'name': 'Long Linen-blend Shirt', 'price': 18.99, 'category': 'men', 'sale': false, 'article': 'shirt', 'img': 'shirt1.png' }, { 'name': 'Knit Orange Sweater', 'price': 28.99, 'category': 'men', 'sale': false, 'article': 'sweater', 'img': 'sweater2.png' }, { 'name': 'Cotton Band-collar Blouse', 'price': 49.99, 'category': 'men', 'sale': false, 'article': 'shirt', 'img': 'shirt2.png' }, { 'name': 'Camo Fang Backpack Jungle', 'price': 59.99, 'category': 'women', 'sale': true, 'article': 'jacket', 'img': 'jacket3.png' }, { 'name': 'Golden Pilot Jacket', 'price': 129.99, 'category': 'women', 'sale': false, 'article': 'jacket', 'img': 'jacket4.png' }, { 'name': 'Spotted Patterned Sweater', 'price': 80.99, 'category': 'women', 'sale': false, 'article': 'jacket', 'img': 'sweater4.png' }, { 'name': 'Double Knit Sweater', 'price': 59.99, 'category': 'men', 'sale': true, 'article': 'jacket', 'img': 'sweater5.png' }]
    // this.productList()
  }
};
</script>

<style>
/* no grid support */
aside {
  float: left;
  width: 19.1489%;
}

.content {
  /*no grid support*/
  float: right;
  width: 79.7872%;
  /* grid */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0 !important;
}

@supports (display: grid) {
  .capsule > * {
    width: auto;
    margin: 0;
  }
}
</style>
