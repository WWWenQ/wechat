<template>
    <div class="index">
        <TabBar/>
    </div>
</template>
<script>
import TabBar from "../components/TabBar"
export default {
    name:"Index",
    components:{
        TabBar
    }
}
</script>
<style scoped>
    .index{
        width: 100%;
        height: 100%
    }
</style>