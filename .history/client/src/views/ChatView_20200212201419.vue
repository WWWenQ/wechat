<template>
    <div class="chat">
        <Header v-if="targetUser" :is-left="true" :title="targetUser.name"/>
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
            targetUser:this.
        }
    }
}
</script>
<style scoped>

</style>