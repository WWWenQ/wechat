<template>
    <div class="img_wrap">
        <div class="isImg">
            
        </div>
        <div class="isImg img_upload">
            <button class="btn_upload">
                <input @click="addFile" type="file" ref="myFile" multiple accept="img/*">
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name:"UpLoad",
    data(){
        return {
            showFileData:[]
        }
    },
    methods:{
        addFile(){
            console.log(this.$refs.myFile.files)
            let files = [...this.$refs.myFile.files]
            files.forEach(file=>{
                let objUrl = this.getObjectURL(file)
                this.showFileData.push(objUrl)
            })
        }
    },
    getObjectURL(file) {
    let url = null;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}
}
</script>
<style scoped>
.isImg {
  box-sizing: border-box;
  width: 30%;
  height: 6rem;
  float: left;
  margin-right: 8px;
  margin-bottom: 8px;
  position: relative;
}
.btn_upload {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: url(../assets/upload.png) no-repeat;
  background-size: 100% 100%;
}
.btn_upload input {
  display: inline-block;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.isImg img {
  width: 100%;
  height: 100%;
}
.isImg .remove {
  position: absolute;
  top: -8px;
  right: -5px;
  border: none;
  outline: none;
  width: 20px;
  height: 20px;
  padding: 0;
  text-align: center;
  color: white;
  background-color: #3baffd;
  line-height: 10px;
  border-radius: 50%;
}
</style>