<template>
	<div>
	 	<div class="clear" style="margin-bottom:20px">
	 		<el-col :span="2" class="inputTitle">手机号：</el-col>
	 		<el-col :span="5"><el-input v-model="phone"></el-input></el-col>
	 		<el-col :span="2" class="inputTitle" style="margin-left:20px">姓名：</el-col>
	 		<el-col :span="5"><el-input v-model="username"></el-input></el-col>
	 		<el-col :span="2" style="margin-left:20px"><el-button type="primary">搜索</el-button></el-col>
	 		<el-col :span="2"><el-button type="primary">导出列表</el-button></el-col>
	 	</div>
		<el-table
		    :data="tableData"
		    border
		    style="width: 100%;margin:20px 0;">
		    <el-table-column
		      prop="date"
		      label="序号"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="认购总额"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="姓名">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="手机号">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="住址">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="现金收益">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="实物回报">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="积分回报">
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
				phone:'',
				username:'',
				tableData: [{
		          date: '2016-05-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1517 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		          date: '2016-05-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄'
		        }]
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
.inputTitle{line-height: 33px;}
</style>