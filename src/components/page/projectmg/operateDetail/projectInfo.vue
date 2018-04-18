<template>
	<div class="projectInfo">
		<el-form ref="form" :model="form" label-width="160px">
		  <el-form-item label="选择行业：">
		    <el-select v-model="form.region" placeholder="请选择活动区域">
		      <el-option label="区域一" value="shanghai"></el-option>
		      <el-option label="区域二" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="标签：" class="tagInput">
		  	<el-tag
			  v-for="tag in tags"
			  :key="tag.name"
			  closable
			  :type="tag.type">
			  {{tag.name}}
			</el-tag>
		    <el-input v-model="form.tagName" maxlength="5" @change="tagChange" ></el-input>
		    <span class="tagNameLength">{{tagNameLength}}/5</span>
		  </el-form-item>
		  <el-form-item label="项目标题：">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  <el-form-item label="上传视频：">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  <el-form-item label="选择视频：">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  <el-form-item label="PC端背景上传：">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  <el-form-item label="PC/APP列表图上传：">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  <el-form-item label="明星项目宣传图上传：">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  <el-form-item label="PC项目介绍图上传：">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  <el-form-item label="APP项目介绍图上传：">
		    <el-input v-model="form.name"></el-input>
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
				tags: [
		          { name: '标签一', type: 'success' },
		          { name: '标签二', type: 'success' },
		         
		        ],
		        tagNameLength:0,
				form:{
					region:"",
					name:'',
					tagName:''
				}
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			tagChange(){
				this.tagNameLength = this.tagName.length; 
			}
		},
		components:{}
	}
</script>
<style>
.projectInfo{}
.el-tag--success {
    margin-right: 15px;
}
.tagInput{position: relative;}
.tagNameLength{
	position: absolute;    
	right: 10px;
    bottom: -1px;
    color: #ccc;
}
</style>