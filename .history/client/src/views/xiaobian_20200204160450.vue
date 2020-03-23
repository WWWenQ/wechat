<template>
  <div>
    运输方式：
    <br />
    <input type="checkbox" />默认（无）
    <input type="checkbox" />代驾
    <input type="checkbox" @click="tanchu" />板车
    <div>
      <input type="checkbox" />提车（
      <br>
      <input type="checkbox" />代驾
      <br>
      <input type="checkbox" @click="tanchu" />板车
    </div>
  </div>
</template>
<script>
export default {
  name: "xiaobian",
  methods: {
    tanchu() {}
  }
};
</script>
<style scoped>
</style>