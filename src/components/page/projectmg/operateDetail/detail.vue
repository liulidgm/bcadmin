<template>
	<div class="projectDetail">
		<table class="infoTable">
			<tr>
				<td class="title">项目名称</td>
				<td>龙臻食品一期</td>
				<td class="title">项目编号</td>
				<td>SP9232</td>
			</tr>
			<tr>
				<td class="title">目标额度(万元)</td>
				<td>龙臻食品一期</td>
				<td class="title">出让股份</td>
				<td>20%</td>
			</tr>

		</table>
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="项目信息" name="first">
		    	<div class="itemTitle">融资信息</div>
		    	<financeInfo></financeInfo>
		    	<div class="itemTitle">项目要素</div>
		    	<factor></factor>
		    	<div class="itemTitle">融资回报</div>
		    	<financeReturn></financeReturn>
		    	<div class="itemTitle">项目资料</div>
		    	<projectInfo></projectInfo>
		    </el-tab-pane>
		    <el-tab-pane label="项目进展" name="second">
		    	<projectProgress></projectProgress>
		    </el-tab-pane>
		    <el-tab-pane label="投资人" name="third">
		    	<investor></investor>
		    </el-tab-pane>
		    <el-tab-pane label="融资回报" name="fourth">333333333</el-tab-pane>
		</el-tabs>
		<div style="margin-left:200px">
			<el-button type="primary" @click="save">保存</el-button>
			<el-button type="primary" @click="">发布</el-button>
			<el-button type="warning" @click="">下线</el-button>
			<el-button type="warning" @click="">取消首页精选</el-button>
			<el-button type="primary" @click="">手动成立</el-button>
			<el-button type="primary" @click="">手动失败</el-button>
		</div>
	</div>
</template>
<script>
import $ from 'jquery'
import {} from 'service/getData'
import factor from './factor'
import financeInfo from './financeInfo'
import financeReturn from './financeReturn'
import projectInfo from './projectInfo'
import projectProgress from './projectProgress'
import investor from './investor'
	export default{
		data(){
			return{
				activeName:'third',
				
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			handleClick(tab,event){
				console.log(tab, event);
			},
			//////
			
			save(){
			}
			
		},
		components:{factor,financeInfo,financeReturn,projectInfo,projectProgress,investor}
	}
</script>
<style>
.projectDetail{width: 80%;margin: auto;}
.infoTable{width:100%;border:1px solid #ddd;border-collapse: collapse;margin: 20px 0;}
.infoTable td{border:1px solid #ddd;padding:5px 7px;text-align: center;color:#666;}
.infoTable .title{color:#333;width: 200px;background: #f5f5f5;}
.infoTable img{width: 80px;height: 40px;margin:0 5px;}
</style>