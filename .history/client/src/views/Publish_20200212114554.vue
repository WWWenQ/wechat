<template>
  <div class="publish">
    <div class="header">
      <button @click="$router.go(-1)">取消</button>
      <button @click="publish">发表</button>
    </div>
    <div class="content">
      <div class="text_wrap">
        <textarea placeholder="说说你的感受..." v-model="text"></textarea>
        <UpLoad @getImgs="getImgs" />
      </div>
    </div>
    
  </div>
</template>
<script>
import UpLoad from "../components/UpLoad";
import Loading from "../components/Loading";
import jwt_decode from "jwt-decode";

export default {
  name: "Publish",
  components: {
    UpLoad,
    Loading
  },
  data() {
    return {
      text: "",
      imgs: []
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
    publish() {
      const postData={
        name:this.user.name,
        img:this.user.avatar,
        text:this.text,
        imgs:this.imgs.join('|')
      }
      this.$axios.post('/api/profiles/add',postData)
        .then(res=>{
          this.$router.push('/moments')
        })
    },
    getImgs(imgs) {
      imgs.forEach(file => {
        this.uploadFile(file);
      });
    },
    uploadFile(file) {
      let reader = new FileReader();
      const self = this;
      reader.onload = function(e) {
        self.imgs.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>
<style scoped>
.publish {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  padding: 0 10px;
  line-height: 50px;
  justify-content: space-between;
}
.header button {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
}
.header button:nth-child(2) {
  color: #20af0e;
}
.content {
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
}
.text_wrap textarea {
  width: 100%;
  font-size: 14px;
  min-height: 60px;
  border: none;
  outline: none;
}
.text_wrap {
  margin-bottom: 16px;
}
</style>