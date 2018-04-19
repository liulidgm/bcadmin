<template>
    <div style="width: 1220px;margin: 0 auto;">
        <el-row style="margin: 30px 0;">
            <el-col :span="2"><div class="grid-content bg-purple">订单状态：</div></el-col>
            <el-col :span="22"><div class="grid-content bg-purple-light">待确认</div></el-col>
        </el-row>
        <el-row style="margin: 30px 0;">
            <el-col :span="2"><div class="grid-content bg-purple">买家信息：</div></el-col>
            <el-col :span="22" style="width: 800px;">
                <div class="grid-content bg-purple-light">
                    <table class="tables">
                        <tr>
                            <td>姓名：</td>
                            <td>张小白</td>
                            <td>手机号：</td>
                            <td>13852488151</td>
                        </tr>
                        <tr>
                            <td>邮箱：</td>
                            <td>62284804@qq.com</td>
                            <td>身份证：</td>
                            <td>320564198702034512</td>
                        </tr>
                    </table>
                </div>
            </el-col>
        </el-row>
        <el-row style="margin: 30px 0;">
            <el-col :span="2"><div class="grid-content bg-purple">订单信息：</div></el-col>
            <el-col :span="22"><div class="grid-content bg-purple-light">
                <table class="tables">
                    <tr>
                        <td>订单号：</td>
                        <td>2323X9121212</td>
                        <td>创建时间：</td>
                        <td>2016-12-04 08:33</td>
                    </tr>
                    <tr>
                        <td>项目名称：</td>
                        <td>三农稳健型投资项目</td>
                        <td>产品编号：</td>
                        <td>123231231</td>
                    </tr>
                    <tr>
                        <td>项目状态：</td>
                        <td>募集期</td>
                        <td>认购金额：</td>
                        <td>200,000元</td>
                    </tr>
                    <tr>
                        <td>付款时间：</td>
                        <td>2017-10-10 10:10:10</td>
                        <td>交易流水号：</td>
                        <td>3248597298759872645</td>
                    </tr>
                    <tr>
                        <td>交易银行卡：</td>
                        <td>（工商银行）62225689715646546</td>
                        <td>交易凭证：</td>
                        <td><img src="" alt=""></td>
                    </tr>
                </table>

                <div style="margin-top: 30px">
                    <el-button type="primary" size="middle" >确认通过</el-button>
                    <el-button type="primary" size="middle" >退 款</el-button>
                    <el-button type="default" size="middle" >取 消</el-button>
                </div>


            </div></el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {}
        },
        mounted() {
        },
        methods: {
            onSubmit() {

            }
        },
        components: {}
    }
</script>

<style scoped>
    .tables{
        border-left:1px solid #D6E7FF;
        border-top:1px solid #D6E7FF;
    }
    .tables tr td{
        border-right:1px solid #D6E7FF;
        border-bottom:1px solid #D6E7FF;
        text-align: center;
        line-height: 40px;
        height:40px;
        font-size: 14px;
    }
    .tables tr td:nth-child(2n+1){
        width:119px;
        background: #F5FAFE;
        color: #707EAE;
    }
    .tables tr td:nth-child(2n){
        width:230px;
        color: #7093C6;
    }
</style>
