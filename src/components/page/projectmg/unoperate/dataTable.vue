<template>
	<div class="project">
		<el-table
		    :data="tableData"
		    border
		    style="width: 100%;">
		    <el-table-column
		      prop=""
		      label="序号"
		      width="80">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="项目编号"
		      width="250">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="项目名称"
		      width="300">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="目标额度"
		      width="200">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="出让股份"
		      width="100">
		    </el-table-column>
		    <el-table-column label="操作">
		      <template scope="scope">
		        <el-button
		          size="small"
		          @click="operatePro(scope.row)">运营项目</el-button>
		      </template>
		    </el-table-column>
		</el-table>
	</div>
</template>
<script>
import $ from 'jquery'
import {} from 'service/getData'
	export default{
		data(){
			return{
				tableData:[]
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			operatePro(){

			}
		},
		components:{}
	}
</script>
<style>
.project{margin-top: 30px;}
</style>