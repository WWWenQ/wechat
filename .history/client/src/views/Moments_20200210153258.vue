<template>
  <div class="circle">
    <Header title="朋友圈" btn_icon="camera" :isLeft="true" />
    <div class="container">
      <Scroll ref="refresh" @pulldown="loadData" @pullup="loadMore">
        <div class="head_wrapper">
          <div class="user_head">
            <span>{{user.name}}</span>
            <div class="user_img">
              <img :src="user.avatar" alt class="head_img" />
            </div>
          </div>
        </div>
        <div class="content_wrapper">
          <CellView v-for="(moment,index) in momentsList" :key="index" :momentsObj="moment" />
        </div>
      </Scroll>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import jwt_decode from "jwt-decode";
import CellView from "../components/CellView";
import Scroll from "../components/Scroll";
export default {
  name: "Moments",
  components: {
    Header,
    CellView,
    Scroll
  },
  data() {
    return {
      momentsList: []
    };
  },
  computed: {
    user() {
      const token = localStorage.wxpyqToken;
      const decode = jwt_decode(token);
      return decode;
    }
  },
  methods: {
    loadData() {
      this.getLatestData();
    },
    getLatestData() {
      this.$axios("/api/profiles/latest").then(res => {
        this.momentsList = res.data;
        this.$refs.refresh.$emit('refresh')
      });
    },
    loadMore(){
      this.$axios(`/api/profiles/$`)
    }
  },
  created() {
    this.getLatestData();
  }
};
</script>
<style scoped>
.circle {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: calc(100% - 50px);
  padding-top: 50px;
  overflow: auto;
}
.head_wrapper {
  width: 100%;
  position: relative;
  height: 200px;
  background: url(../assets/cricle_bg.png) no-repeat;
  background-size: 100% 100%;
}
.head_wrapper .user_head {
  position: absolute;
  bottom: -30px;
  right: 16px;
}
.user_img {
  width: 60px;
  height: 60px;
  padding: 3px;
  border: 1px solid #c5c5c5;
  box-sizing: border-box;
}
.user_head img {
  width: 100%;
  height: 100%;
}
.user_head span {
  line-height: 30px;
  position: absolute;
  right: 76px;
  width: 200px;
  text-align: right;
  color: white;
}
.content_wrapper {
  padding-top: 20px;
}
</style>