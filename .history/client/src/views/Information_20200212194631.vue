<template>
    <div class="information">
        <Header :is-left="true" title="详细资料" btn_icon="ellipsis-h"/>
        <div class="container">

        </div>
        
    </div>
</template>
<script>
import Header from "../components/Header"
import InfoCell from "../components/InfoCell"
export default {
    name:"Information",
    components:{
        Header,
        InfoCell
    },
    computed:{
        targetUser(){
           return this.$route.params.friendInformation
        }
    }

}
</script>
<style scoped>

</style>