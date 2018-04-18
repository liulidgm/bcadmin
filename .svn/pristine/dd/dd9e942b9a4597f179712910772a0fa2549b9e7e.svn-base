<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="基础信息">
                <el-row style="width: 900px;margin: 0 auto">
                    <el-col :span="8">
                        <div class="grid-content bg-purple">
                            <img src="" alt="">
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="1"
                                :on-exceed="handleExceed"
                                :show-file-list="false"
                                :file-list="fileList">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div class="grid-content bg-purple-light">
                           <ul class="user_info">
                               <li>
                                   <span>名称：</span>
                                   <span>管理员A</span>
                               </li>
                               <li>
                                   <span>管理权限：</span>
                                   <span>项目管理主管</span>
                               </li>
                               <li>
                                   <span>手机号：</span>
                                   <span>18721605162</span>
                               </li>
                               <li>
                                   <span>创建时间：</span>
                                   <span>2016-10-23 12:56</span>
                               </li>
                               <li>
                                   <span> </span>
                                   <span>
                                        <!--<el-button type="primary" @click="onSubmit" style="width: 100px;">清除条件</el-button>-->
                                   </span>
                               </li>
                           </ul>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
        <EditPassword :dialogFormVisible="dialogFormVisible"></EditPassword>
    </div>
</template>

<script type="text/ecmascript-6">
    import EditPassword from './editPassword.vue'
  export default {
    data() {
      return {
          dialogFormVisible:'true',
          fileList: [
            {
                name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            },
              {
                    name: 'food2.jpeg',
                  url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
              }],


      };
    },
    mounted() {
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        }

    },
    components: {EditPassword}
  }
</script>

<style >
    .user_info{
        font-size: 0;
    }
    .user_info li span{
        display: inline-block;
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        border: 1px solid #ccd0d2;
        border-bottom:none;
        border-right:none;
    }
    .user_info li span:nth-child(1){
        width:87px;
        text-align: right;
        background: #c1dffd;
    }
    .user_info li span:nth-child(2){
        width:363px;
        text-align: left;
        background: #fff;
        padding-left: 15px;
    }
</style>
