<template>
  <div class="article-detail">
    <Row>
      <Col span="16">
      <div>
        <h1>神奇的天路！京东智慧政采直通“天空之城”日喀则</h1>
        <Row class="info">
          <Col span="6">作者</Col>
          <Col span="6">来源</Col>
          <Col span="6">日期</Col>
        </Row>
        <div class="description">
          上高原难，上日喀则更难。&rdquo;曾经一谈起自己的工作，日喀则市教育局采购负责人老金就一脸无奈。日喀则是世界上海拔最高的城市，位于中国西南边陲'...
        </div>
        <div class="content">
          “上高原难，上日喀则更难。”曾经一谈起自己的工作，日喀则市教育局采购负责人老金就一脸无奈。 日喀则是世界上海拔最高的城市，位于中国西南边陲地区，地处雅鲁藏布江和年楚河的交汇处，喜马拉雅山脉中段与冈底斯山－念青唐古拉山中段之间，被誉为“天空之城”和“安放灵魂的天堂”。然而独特的地理环境也使它成了电商时代的“后进生”，包括日喀则在内的西藏地区网购速度大大落后全国平均水平。 老金告诉记者，“由于西藏海拔高、地理位置偏远，网购配送速度一直落后于全国其他地区，平时网上下单后基本要一至两周时间才能到货。政府采购也是如此，特别是一些需要从藏外地区采购的物品，配送动辄‘十天半个月’，遇到恶劣天气时间还要更长。另外，由于日喀则平均海拔4000米以上，部分电子产品无法适应高海拔气候而出现宕机，专业技术人员能否及时到现场维修调试也是个大难题。” 老金的困扰不是个例，相反是日喀则政府采购中确实存在的问题。相对于其他地区，日喀则的“采购难”可谓名副其实：首要的问题是商品采选难度大，偏远高原地区的供应商数量少，可选商品种类有限，低海拔的电子产品到高原“易宕机”等等，这些因素都增加了日喀则政府采购互联网化改革的难度。 针对这一现状，日喀则政府引入京东“政府采购全流程电子化解决方案”。 在商品服务方面，京东为日喀则政府提供多种类、高品质的商品采选服务。京东凭借其智慧供应链、大数据等科技优势，提前分析预判采购中最需要、最常用的商品，提高政府采购需求与商品供给匹配度，降低政府采购难度。 配送服务方面，“有速度有温度”的京东物流近来在西藏地区频频布局。今年5月京东在西藏的仓储物流园区正式投入运营后，拉萨市区网购已实现配送“当日达”，而日喀则市等可实现“次日达”或者“隔日达”。尤其是京东物流“第一海拔”西藏日喀则站点的成立，更是让老金担心的采购物流配送问题一去不复返。 据了解，日喀则政府智慧政采平台上线后，日喀则市本级单位共计100多家，包括市级机关、事业单位和团体组织，将全部通过该平台进行采购，从商品采选到商品售后服务的链条和周期将大大缩短，“采购难、时间长”的难题有望大为改观。

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
      </Col>
    </Row>
    hello article {{$route.params.id}}
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>
<style lang="stylus">
@import '../../style/var.styl';

.article-detail {
  background: white;
  width: content-max;
  margin: 0 auto;
  margin-top: 10px;

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
</style>
