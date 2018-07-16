<template>
  <div class="hot-recomment">
    <Row class="recomment-item" v-for="(i,index) in 6" :key="index">
      <Col span="8">
      <img src="http://www.qiye.gov.cn/d/file/2018-07-02/a1f1adf66a24ffbaa4331f60b3202d77.png" alt="">
      </Col>
      <Col span="16">
      <div class="c-title">
        ACI心理学专家公益讲座在北京举办
      </div>
      <div class="c-content">
        为普及健康心理学知识，提高人们对心理健康问题的认识水平和解决能力，6月30日，美国认证协会（ACI）心理学专家公益讲座在北京成功举办。两位来自美国的资深心理学专家，伊丽莎白&m..
      </div>
      <div class="info">

      </div>
      </Col>
    </Row>

  </div>
</template>
<style lang="stylus">
.hot-recomment {
  height: 175px;
  padding: 2px;

  img {
    width: 100%;
    height: 100%;
  }

  .c-title {
    margin-left: 4px;
    font-size: 20px;
  }

  .c-content {
    margin-left: 4px;
    font-size: 14px;
  }

  .recomment-item {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    padding: 3px;
    margin: 4px 0px;
  }
}
</style>
