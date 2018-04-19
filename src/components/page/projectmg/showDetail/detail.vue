<template>
	<div class="showDetail">
		<table class="infoTable">
				<tr>
					<td class="title">项目名称</td>
					<td class="" style="position:relative">项目名称测试<span class="showTag">展示项目</span></td>
					<td class="title">展示代码</td>
					<td class="">SP9034</td>
				</tr>
				<tr>
					<td class="title">项目所在地址</td>
					<td class="">
						<el-input v-model="$store.state.operateDetail.proAddress" placeholder="请输入内容"></el-input>
					</td>
					<td class="title">企业行业类别</td>
					<td class="">
						<el-input v-model="$store.state.operateDetail.proAddress" placeholder="请输入内容"></el-input>
					</td>
				</tr>
				<tr>
					<td class="title">企业名称</td>
					<td class="">
						<el-input v-model="$store.state.operateDetail.proAddress" placeholder="请输入内容"></el-input>
					</td>
					<td class="title">企业机构组织代码</td>
					<td class="">
						<el-input v-model="$store.state.operateDetail.proAddress" placeholder="请输入内容"></el-input>
					</td>
				</tr>
				<tr>
					<td class="title">企业法人</td>
					<td class="">
						<el-input v-model="$store.state.operateDetail.proAddress" placeholder="请输入内容"></el-input>
					</td>
					<td class="title">企业注册地址</td>
					<td class="">
						<el-input v-model="$store.state.operateDetail.proAddress" placeholder="请输入内容"></el-input>
					</td>
				</tr>
		</table>
		<projectInfo :showPro="showPro"></projectInfo>
		<div style="margin-left:230px;">
			<el-button type="primary">保存</el-button>
			<el-button type="primary">发布</el-button>
			<el-button type="warning">下线</el-button>
		</div>
	</div>
</template>
<script>
import $ from 'jquery'
import {} from 'service/getData'
import projectInfo from '../operateDetail/projectInfo'
	export default{
		data(){
			return{
				showPro:true
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			

		},
		components:{projectInfo}
	}
</script>
<style>
.showDetail{width: 80%;margin: auto;}
.showTag{position: absolute;background: #ddd;color:#fff;font-size: 12px;padding: 3px 5px;right: 5px;}
</style>