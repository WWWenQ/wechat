<template>
    <div>
        <Header title="通讯录" btn_icon="user-plus" />
    </div>
</template>
<script>
import Header from "../components/Header"
import UserCell from "../components/Header"
export default {
    name:"Contacts",
    components:{
        Header
    },
    data(){
        return{
            friendsList:[]
        }
    },
    created(){
        this.getFriendsList()
    },
    methods:{
        getFriendsList(){
            this.$axios.get("/api/users/all").then(res=>{
                console.log(res.data)
                this.friendsList = res.data
            })
        }
    }
}
</script>
<style scoped>

</style>