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
    },
    data(){
        return{
            tabbarData:[
                {title:'微信',icon:'comment',path:'/chats'},
                {title:'通讯录',icon:'comment',path:'/chats'},
                {title:'发现',icon:'comment',path:'/chats'},
                {title:'微信',icon:'comment',path:'/chats'}
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