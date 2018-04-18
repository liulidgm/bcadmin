<template>
	<div class="projectProgress">
		<div class="clear colLine">
			<el-col :span="2" class="inputTitle">项目时间：</el-col>
			<el-col :span="8">
				<el-date-picker
			      v-model="value1"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
			</el-col>
		</div>
		<div class="clear colLine">
			<el-col :span="2" class="inputTitle">项目进展：</el-col>
			<el-col :span="8">
				<el-input type="textarea" :autosize="{ minRows: 4}"></el-input>
			</el-col>
		</div>
		<div class="clear colLine">
			<el-col :span="2" class="inputTitle">上传图片：</el-col>
			<el-col :span="8">
				<el-upload
				  action="https://jsonplaceholder.typicode.com/posts/"
				  list-type="picture-card"
				  :on-preview="handlePictureCardPreview"
				  :on-remove="handleRemove">
				  <i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible">
				  <img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
			</el-col>
		</div>
	</div>
</template>
<script>
import $ from 'jquery'
import {} from 'service/getData'
	export default{
		data(){
			return{
				value1:'',
				dialogImageUrl: '',
        		dialogVisible: false
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			handleRemove(file, fileList) {
	        	console.log(file, fileList);
	      	},
	      	handlePictureCardPreview(file) {
	        	this.dialogImageUrl = file.url;
	        	this.dialogVisible = true;
	      	}
		},
		components:{}
	}
</script>
<style>
.inputTitle{line-height: 33px;}
.colLine{margin:10px 0;}
</style>