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
		      label="时间"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="项目编号"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="项目名称"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="项目行业"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="项目状态"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="风险等级"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="目标额度"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="募集进度"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="项目积分"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="运营状态"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop=""
		      label="是否精选">
		    </el-table-column>
		    <el-table-column label="操作" width="180">
		      <template scope="scope">
		        <el-button
		          size="small"
		          @click="detail(scope.row)">查看</el-button>
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

		},
		components:{}
	}
</script>
<style>
.project{margin-top: 30px;}
</style>