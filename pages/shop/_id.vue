<!--商品详情-->
<template>
  <div class="store-content">
    <div class="gray-box">
      <div class="gallery-wrapper">
        <div class="gallery">
          <div class="thumbnail">
            <ul>
              <li v-for="item in product.img_list" :class="{on:big===item.url}" @click="big=item.url">
                <img :src="item.url" style="width:100%;height:100%">
              </li>
            </ul>
          </div>
          <div class="thumb">
            <div class="big">
              <img :src="big" :alt="product.name" style="width:100%;height:100%">
            </div>
          </div>
        </div>
      </div>
      <!--右边-->
      <div class="banner">
        <div class="sku-custom-title">
          <h4>{{product.name}}</h4>
          <h6>
            <span>{{product.description}}</span>
            <span class="price">
              <em>¥</em>
              <i>{{product.sale_price}}</i>
            </span>
          </h6>
        </div>
        <div class="num">
          <span class="params-name">数量</span>
          <!-- <buy-num @edit-num="editNum" :limit="Number(product.limit_num)"></buy-num> -->
        </div>
        <div class="buy">
          <button text="加入购物车" class="btn-shop" style="margin-right:10px">加入购物车</button>
          <button text="现在购买" class="btn-shop">现在购买</button>
        </div>
      </div>
    </div>
    <div v-html="product.content">
      {{product.content}}
    </div>
    <div>
      asfafas
    </div>
    <div v-html="product.content">
      {{product.content}}
    </div>
    <the-comment :postId="product._id"></the-comment>
  </div>
</template>
<script>
import TheComment from '../../components/utils/TheComment.vue'
export default {
  layout: 'shop',
  components: {
    TheComment
  },
  data() {
    return {

      value: null,
      productMsg: {},
      small: ['http://www.aaebike.com:9090/data/img/2ada81_1513910170835.jpg', 'http://www.aaebike.com:9090/data/img/6023d2_1513910177241.png', 'http://www.aaebike.com:9090/data/img/359ec8_1513910178921.jpg'],

      big: null,
      // { 'id': 3,
      //   'createTime': 1513910262000,
      //   'updateTime': 1516240474000,
      //   'delFlag': 0,
      //   'productName': 'C-Umi悠米',
      //   'description': '跑车式圆润造型，设计灵感来自跑车造型，线条圆润流畅，时尚中透出科技感，让人一见倾心；3.0-10真空胎，防震；可选颜色塔夫绸白 / 金属红 / 浅金属蓝 / 少女红',
      //   'brandId': 3,
      //   'marketPrice': 4399.0,
      //   'salePrice': 4399.0,
      //   'cover': 'http://www.aaebike.com:9090/data/img/167c08_1513910159315.jpg',
      //   'imgUrl': 'http://www.aaebike.com:9090/data/img/2ada81_1513910170835.jpg',
      //   'brandName': '新蕾',
      //   'imgUrlList': ['http://www.aaebike.com:9090/data/img/2ada81_1513910170835.jpg', 'http://www.aaebike.com:9090/data/img/6023d2_1513910177241.png', 'http://www.aaebike.com:9090/data/img/359ec8_1513910178921.jpg'] },
      product: {},
      productNum: 1,
      item: null
    };
  },
  // computed: {
  //   ...mapState(['login', 'showMoveImg', 'showCart'])
  // },
  methods: {

    async productDetail() {
      const id = this.$route.params.id;
      const params = {
        url: 'product/item/' + id,
        payload: {}
      }
      const result = await this.get(params)
      this.product = result.data
      this.big = this.product.img_list[0].url
      console.log('看看结果')
      console.log(this.product)
    }

    // ...mapMutations(['ADD_CART', 'ADD_ANIMATION', 'SHOW_CART'])
    // async getProductDetail(id) {
    //   const result = await productDetail(id);
    //   if (result.success) {
    //     this.small = result.data.imgUrlList.map(x => this.full(x));
    //     this.big = this.full(result.data.imgUrlList[0]);
    //     const product = result.data;
    //     this.productMsg = product.description;
    //     this.product = {
    //       productId: product.id,
    //       productName: product.name,
    //       salePrice: product.salePrice,
    //       sub_title: product.brandName,
    //       productImageBig: this.big
    //     };
    //   }
    // },
    // _productDet(productId) {
    //   productDet({ params: { productId } }).then(res => {
    //     let result = res.result;
    //     this.product = result;
    //     this.productMsg = result.productMsg || '';
    //     this.small = result.productImageSmall;
    //     this.big = this.small[0];
    //   });
    // },
    // addCart(id, price, name, img) {
    //   if (!this.showMoveImg) {
    //     // 动画是否在运动
    //     if (this.login) {
    //       // 登录了 直接存在用户名下
    //       addCart({ productId: id, productNum: this.productNum }).then(res => {
    //         // 并不重新请求数据
    //         this.ADD_CART({
    //           productId: id,
    //           productPrice: price,
    //           productName: name,
    //           productImg: img,
    //           productNum: this.productNum
    //         });
    //       });
    //     } else {
    //       // 未登录 vuex
    //       this.ADD_CART({
    //         productId: id,
    //         productPrice: price,
    //         productName: name,
    //         productImg: img,
    //         productNum: this.productNum
    //       });
    //     }
    //     // 加入购物车动画
    //     var dom = event.target;
    //     // 获取点击的坐标
    //     let elLeft = dom.getBoundingClientRect().left + dom.offsetWidth / 2;
    //     let elTop = dom.getBoundingClientRect().top + dom.offsetHeight / 2;
    //     // 需要触发
    //     this.ADD_ANIMATION({
    //       moveShow: true,
    //       elLeft: elLeft,
    //       elTop: elTop,
    //       img: img
    //     });
    //     if (!this.showCart) {
    //       this.SHOW_CART({ showCart: true });
    //     }
    //   }
    // },
    // checkout(productId) {
    //   this.$router.push({
    //     path: '/checkout',
    //     query: { productId, num: this.productNum }
    //   });
    // },
    // editNum(num) {
    //   this.productNum = num;
    // }
  },

  created() {
    const id = this.$route.params.id;
    console.log(id)

    // this.productDetail()
    // console.log()
    // let id = this.$route.query.productId;

    // this.$route.params.id
    // this.getProductDetail(id);
    // this._productDet(id);
  },
  mounted() {
    this.productDetail()
  }
};
</script>
<style lang="scss" scoped>
.store-content {
  clear: both;
  width: 1220px;
  padding: 0 0 25px;
  margin: 0 auto;
  .gray-box {
    background: white;
    display: flex;
    padding: 60px;
    border-radius: 4px;
    margin: 20px 0;
    .gallery-wrapper {
      .gallery {
        display: flex;
        width: 540px;

        .thumbnail {
          li:first-child {
            margin-top: 0px;
          }
          li {
            list-style: none;
            width: 80px;
            height: 80px;
            margin-top: 10px;
            padding: 0px;
            border: 1px solid #ccdb38;
            border-radius: 4px;
            overflow: hidden;
            cursor: pointer;
            &.on {
              padding: 10px;
              border: 3px solid #ccdb38;
            }
            img {
              display: block;
              width: 100%;
            }
          }
        }
        .thumb {
          .big {
            margin-left: 20px;
            width: 400px;
            height: 400px;
            border: 1px solid rgba(128, 128, 128, 0.178);
          }
          img {
            display: block;
            width: 400px;
          }
        }
      }
    }
    // 右边
    .banner {
      width: 450px;
      margin-left: 10px;
      h4 {
        font-size: 24px;
        line-height: 1.25;
        color: #000;
        margin-bottom: 13px;
      }
      h6 {
        font-size: 14px;
        line-height: 1.5;
        color: #bdbdbd;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .sku-custom-title {
        overflow: hidden;
        padding: 8px 8px 18px 10px;
        position: relative;
      }
      .params-name {
        padding-right: 20px;
        font-size: 14px;
        color: #8d8d8d;
        line-height: 36px;
      }
      .num {
        padding: 29px 0 8px 10px;
        border-top: 1px solid #ebebeb;
        display: flex;
        align-items: center;
      }
      .buy {
        position: relative;
        border-top: 1px solid #ebebeb;
        padding: 30px 0 0 10px;
      }
    }
  }
}

.no-info {
  padding: 200px 0;
  text-align: center;
  font-size: 30px;
}

.price {
  display: block;
  color: #d44d44;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  i {
    padding-left: 2px;
    font-size: 24px;
  }
}

.btn-shop {
  width: 145px;
  height: 50px;
  line-height: 48px;
}
</style>
