<template>
    <div class="index">
        <router-view>
        </router-view>
        <TabBar :data="/>
    </div>
</template>
<script>
import TabBar from "../components/TabBar"
export default {
    name:"Index",
    components:{
        TabBar
    },
    data(){
        return{
            tabbarData:[
                {title:'微信',icon:'comment',path:'/chats'},
                {title:'通讯录',icon:'address-book',path:'/contacts'},
                {title:'发现',icon:'compass',path:'/discover'},
                {title:'我',icon:'user',path:'/me'}
            ]
        }
    }
}
</script>
<style scoped>
    .index{
        width: 100%;
        height: 100%
    }
</style>