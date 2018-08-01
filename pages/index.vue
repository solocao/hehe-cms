<template>
  <section class="index-container" id="example-content">
    <div style="width:100%;">
      <Row class="nav-header">
        <Col span="12">
        <nav-swiper></nav-swiper>
        </Col>
        <Col span="4" class="news-middle">
        <div class="item" v-for="item in threeThumb">
          <img :src="item.img" alt="">
          <div class="h-bottom">{{item.title}}</div>
        </div>
        </Col>
        <Col span="8" style="padding-left:6px">
        <div class="news-right">
          <div class="header">
            今日热点
          </div>
          <nuxt-link :to="`/article/${item._id}`" class="hot-div" v-for="(item,index) in hots" :key="index">
            <div class="hot-index" :class="hotClass(index)">{{index+1}}</div>
            <span class="hot-title">{{item.title}}</span>
          </nuxt-link>
        </div>

        </Col>
      </Row>
      <!-- 广告宣称位置 -->
      <Row class="nav-ad">
        <Col span="16" style="height:100%">
        <img style="width:100%;height:100%" src="http://www.qiye.gov.cn/d/a/a1.jpg" alt="">
        </Col>
        <Col span="8" style="height:100%">
        <img style="width:100%;height:100%" src="http://www.qiye.gov.cn/style/images/img3.jpg" alt="">
        </Col>
      </Row>

      <!-- 文章导读 -->
      <Row class="news-guide">
        <Col span="16" style="padding-right:3px">
        <div class="cms-card">
          <div class="cms-card-header">
            <h2 class="cms-card-title">
              <span>今日聚焦</span>
            </h2>
          </div>
          <Row class="color-line"></Row>
          <Row class="cms-card-content" v-if="focusArt!==null">
            <div class="item_wrap" v-for="(focus,index) in focusArt">
              <Row class="item">
                <Col span="9" style="height:100%">
                <img :src="focus.img_list[0].url" alt="">
                </Col>
                <Col span="15">
                <div class="c-title">
                  <a :href="`/article/${focus._id}`" target="_blank">{{focus.title}}</a>
                </div>
                <div class="content">
                  {{focus.description}}
                </div>
                </Col>

              </Row>
            </div>
          </Row>
        </div>

        </Col>
        <Col span="8" style="padding-left:3px">
        <!-- 企业经纬 -->
        <div class="cms-card" v-if="categoryData.length>0">
          <div class="cms-card-header">
            <h2 class="cms-card-title">
              <span>{{ categoryData[0].category}}</span>
            </h2>
          </div>
          <Row class="color-line"></Row>
          <Row class="cms-card-content">
            <div class="zixun-item" v-for="item in categoryData[0].data" style="font-size:14px">
              <!-- <span class="zixun-category">时政热点</span> -->
              <span class="zixun-title">
                <a :href="`/article/${item._id}`" target="_blank">{{item.title}}</a>
              </span>
            </div>
          </Row>
        </div>
        </Col>

      </Row>
      <!-- 广告宣称位置 -->
      <Row class="nav-ad">
        <Col span="16" style="height:100%">
        <img style="width:100%;height:100%" src="http://www.qiye.gov.cn/d/a/a1.jpg" alt="">
        </Col>
        <Col span="8" style="height:100%">
        <img style="width:100%;height:100%" src="http://www.qiye.gov.cn/style/images/img3.jpg" alt="">
        </Col>
      </Row>
      <!-- 分类信息 -->
      <Row style="margin-top:16px" v-if="categoryData.length>0">
        <Col span="8" style="padding-right:3px" v-for="(index,item) in 3" :key="index">
        <div class="cms-card">
          <div class="cms-card-header">
            <h2 class="cms-card-title">
              <span>{{categoryData[index-1].category}}</span>
            </h2>
          </div>
          <Row class="color-line"></Row>
          <Row class="cms-card-content">
            <div class="category-item" v-for="item in categoryData[index].data">
              <nuxt-link :to="`/article/${item._id}`">
                {{item.title}}
              </nuxt-link>
              <!-- <a :href="`/article/${item._id}`" target="_blank">fafafa</a> -->
            </div>
          </Row>
        </div>
        </Col>
      </Row>

      <!-- 文章热门 -->
      <Row class="news-hot" style="margin-top:16px">
        <Col span="16" style="padding-right:3px">
        <div class="cms-card">
          <div class="cms-card-header">
            <h2 class="cms-card-title">
              <span>企业新闻</span>
            </h2>
          </div>
          <Row class="color-line"></Row>
          <Row class="cms-card-content">
            <hot-recomment></hot-recomment>
          </Row>
        </div>

        <Row class="color-line"></Row>
        </Col>
        <Col span="8" style="padding-left:6px">
        <Affix :offset-top="60">
          <img style="width:100%" src="http://www.qiye.gov.cn/d/a/a4.jpg" alt="">
        </Affix>

        </Col>
      </Row>
    </div>
  </section>
</template>
<script>
import NavSwiper from '../components/NavSwiper.vue'
import HotRecomment from '../components/HotRecomment.vue'
export default {
  data() {
    return {
      threeThumb: [
        { title: '河水暴涨', img: 'http://www.chinanews.com/sh/2018/07-02/U397P4T8D8553588F107DT20180703144039.jpg', url: '' },
        { title: '河水暴涨', img: 'http://www.chinanews.com/sh/2018/07-02/U397P4T8D8553588F107DT20180703144039.jpg', url: '' },
        { title: '河水暴涨', img: 'http://www.chinanews.com/sh/2018/07-02/U397P4T8D8553588F107DT20180703144039.jpg', url: '' }
      ],
      hots: ['河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨'],
      focusArr: [],
      // 分类信息的数据集合
      categoryData: [],
      focusArt: []
    }
  },
  components: {
    NavSwiper,
    HotRecomment
  },
  methods: {
    focusFormat(title, description) {
      const title1 = title;
      const description1 = description;
      return { title1, description1 }
    },
    async focusList() {
      const params = {
        url: 'article/list',
        payload: {
          page: 1,
          size: 6,
          tag: '5b600923cb34e68fc2d4cc18'
        }
      }
      const result = await this.post(params);
      console.log('看看今日聚焦');
      console.log(result);
      result.data.forEach(x => {
        const { title, description } = x
        if (title.length < 30) {
          x.description = description.slice(0, 25)
        }
        if (title.length < 15) {
          // x.description = description.slice(0, 50);
        }
      });
      this.focusArt = result.data;
    },
    async categoryGroupList() {
      const params = {
        url: 'category/group/list',
        payload: {
          category_ids: '["5b612f12b3ba0a06b78052eb", "5b612d3e745d83027cccdebd", "5b5d180c97b7d72044e299af","5b5c841797b7d72044e299a7","5b3c8bc70ba2a3db46a86a89","5b38cfba4072a66f599a7735"]'
        }
      }
      const result = await this.post(params);
      this.categoryData = result.data
      console.log(this.categoryData)
    },
    async hotList() {
      const params = {
        url: 'article/list',
        payload: {
          page: 1,
          size: 10,
          hot: 1
        }
      }
      const result = await this.post(params);
      console.log(result)
      if (result.code === 1) {
        this.hots = result.data
        this.focusArr = result.data.slice(0, 6).map(x => {
          try {
            x.thumb = x.img_list[0].url
          } catch (err) {
            x.thumb = 'http://upload.cheaa.com/2018/0423/1524453328527.jpg'
          }
          return x
        })
      }
    },
    hotClass(index) {
      if (index < 2) {
        return 'hot-color-1'
      }
      if (index < 5) {
        return 'hot-color-2'
      }
      return 'hot-color-3'
    }
  },
  mounted() {
    this.hotList();
    this.categoryGroupList();
    this.focusList();
  }

}
</script>


<style lang="stylus">
@import '../style/var.styl';

body {
  background: #F3F4F5;

  a {
    color: #2e2f30;
  }
}

.index-container {
  width: content-max;
  margin: 0 auto;
  margin-top: 10px;

  // 头部导航栏目
  .nav-header {
    // 中间的三个布局
    .news-middle {
      padding-left: 8px;

      .item {
        height: 118px;
        width: 100%;
        margin-bottom: 3px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        .h-bottom {
          position: absolute;
          bottom: 0px;
          height: 20px;
          background: #03020299;
          width: 100%;
          color: white;
        }
      }
    }

    // 最右边的布局
    .news-right {
      background: white;
      padding-left: 10px;

      .new-content {
        background: grey;
      }

      .header {
        height: 30px;
        font-size: 16px;
        font-weight: bold;
        color: red;
        border-bottom: 1px solid #F1F2F4;
        margin-bottom: 2px;
      }

      .hot-div {
        height: 33px;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          background: #EEEEEE;
        }

        .hot-index {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .hot-title {
          margin-left: 4px;
          font-size: 14px;
        }
      }
    }
  }

  // 导航广告位
  .nav-ad {
    height: 100px;
    width: 100%;
    margin-top: 10px;
    background: yellow;
  }

  // 精选导读
  .news-guide {
    margin-top: 16px;
    margin-bottom: 16px;

    .c-title {
      font-size: 16px;
      font-weight: bold;
      min-height: 30px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0px 3px;
    }

    .content {
      height: 280px;
    }

    .item_wrap {
      height: 100px;
      width: 50%;
      padding: 2px;
      float: left;

      .item {
        // background: #ededed;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 100%;
        padding: 3px;

        img {
          width: 100%;
          height: 100%;
        }

        .title {
          height: 30px;
          padding-left: 4px;
        }

        .content {
          height: 100%;
          padding: 4px;
        }
      }
    }
  }
}

.hot-color-1 {
  background: #F23D7C;
}

.hot-color-2 {
  background: #DB5751;
}

.hot-color-3 {
  background: #FF9800;
}

.color-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, #f3005c, #ffde00);
  margin-bottom: 3px;
  margin-top: 3px;
}

.cms-card {
  background: white;
  padding: 8px 4px;

  .cms-card-header {
    position: relative;

    .cms-card-title {
      font-size: 18px;
      font-weight: bold;

      &:before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 4px;
        height: 26px;
        left: 0;
        top: 0px;
        border-radius: 4px;
        background-color: #f86442;
        margin-left: 1px;
        margin-right: 3px;
      }

      span {
        margin-left: 10px;
      }
    }

    .cms-card-content {
      height: 280px;
      width: 290px;
    }
  }
}

.zixun-item {
  margin: 2px;

  span > {
    background: red;
  }

  .zixun-category {
  }

  .zixun-title {
    &:before {
      content: '';
      width: 1px;
      border: 1px solid grey;
      margin: 0px 3px;
    }
  }
}

.category-item {
  font-size: 14px;
  margin: 5px 3px;
}

.cms-card-shadow {
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
}
</style>
