<template>
	<div class="addOrEditBanner">
		<el-row style="border-bottom:1px solid #ddd;padding:10px 0;margin-bottom:20px;">
			<el-col :span="12">{{editTile}}启动页广告</el-col>
			<el-col :span="12" style="text-align:right"><el-button type="primary" @click="backBannerList()">返回</el-button></el-col>
		</el-row>
		<el-form :label-position="labelPosition" label-width="90px" :model="appStartForm" :rules="appStartFormRules" ref="appStartForm">
			    <el-form-item label="标题" prop="name">
			    	<el-input v-model="appStartForm.name"></el-input>
			    </el-form-item>
				 <el-row>
					<el-col :span="10">
					  	<el-form-item label="APP图片">
						   <el-upload
							  class="avatar-uploader"
							  action="https://jsonplaceholder.typicode.com/posts/"
							  :show-file-list="false"
							  :on-success="handleAPPSuccess"
							  :before-upload="beforeAPPUpload">
							  <img v-if="APPImageUrl" :src="APPImageUrl" class="avatar">
							  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
						</el-form-item>
						
					</el-col>
					<el-col :span="12">
						<el-form-item label="APP超链接">
						    <el-input v-model="appStartForm.region"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-form-item label="上线时间" style="width:60%;">
				    <el-col :span="11">
				      <el-date-picker type="date" placeholder="选择日期" v-model="appStartForm.date1" style="width: 100%;"></el-date-picker>
				    </el-col>
				    <el-col class="line" :span="2">-</el-col>
				    <el-col :span="11">
				      <el-date-picker type="date" placeholder="选择日期" v-model="appStartForm.date2" style="width: 100%;"></el-date-picker>
				    </el-col>
				</el-form-item>
				<el-form-item>
				    <el-button type="primary" @click="submitForm('appStartForm')">立即创建</el-button>
				    <el-button @click="resetForm('appStartForm')">重置</el-button>
				</el-form-item>
		</el-form>
	</div>
</template>
<script>
import $ from 'jquery'
import {} from 'service/getData'
	export default{
		data(){
			return{
				PCImageUrl:'',
				APPImageUrl: '',
				labelPosition: 'right',
		        appStartForm: {
		          name: '',
		          region: '',
		          type: '',
		          date1:'',
		          date2:''
		        },
		        appStartFormRules:{
		          name: [
		            { required: true, message: '请输入活动名称', trigger: 'blur' },
		          ]
		      }
			}
			

		},
		props:{editData:'',editTile:''},
		mixins:[],
		mounted(){
			console.log(this.editTile);
		},
		methods:{
			submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            alert('submit!');
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		    },
		    resetForm(formName) {
		        this.$refs[formName].resetFields();
		    },
		    handleAPPSuccess(res, file) {
		        this.APPImageUrl = URL.createObjectURL(file.raw);
		    },
		    beforeAPPUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		    },
		    backBannerList(){
		    	//清空表单
		    	this.resetForm('appStartForm');
		    	this.$emit('backBannerList');
		    }
		},
		components:{}
	}
</script>
<style>
.addOrEditBanner{width: 60%;margin: auto;}
</style>