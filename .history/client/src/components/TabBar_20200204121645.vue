<template>
  <div class="tabbar">
    <router-link :to="" class="tab-item">
      <div class="tab-item-icon">
        <i class="fa fa-comment"></i>
      </div>
      <div class="tab-item-label">微信</div>
    </router-link>
    
  </div>
</template>
<script>
export default {
    props:{
        data:Array
    }
};
</script>
<style scoped>
.tabbar {
  height: 55px;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 0
  );
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #fafafa;
  display: flex;
  text-align: center;
}
.tab-item {
  display: block;
  padding: 7px 0;
  flex: 1;
}
.tab-item-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto 5px;
}
.tab-item-icon i {
  font-size: 1.3rem;
}
.tab-item-label {
  color: inherit;
  font-size: 12px;
  line-height: 1;
}
a {
  text-decoration: none;
  color: #888;
}
.is-selected {
  color: #20af0e;
}
</style>