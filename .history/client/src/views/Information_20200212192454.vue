<template>
    <div class="information">
        <Header :is-left="true" title="详细资料" btn_icon="ellipsis-h"/>
        <UserCell :user="friend"/>
    </div>
</template>
<script>
import Header from "../components/Header"
import UserCell from "../components/UserCell"
export default {
    name:"Information",
    components:{
        Header,
        UserCell
    },
    computed:{
        targetUser(){
            return this.$store.getters.targetUser
        }
    }

}
</script>
<style scoped>

</style>