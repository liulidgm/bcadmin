<template>
	<div class="unoperateList">
		<el-form :inline="true" :label-position="labelPosition" ref="queryform" label-width="110px" :model="queryform">
			<el-form-item label="项目编号 :">
				<el-input v-model="queryform.projectCode"></el-input>
			</el-form-item>
			<el-form-item label="项目名称 :">
			    <el-input v-model="queryform.projectName"></el-input>
			</el-form-item>
			<el-form-item label="交割完成时间 :">
			    <el-col :span="11">
			      <el-date-picker type="date" placeholder="选择日期" v-model="queryform.startTime" style="width: 100%;"></el-date-picker>
			    </el-col>
			    <el-col class="line" :span="2">-</el-col>
			    <el-col :span="11">
			      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="queryform.endTime" style="width: 100%;"></el-time-picker>
			    </el-col>
			</el-form-item>
			<el-form-item>
			   <el-button type="primary" @click="">搜索</el-button>
			</el-form-item>
		</el-form>
		<dataTable></dataTable>
	</div>
</template>
<script>
import $ from 'jquery'
import risk from '../risk'
import dataTable from './dataTable'
import {} from 'service/getData'
	export default{
		data(){
			return{
				labelPosition:'right',
				queryform:{
					projectCode:'',
					projectName:'',
					startTime:'',
					endTime:''
				},
				tableData:[],
				projectType:[
			     	{
			     		value:'0',
			     		label:'展示'
			     	},{
			     		value:'1',
			     		label:'正常'
			     	}
			     ],
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			getRiskValue(params){
				console.log(params);
			}
		},
		components:{risk,dataTable}
	}
</script>
<style>
</style>