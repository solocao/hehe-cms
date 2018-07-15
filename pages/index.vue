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
        <Col span="8" class="news-right">
        <div class="news-right">
          <div class="header">
            今日热点
          </div>

          <div class="hot-div" v-for="(item,index) in hots" :key="index">

            <div class="hot-index" :class="hotClass(index)">{{index+1}}</div>

            <span class="hot-title">{{item}}</span>

          </div>

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
        <Col span="16">
        <div class="title">
          <Row>精选导读</Row>
        </div>
        <Row class="color-line"></Row>

        <div class="content">
          <div class="item_wrap" v-for="i in 6">
            <Row class="item">
              <Col span="9" style="height:100%">
              <img src="http://www.qiye.gov.cn/d/file/2018-06-11/54f2712bf5ecb0f4b502db2275c22bdf.jpg" alt="">
              </Col>
              <Col span="15">
              <div class="title">
                6月9日——9月9日一起来High
              </div>
              <div class="content">
                深圳世界之窗点燃鹏城热情，冰爽啤酒节引爆夏日狂欢 激情主持、风情热舞、…

              </div>
              </Col>

            </Row>
          </div>
        </div>
        </Col>
        <Col span="8">
        </Col>

      </Row>

      <!-- 文章热门 -->
      <Row class="news-hot">
        <Col span="16">
        <div class="c-nav-header">
          <Row>精选导读</Row>
        </div>
        <Row class="color-line"></Row>
        <hot-recomment></hot-recomment>
        </Col>
        <Col span="8">
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
      hots: ['河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨', '河水暴涨']
    }
  },
  components: {
    NavSwiper,
    HotRecomment
  },
  methods: {
    hotClass(index) {
      if (index < 2) {
        return 'hot-color-1'
      }
      if (index < 5) {
        return 'hot-color-2'
      }
      return 'hot-color-3'
    }
  }

}
</script>


<style lang="stylus">
@import '../style/var.styl';

.index-container {
  background: white;
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
      padding-left: 10px;

      .new-content {
        background: grey;
      }

      .header {
        height: 30px;
        font-size: 16px;
        font-weight: bold;
        color: red;
        border-bottom: 1px solid grey;
        margin-bottom: 2px;
      }

      .hot-div {
        height: 33px;
        display: flex;
        align-items: center;

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
    height: 400px;
    margin-top: 10px;

    .title {
      font-size: 16px;
      font-weight: bold;
      height: 30px;
      display: flex;
      align-items: center;
      width: 100%;
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
        background: #ededed;
        width: 100%;
        height: 100%;

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
  height: 2px;
  background: linear-gradient(to right, #f3005c, #ffde00);
  margin-bottom: 2px;
}

.c-nav-header {
  font-size: 16px;
  font-weight: bold;
  height: 30px;
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
