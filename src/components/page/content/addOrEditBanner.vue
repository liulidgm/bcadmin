<template>
	<div class="addOrEditBanner">
		<el-row style="border-bottom:1px solid #ddd;padding:10px 0;margin-bottom:20px;">
			<el-col :span="12">新增首页广告</el-col>
			<el-col :span="12" style="text-align:right"><el-button type="primary" @click="backBannerList()">返回</el-button></el-col>
		</el-row>
		<el-form :label-position="labelPosition" label-width="90px" :model="bannerForm" :rules="bannerFormRules" ref="bannerForm">
			    <el-form-item label="标题" prop="name">
			    	<el-input v-model="bannerForm.name"></el-input>
			    </el-form-item>
			    <el-row>
					<el-col :span="10">

					  	<el-form-item label="PC图片">
					  		<el-tooltip content="Bottom center" placement="bottom" effect="light">
							  <i class="el-icon-question"></i>
							</el-tooltip>
						   <el-upload
							  class="avatar-uploader"
							  action="https://jsonplaceholder.typicode.com/posts/"
							  :show-file-list="false"
							  :on-success="handlePCSuccess"
							  :before-upload="beforePCUpload">
							  <img v-if="PCImageUrl" :src="PCImageUrl" class="avatar">
							  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
						</el-form-item>
						
					</el-col>
					<el-col :span="12">
						<el-form-item label="PC超链接">
						    <el-input v-model="bannerForm.region"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
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
						    <el-input v-model="bannerForm.region"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-form-item label="上线时间" style="width:60%;">
				    <el-col :span="11">
				      <el-date-picker type="date" placeholder="选择日期" v-model="bannerForm.date1" style="width: 100%;"></el-date-picker>
				    </el-col>
				    <el-col class="line" :span="2">-</el-col>
				    <el-col :span="11">
				      <el-date-picker type="date" placeholder="选择日期" v-model="bannerForm.date2" style="width: 100%;"></el-date-picker>
				    </el-col>
				</el-form-item>
				<el-form-item>
				    <el-button type="primary" @click="submitForm('bannerForm')">立即创建</el-button>
				    <el-button @click="resetForm('bannerForm')">重置</el-button>
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
		        bannerForm: {
		          name: '',
		          region: '',
		          type: '',
		          date1:'',
		          date2:''
		        },
		        bannerFormRules:{
		          name: [
		            { required: true, message: '请输入活动名称', trigger: 'blur' },
		          ]
		      }
			}
			

		},
		mixins:[],
		mounted(){
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
	      	handlePCSuccess(res, file) {
		        this.PCImageUrl = URL.createObjectURL(file.raw);
		    },
		    beforePCUpload(file) {
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
		    	this.resetForm('bannerForm');
		    	this.$emit('backBannerList');
		    }
		},
		components:{}
	}
</script>
<style>
.addOrEditBanner{width: 60%;margin: auto;}
</style>