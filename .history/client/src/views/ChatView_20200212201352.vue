<template>
    <div class="chat">
        <Header v-if="targetUser"/>
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
            targetUser:null
        }
    }
}
</script>
<style scoped>

</style>