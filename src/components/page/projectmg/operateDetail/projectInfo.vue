<template>
	<div class="projectInfo">
		<el-form ref="form" :model="form" label-width="160px">
		  <el-form-item label="选择行业：">
		    <el-select v-model="form.region" placeholder="请选择活动区域">
		      <el-option label="区域一" value="shanghai"></el-option>
		      <el-option label="区域二" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="标签：">
		  	<!-- <el-col :span="24">
			  	<el-tag
				  v-for="tag in tags"
				  :key="tag.name"
				  closable
				  :type="tag.type">
				  {{tag.name}}
				</el-tag>
			</el-col>
			<el-col :span='8' class="tagInput">
				<el-input v-model="form.tagName" maxlength='5' @change="tagChange" ></el-input>
		    	<span class="tagNameLength">{{tagNameLength}}/5</span>
			</el-col>
			<el-col :span='3' style="margin-left:20px;">
				<el-button type="warning" @click="addTag">添加标签</el-button>
			</el-col> -->
		    <el-tag
			  :key="tag.value"
			  v-for="tag in dynamicTags"
			  closable
			  :disable-transitions="false"
			  @close="handleClose(tag)">
			  {{tag.name}}
			</el-tag>
			<el-input
			  class="input-new-tag"
			  v-if="inputVisible"
			  v-model="inputValue"
			  ref="saveTagInput"
			  size="small"
			  :maxlength='5'
			  @keyup.enter.native="handleInputConfirm"
			  @blur="handleInputConfirm"
			>
			</el-input>
			<el-button v-else class="button-new-tag" type="warning" size="small" @click="showInput">+ 添加</el-button>
			<span style="font-size:12px;color:#888">标签不超过5个字</span>
		  </el-form-item>
		  <el-form-item label="项目标题：">
		    <el-col :span="12"><el-input v-model="form.name" @change="proTitleChange" :maxlength="25" placeholder="请设置个性标题"></el-input></el-col>
		    <el-col :span="3">{{proTitleLength}}/25</el-col>
		  </el-form-item>
		  <el-form-item label="上传视频：">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  <el-form-item label="选择视频：">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  <el-form-item label="PC端背景上传：">
		  	<el-col :span='8'>
		    	<el-upload
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="pcBgSuccess"
				  :before-upload="beforePcBgUpload">
				  <img v-if="pcBgUrl" :src="pcBgUrl" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-col>
			<el-col :span="10">
				<p class="uploadTip">图片尺寸1920*460px   大小不得超过500K</p>
			</el-col>
		  </el-form-item>
		  <el-form-item label="PC/APP列表图上传：">
		    <el-col :span='8'>
		    	<el-upload
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="pcAppListSuccess"
				  :before-upload="beforePcAppListUpload">
				  <img v-if="pcAppListUrl" :src="pcAppListUrl" class="avatar1">
				  <i v-else class="el-icon-plus avatar-uploader-icon1"></i>
				</el-upload>
			</el-col>
			<el-col :span="10">
				<p class="uploadTip">图片尺寸760*305px    大小不得超过200K</p>
			</el-col>
		  </el-form-item>
		  <el-form-item label="明星项目宣传图上传：" v-show="!showPro">
		    <el-col :span='24'><el-checkbox v-model="checked">设为推荐明星项目</el-checkbox></el-col>
			<el-col :span='8'>
		    	<el-upload
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="starSuccess"
				  :before-upload="beforeStarUpload">
				  <img v-if="starUrl" :src="starUrl" class="avatar1">
				  <i v-else class="el-icon-plus avatar-uploader-icon1"></i>
				</el-upload>
			</el-col>
			<el-col :span="10">
				<p class="uploadTip">图片尺寸760*305px    大小不得超过200K</p>
			</el-col>
		  </el-form-item>
		  <el-form-item label="PC项目介绍图上传：">
		    <div id="editorPC"></div>
		  </el-form-item>
		  <el-form-item label="APP项目介绍图上传：">
		    <div id="editorApp"></div>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
import $ from 'jquery'
import {} from 'service/getData'
import E from 'wangeditor'
	export default{
		data(){
			return{
				///////标签/////////////
				dynamicTags: [
		          { name: '标签一', type: 'success' },
		          { name: '标签二', type: 'success' },
		         
		        ],
		        inputVisible: false,
        		inputValue: '',
        		//////////////////
        		proTitleLength:0,
        		///////////////
		        tagNameLength:0,
				form:{
					region:"",
					name:'',
					tagName:''
				},
				checked:false,
				////图片上传url/////
				pcBgUrl: '',
				pcAppListUrl:'',
				starUrl:'',
				////编辑器//
				editorApp:'',
				editorPC:''
			}

		},
		props:{showPro:''},
		mixins:[],
		mounted(){
			this.initEditorPC();
			this.initEditorApp();
		},
		methods:{
			tagChange(){
				this.tagNameLength = this.form.tagName.length; 
			},
			proTitleChange(){

			},
			pcBgSuccess(res, file) {
		        this.pcBgUrl = URL.createObjectURL(file.raw);
		    },
		    beforePcBgUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt500k = file.size / 1024  < 500;

		        if (!isJPG) {
		          this.$message.error('图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('图片大小不能超过500K!');
		        }
		        return isJPG && isLt2M;
		    },
		    pcAppListSuccess(res, file) {
		        this.pcAppListUrl = URL.createObjectURL(file.raw);
		    },
		    beforePcAppListUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt500k = file.size / 1024  < 200;

		        if (!isJPG) {
		          this.$message.error('图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('图片大小不能超过200K!');
		        }
		        return isJPG && isLt2M;
		    },
		    starSuccess(res, file) {
		        this.starUrl = URL.createObjectURL(file.raw);
		    },
		    beforeStarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt500k = file.size / 1024  < 200;

		        if (!isJPG) {
		          this.$message.error('图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('图片大小不能超过200K!');
		        }
		        return isJPG && isLt2M;
		    },
		    initEditorPC(){
        		/*初始化编辑器*/
	        	this.editorPC = new E('#editorPC');
	        	// 自定义菜单配置
			    this.editorPC.customConfig.menus = [
			        'head',  // 标题
				    'bold',  // 粗体
				    'italic',  // 斜体
				    'underline',  // 下划线
				    'strikeThrough',  // 删除线
				    'foreColor',  // 文字颜色
				    'backColor',  // 背景颜色
				    'list',  // 列表
				    'justify',  // 对齐方式
				    'quote',  // 引用
				    'image',  // 插入图片
	    			'table',  // 表格
	    			'undo',  // 撤销
	    			'redo'  // 重复
			    ];
			    //console.log(baseUrl+'upload/editorImg');
			    this.editorPC.customConfig.uploadImgServer = '/SCLogin/uploadFile.do';  // 上传图片到服务器
			    this.editorPC.customConfig.uploadFileName = 'file';
			    this.editorPC.customConfig.showLinkImg = false;//隐藏网络图片上传tab
			    this.editorPC.customConfig.uploadImgHooks = {
			    	customInsert: function (insertImg, result, editor) {
				        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
				        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
				        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
				        var url = result.filePath
				        insertImg(url)
				        // result 必须是一个 JSON 格式字符串！！！否则报错
				    }
			    }
		        this.editorPC.create();
        	},
        	initEditorApp(){
        		/*初始化编辑器*/
	        	this.editorApp = new E('#editorApp');
	        	// 自定义菜单配置
			    this.editorApp.customConfig.menus = [
			        'head',  // 标题
				    'bold',  // 粗体
				    'italic',  // 斜体
				    'underline',  // 下划线
				    'strikeThrough',  // 删除线
				    'foreColor',  // 文字颜色
				    'backColor',  // 背景颜色
				    'list',  // 列表
				    'justify',  // 对齐方式
				    'quote',  // 引用
				    'image',  // 插入图片
	    			'table',  // 表格
	    			'undo',  // 撤销
	    			'redo'  // 重复
			    ];
			    //console.log(baseUrl+'upload/editorImg');
			    this.editorApp.customConfig.uploadImgServer = '/SCLogin/uploadFile.do';  // 上传图片到服务器
			    this.editorApp.customConfig.uploadFileName = 'file';
			    this.editorApp.customConfig.showLinkImg = false;//隐藏网络图片上传tab
			    this.editorApp.customConfig.uploadImgHooks = {
			    	customInsert: function (insertImg, result, editor) {
				        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
				        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
				        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
				        var url = result.filePath
				        insertImg(url)
				        // result 必须是一个 JSON 格式字符串！！！否则报错
				    }
			    }
		        this.editorApp.create();
        	},
        	/////标签/////
        	handleClose(tag) {
		        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
		    },
		    showInput() {
		        this.inputVisible = true;
		        this.$nextTick(_ => {
		          this.$refs.saveTagInput.$refs.input.focus();
		        });
		      },
		    handleInputConfirm() {
		        let inputValue = this.inputValue;
		        if (inputValue) {
		          this.dynamicTags.push({'name':inputValue,value:''});
		        }
		        this.inputVisible = false;
		        this.inputValue = '';
		    }
		},
		components:{}
	}
</script>
<style>
.projectInfo{width: 70%}
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
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 100px;
    line-height: 100px!important;
    text-align: center;
  }
  .avatar {
    width: 200px;
    height: 100px;
    display: block;
  }
  .avatar-uploader-icon1 {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 160px;
    line-height: 160px!important;
    text-align: center;
  }
  .avatar1 {
    width: 200px;
    height: 160px;
    display: block;
  }
  .uploadTip{color:#888;font-size: 14px;}
  /*添加标签样式*/
    .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .el-input--small {
    font-size: 13px;
    width: 18%!important;
}
</style>