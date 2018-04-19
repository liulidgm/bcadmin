<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="基础信息">
                <el-row style="width: 800px;margin: 0 auto">
                    <el-col :span="9">
                        <div class="grid-content bg-purple">
                            <img src="" alt="" style="width: 80px;height: 80px;border: 1px solid #ccc;">
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
                                <el-button size="small" type="primary">修改头像</el-button>
                                <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                            </el-upload>
                        </div>
                    </el-col>
                    <el-col :span="15">
                        <div class="grid-content bg-purple-light">
                           <ul class="user_info">
                               <li>
                                   <span class="name">名称：</span>
                                   <span class="value">管理员A</span>
                               </li>
                               <li>
                                   <span class="name">管理权限：</span>
                                   <span class="value">项目管理主管</span>
                               </li>
                               <li>
                                   <span class="name">手机号：</span>
                                   <span class="value">18721605162</span>
                               </li>
                               <li>
                                   <span class="name">创建时间：</span>
                                   <span class="value">2016-10-23 12:56</span>
                               </li>
                               <li>
                                   <el-button type="primary" size='middle'  style="width:200px;margin: 20px 0 20px 100px;" @click="dialogFormVisible = true">修改密码</el-button>
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
          dialogFormVisible:false,
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
        border: 1px solid #DFE6EE;
    }
    .user_info li{
        border-bottom: 1px solid #DFE6EE;
    }
    .user_info li:last-child{
        border-bottom: none;
    }
    .user_info li .name,.value{
        display: inline-block;
        height: 45px;
        line-height: 45px;
        font-size: 14px;
    }
    .user_info li .name{
        width:87px;
        text-align: right;
        background: #F5FAFE;
        border-right: 1px solid #DFE6EE;
    }
    .user_info li .value{
        width:363px;
        text-align: left;
        background: #fff;
        padding-left: 15px;
    }
</style>
