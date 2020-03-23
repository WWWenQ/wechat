<template>
    <div>
        <Header title="通讯录" btn_icon="user-plus" />
    </div>
</template>
<script>
import Header from "../components/Header"
export default {
    name:"Contacts",
    components:{
        Header
    },
    data(){
        return{
            friendsList
        }
    }
}
</script>
<style scoped>

</style>