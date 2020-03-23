<template>
    <div class="find">
        <Header title="发现" />
        <div class="content"></div>
    </div>
</template>
<script>
import Header from "../components/Header"
import Cell from "../components/Cell"
export default {
    name:"Discover",
    components:{
        Header,
        Cell
    }
}
</script>
<style scoped>
.find {
  width: 100%;
  height: calc(100% - 55px);
  position: relative;
  box-sizing: border-box;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
}
</style>