<template>
    <div class="header">
        <div class="logo">CarAd管理系统</div>
        <div class="user-info">
            <!-- <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/img.jpg">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown> -->
            <span>您好！{{userName}}</span>
            <span @click="loginout()" class="loginout">退出</span>
        </div>
    </div>
</template>
<script>
import {userLogOut} from 'service/getData'
    export default {
        data() {
            return {
                name: 'linxin'
            }
        },
        props:{
          userName:''
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            },
            loginout(){
                userLogOut().then(res=>{
                    if(res.code=='000'){
                        this.$router.push('/')
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .loginout{
        cursor: pointer;
    }
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
    /*********************/
    .user-info span{
        display: inline-block;
        height: inherit;
        margin:0 10px;
    }
</style>
