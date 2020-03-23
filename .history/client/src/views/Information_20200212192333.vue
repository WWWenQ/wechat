<template>
    <div class="information">
        <Header :is-left="true" title="详细资料" btn_icon="ellipsis-h"/>
        <UserCell @click="cellClick(friend)" v-for="friend in friendsList" :key="friend._id" :user="friend"/>
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
    }

}
</script>
<style scoped>

</style>