<template>
    <div class="information">
        <Header :is-left="true" title="详细资料" btn_icon="ellipsis-h"/>
        <div class="container">
            <InfoCell :user="targetUser"/>
        </div>
        
    </div>
</template>
<script>
import Header from "../components/Header"
import InfoCell from "../components/InfoCell"
export default {
    name:"Information",
    components:{
        Header,
        InfoCell
    },
    computed:{
        targetUser(){
           return this.$route.params.friendInformation
        }
    }

}
</script>
<style scoped>
.information {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
  box-sizing: border-box;
  padding: 16px 0;
  background-color: #f1f1f1;
}

.btn_wrapper {
  box-sizing: border-box;
  padding: 20px;
}
</style>