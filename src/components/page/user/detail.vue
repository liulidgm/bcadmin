<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="first">
                <el-row style="width: 1000px;margin: 0 auto;">
                    <el-col :span="4">
                        <div class="grid-content bg-purple userInfo" >
                            <img src="" alt="">
                            <h3>李志彬</h3>
                            <h4>18721605179</h4>
                            <el-button type="primary">冻结用户</el-button>
                        </div>
                    </el-col>
                    <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                            <table class="tables">
                                <tr>
                                    <td>邮箱：</td>
                                    <td>1291923912139@qq.com</td>
                                    <td>风险等级：</td>
                                    <td>中</td>
                                </tr>
                                <tr>
                                    <td>身份证号：</td>
                                    <td>3406219995984506</td>
                                    <td>银行卡：</td>
                                    <td>6230 58000 0044 7092 31(平安银行)</td>
                                </tr>
                                <tr>
                                    <td>注册时间：</td>
                                    <td>2017/03/04 19:39</td>
                                    <td>认证时间：</td>
                                    <td>2017/03/04 19:50</td>
                                </tr>
                                <tr>
                                    <td>累计认购金额（元）：</td>
                                    <td>2,000,000</td>
                                    <td>当前在投金额（元）：</td>
                                    <td>2,000,000</td>
                                </tr>
                                <tr>
                                    <td>地址：</td>
                                    <td>上海市浦东新区张杨路25号</td>
                                    <td>登陆锁定：</td>
                                    <td>24小时
                                        <el-button type="primary" size="small" style="width: 80px;">锁定</el-button>
                                    </td>
                                </tr>
                            </table>
                            <div>
                                <h4 style="font-weight: normal;margin: 30px 0 15px;">邀请人信息</h4>
                                <table class="tables">
                                    <tr>
                                        <td>邀请人：</td>
                                        <td>王柱全</td>
                                        <td>邀请人手机：</td>
                                        <td>13123456789</td>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <h4 style="font-weight: normal;margin: 30px 0 15px;">变更记录</h4>
                                <table class="tables tc">
                                    <tr>
                                        <td>序号</td>
                                        <td>时间</td>
                                        <td>变更内容</td>
                                        <td>变更前</td>
                                        <td>变更后</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2016-11-29 23:12</td>
                                        <td>手机号</td>
                                        <td>13958016230</td>
                                        <td>18721605179</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2016-11-29 23:12</td>
                                        <td>手机号</td>
                                        <td>13958016230</td>
                                        <td>18721605179</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
          activeName:'first'
      };
    },
    mounted() {
    },
    methods: {
        handleClick() {

        }
    },
    components: {}
  }
</script>

<style scoped>
    .userInfo h3{
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        margin: 20px 0;
    }
    .userInfo h4{
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 20px;
    }
    .tables{
        border-left:1px solid #D6E7FF;
        border-top:1px solid #D6E7FF;
    }
    .tables tr td{
        border-right:1px solid #D6E7FF;
        border-bottom:1px solid #D6E7FF;
        line-height: 40px;
        height:40px;
        font-size: 14px;
    }
    .tables tr td:nth-child(2n+1){
        width:160px;
        background: #F5FAFE;
        color: #707EAE;
        text-align: right;
    }
    .tc tr td:nth-child(2n+1){
        text-align: center;
    }
    .tables tr td:nth-child(2n){
        width:300px;
        color: #7093C6;
        text-align: center;
    }
</style>
