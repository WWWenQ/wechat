<template>
  <div class="find">
    <Header title="发现" />
    <div class="content">
      <Cell :src="cellData.src" :title="cellData.title" :path="cellData.path" />
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  name: "Discover",
  components: {
    Header,
    Cell
  },
  data() {
    return {
      cellData: {
        src: "pyq.jpg",
        title: "朋友圈",
        path: "/moments"
      }
    };
  }
};
</script>
<style scoped>

}
</style>