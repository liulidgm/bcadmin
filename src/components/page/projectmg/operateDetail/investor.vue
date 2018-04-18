<template>
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
	      label="订单编号"
	      width="180">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="时间">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="投资人">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="认购金额">
	    </el-table-column>
	  </el-table>
</template>
<script>
import $ from 'jquery'
import {} from 'service/getData'
	export default{
		data(){
			return{
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

</style>