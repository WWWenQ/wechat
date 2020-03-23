<template>
    <div class="address_book">
        <Header title="通讯录" btn_icon="user-plus" />
        <div class="container">
            <div class="content_wrap">
                <UserCell v-for="fri"/>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/Header"
import UserCell from "../components/UserCell"
export default {
    name:"Contacts",
    components:{
        Header,
        UserCell
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