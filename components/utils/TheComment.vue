<template>
  <div class="the-comment">
    <div class="comment-add">
      <div class="comment-user">
        <img src="https://images.nowcoder.com/images/20170409/435809_1491710010101_5BD318FACE1521B65A15D03FA001C1E5@0e_100w_100h_0c_1i_1o_90Q_1x" alt="">

      </div>
      <div class="comment-content">
        <div>
          <Input v-model="content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </div>
        <div>
          <button text="评论" class="btn-small" style="float:right" @click="commentAdd">评论</button>
          <button text="刷新" class="btn-small" style="float:right" @click="commentList">刷新</button>
        </div>

      </div>
    </div>
    <div class="comment-add" v-for="i in 7">
      <div class="comment-user">
        <img src="https://images.nowcoder.com/images/20170409/435809_1491710010101_5BD318FACE1521B65A15D03FA001C1E5@0e_100w_100h_0c_1i_1o_90Q_1x" alt="">
      </div>
      <div class="comment-content">
        <div>
          sdfsdgdfgdsgsdgdsdgsdgs
        </div>
        <div>
          -2016年8月6日11
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
  props: {
    postId: {
      type: String
    }
  },
  data() {
    return {
      content: '一点内容是'
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    // 新增评论
    async commentAdd() {
      const params = {
        url: 'comment/add',
        payload: {
          post_id: this.postId,
          third_id: this.user._id,
          content: this.content
        }
      }
      const result = await this.post(params)
      console.log('reult')
      console.log(result)
    },

    // 获取评论
    async commentList() {
      const params = {
        url: 'comment/list',
        payload: {
          post_id: this.postId
        }
      }
      const result = await this.post(params)
      console.log('看看')
      console.log(result)
    }
  }

}
</script>
<style lang="stylus">
.the-comment {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 6px;

  .comment-add {
    margin: 6px 0px;
    width: 100%;

    .comment-user {
      float: left;
      width: 100px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
    }

    .comment-content {
      float: left;
      width: calc(100% - 100px);
      height: 100%;
      padding-left: 10px;
    }
  }
}

.btn-small {
  width: 80px;
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
}
</style>
