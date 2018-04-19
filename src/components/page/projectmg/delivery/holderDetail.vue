<template>
	<div class="holderList">
		<p>股东信息</p>
		<table class="infoTable">
				<tr>
					<td class="title">股东姓名</td>
					<td class="">钱媛</td>
					<td class="title">手机号</td>
					<td class="">18956245501</td>
				</tr>
				<tr>
					<td class="title">邮箱</td>
					<td class="">a234@qq.com</td>
					<td class="title">住址</td>
					<td class="">上海市浦东新区</td>
				</tr>
				<tr>
					<td class="title">身份账号</td>
					<td class="">895614256230145789</td>
					<td class="title">持有股份</td>
					<td class="">4%</td>
				</tr>
				<tr>
					<td class="title">订单总额</td>
					<td class="">50000</td>
					<td class="title"></td>
					<td class=""></td>
				</tr>
		</table>
		<p>订单明细</p>
		<el-table
		    :data="tableData"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="name"
		      label="序号"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="原始股东姓名"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="手机号">
		    </el-table-column>
		     <el-table-column
		      prop="name"
		      label="流水ID"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="所占股份"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="原购买金额"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="实际购买金额"
		      width="180">
		    </el-table-column>
		    <el-table-column label="操作">
		      <template scope="scope">
		        <el-button
		          size="small"
		          @click="">查看</el-button>
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
				tableData: [{
		          name: '王小虎',
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