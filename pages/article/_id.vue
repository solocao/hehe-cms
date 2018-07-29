<template>
  <div class="article-detail">
    <Row>
      <Col span="16" class="article-left">
      <div>
        <h1>{{article.title}}</h1>
        <Row class="info">
          <Col span="6">作者</Col>
          <Col span="6">来源</Col>
          <Col span="6">日期</Col>
        </Row>
        <div class="description">
          {{article.description}}
        </div>
        <!-- 内容 -->
        <div class="content" v-html="article.content">

        </div>
        <!-- 免责声明 -->
        <div class="disclaimer">
          <div class="title">
            声明
          </div>
          <div class="content">
            1、本网站为服务于中国中小企业的公益性政府网站，因部分文章来源于网络，如有侵权，请来邮来电告知，本站将立即改正。2、作者投稿可能会经本站编辑修改或补充。
          </div>

        </div>
      </div>
      </Col>
      <Col span="8">
      <div class="article-right">
        <div style="width:100%">
          <img style="width:100%" src="http://www.qiye.gov.cn/d/a/a3.jpg" alt="">
        </div>
        <div class="a-list" v-for="i in 8">
          <div class="article-thumbnail">
            <img src="http://www.qiye.gov.cn/d/file/2018-06-11/eea1e53e93976a4198099a6e762ad92e.jpg" alt="">
          </div>
          <div class="article-holder">
            <h3>如何让用听写软件佐治动态走</h3>
            <div>西雅图老胡</div>
            <div>299次观看</div>
          </div>
        </div>

      </div>

      </Col>
    </Row>
    hello article {{$route.params.id}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      article: {
        title: null
      }
    }
  },
  methods: {
    async  articleItem() {
      const params = {
        url: 'article/item/' + this.$route.params.id,
        payload: {}
      }
      const result = await this.get(params)
      this.article = result.data
      console.log('看看结果')
      console.log(result)
    }
  },
  mounted() {
    this.articleItem()
  }
}
</script>
<style lang="stylus">
@import '../../style/var.styl';

body {
  background: #F3F4F5;
}

.article-detail {
  background: white;
  width: content-max;
  margin: 0 auto;
  margin-top: 10px;
  padding: 0px 0px;

  .article-left {
    border-right: 1px solid #E1E1E1;
    padding: 30px;
  }

  .article-right {
    width: 100%;
    padding: 4px;
  }

  .info {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .description {
    height: 63px;
    margin: 8px 0px;
    padding: 5px;
    border: 1px solid #9e9e9e38;
  }

  .content {
    font-size: 16px;
  }

  .disclaimer {
    margin: 10px 0px;
    display: flex;

    .title {
      background: red;
      font-size: 18px;
      font-weight: bold;
      color: white;
    }

    .content {
    }
  }
}

.a-list {
  display: flex;
  margin: 5px;

  .article-thumbnail {
    margin-right: 8px;
    height: 80px;
    width: 130px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .article-holder {
  }
}
</style>
