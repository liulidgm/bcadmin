<template>
	<div class="unoperateList">
		<el-form :inline="true" :label-position="labelPosition" ref="queryform" label-width="110px" :model="queryform">
			<el-form-item label="产品编号 :">
				<el-input v-model="queryform.projectCode"></el-input>
			</el-form-item>
			<el-form-item label="项目名称 :">
			    <el-input v-model="queryform.projectName"></el-input>
			</el-form-item>
			<el-form-item label="类型 :">
				<el-select v-model="queryform.projectType" placeholder="请选择">
					<el-option
					  v-for="item in projectType"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
			   <el-button type="primary" @click="">搜索</el-button>
			   <el-button type="primary" @click="">新建展示项目</el-button>
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
					projectType:''
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