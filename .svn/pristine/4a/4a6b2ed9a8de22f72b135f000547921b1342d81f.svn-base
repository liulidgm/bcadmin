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
		    <el-tab-pane label="项目进展" name="second"></el-tab-pane>
		    <el-tab-pane label="投资人" name="third">3333333333333</el-tab-pane>
		    <el-tab-pane label="融资回报" name="fourth">333333333</el-tab-pane>
		</el-tabs>
		<!-- <el-button type="primary" @click="save">保存</el-button> -->
	</div>
</template>
<script>
import $ from 'jquery'
import {} from 'service/getData'
import factor from './factor'
import financeInfo from './financeInfo'
import financeReturn from './financeReturn'
import projectInfo from './projectInfo'
	export default{
		data(){
			return{
				activeName:'first',
				
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
		components:{factor,financeInfo,financeReturn,projectInfo}
	}
</script>
<style>
.projectDetail{width: 80%;margin: auto;}
.projectDetail table{width:100%;border:1px solid #ddd;border-collapse: collapse;margin: 20px 0;}
.projectDetail table td{border:1px solid #ddd;padding:5px 7px;text-align: center;color:#666;}
.projectDetail table .title{color:#333;width: 200px;background: #f5f5f5;}
.projectDetail table img{width: 80px;height: 40px;margin:0 5px;}
</style>