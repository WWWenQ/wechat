<template>
    <div class="chat">
        <Header v-if="targetUser" :is-left="true" :title="targetUser.name" btn_icon="ellipsis-h"/>
        <div class="container">
            <!-- 聊天内容 -->
        </div>
        <div class="footer_wrap">
            <input type="text" v-model="msgValue">
            <button>发送</button>
        </div>
    </div>
</template>
<script>
import Header from "../components/Header"
export default {
    name:"ChatView",
    components:{
        Header
    },
    data(){
        return {
            targetUser:this.$route.params.user
        }
    }
}
</script>
<style scoped>

</style>