<template>
    <div class="information">
        <Header :is-left="true" title="详细资料" btn_icon="ellipsis-h"/>
        <UserCell :user="targetUser"/>
    </div>
</template>
<script>
import Header from "../components/Header"
import In from "../components/UserCell"
export default {
    name:"Information",
    components:{
        Header,
        UserCell
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