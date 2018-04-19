<template>
    <div id="addAppVersion" v-show="isShow">
        <div style="width: 900px; margin: 50px auto 0;">
            <el-button type="primary" style="width: 130px;margin-bottom: 80px;margin-left: 800px;" @click="isShowFn">返回</el-button>
            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple"><span class="prop">*</span>APP版本号：</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
            </el-row>
            <el-row style="margin: 30px 0">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="prop">*</span>客户下载图：</div></el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div>
                            <img src="" alt="">
                            <img src="" alt="">
                        </div>
                        <el-button type="primary" style="width: 130px;">上传</el-button>
                        <el-button type="default" style="width: 130px;">重置</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-row style="margin: 30px 0">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="prop">*</span>说明：</div></el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <el-input type="textarea" v-model="input"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row style="margin: 30px 0">
                <el-col :span="4"><div class="grid-content bg-purple"><span class="prop">*</span>Android版本地址：</div></el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light">
                        <el-button type="primary" style="width: 130px;margin-left: 30px;">上传</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-row style="margin: 30px 0">
                <el-col :span="12" style="margin-left:150px;">
                    <el-button type="primary" style="width: 130px;">保存</el-button>
                    <el-button type="default" style="width: 130px;">取消</el-button>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
          input:''
      };
    },
      props:{
        isShow:''
      },
    mounted() {
    },
    methods: {
        isShowFn() {
          this.$emit('isShowHandle')
        }
    },
    components: {}
  }
</script>

<style scoped>
    .prop{
        color: red;
    }
    .el-col-4{
        font-size: 15px;
        text-align: right;
        padding-right: 10px;
        position: relative;
        top:5px;
    }
    #addAppVersion{
        position: absolute;
        left:0;
        top:0;
        z-index: 10000;
        width:100%;
        height: 100%;
        background: #fff;
    }
</style>
