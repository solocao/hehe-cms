<template>
  <section class="index-container" id="example-content">
    <div style="height:2200px;width:100%;">
      <Row class="nav-header">
        <Col span="12">
        <nav-swiper></nav-swiper>
        </Col>
        <Col span="4" class="news-middle">
        <div class="item">
          af
        </div>
        <div class="item">
          af
        </div>
        <div class="item">
          af
        </div>
        </Col>
        <Col span="8" class="news-right">
        <div>
          <div class="header">
            今日热点
          </div>
          <div>
            <div>
              新闻一
            </div>
            <div>
              新闻二
            </div>
            <div>
              新闻三
            </div>

          </div>
        </div>
        </Col>
      </Row>
      <!-- 广告宣称位置 -->
      <Row class="nav-ad">

      </Row>

      <!-- 文章导读 -->
      <Row class="news-guide">
        <Col span="16">
        <div class="title">
          精选导读
        </div>
        <div class="content">
          <div class="item_wrap" v-for="i in 6">
            <Row class="item">
              <Col span="8" style="height:100%">
              <img src="http://www.qiye.gov.cn/d/file/2018-06-11/54f2712bf5ecb0f4b502db2275c22bdf.jpg" alt="">
              </Col>
              <Col span="16">
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
        <div>
          文章标题
        </div>
        <Row class="item" style="height:160px">
          <Col span="4">
          <img src="http://www.qiye.gov.cn/d/file/2018-06-27/475b6b662b592c119718d32e7977e7c3.jpg" alt="" style="width:100%;height:100%">
          </Col>
          <Col span="20">
          <div class="title">
            头部标题
          </div>
          <div class="content">
            文章内容
          </div>

          </Col>
        </Row>

      </Row>
    </div>
  </section>
</template>
<script>
import NavSwiper from '../components/NavSwiper.vue'
export default {
  components: {
    NavSwiper
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
        background: red;
        margin-bottom: 3px;
      }
    }

    // 最右边的布局
    .news-right {
      padding-left: 8px;
      border: 1px solid grey;

      .header {
        height: 40px;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  // 导航广告位
  .nav-ad {
    height: 200px;
    width: 100%;
    margin-top: 10px;
    background: yellow;
  }

  // 精选导读
  .news-guide {
    height: 400px;
    margin-top: 10px;
    background: purple;

    .title {
      font-size: 16px;
      font-weight: bold;
      height: 40px;
      display: flex;
      align-items: center;
    }

    .content {
      height: 360px;
      background: red;
    }

    .item_wrap {
      height: 120px;
      width: 50%;
      padding: 2px;
      float: left;

      .item {
        background: yellow;
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }

        .title {
          height: 40px;
        }

        .content {
          height: 100%;
        }
      }
    }
  }
}
</style>
