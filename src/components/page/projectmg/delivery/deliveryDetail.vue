<template>
	<div class="deliveryDetail">
		<div class="clear">
			<el-col :span="12">测试项目一期/SP9232</el-col>
			<el-col :span="12" style="text-align:right">
				<el-button v-if="!isEdit" type="primary" @click="editParams">编辑</el-button>
				<el-button v-else="" type="warning" @click="saveEditParams">保存</el-button>
			</el-col>
		</div>
		<table class="infoTable">
				<tr>
					<td class="title">项目名称</td>
					<td class="">测试项目一期</td>
					<td class="title">项目编号</td>
					<td class="">SP9232</td>
				</tr>
				<tr>
					<td class="title">实际募集金额</td>
					<td class=""><span v-if="!isEdit">{{value1}}</span><el-input v-else :value="value1" style="width:50%"></el-input></td>
					<td class="title">实际出让股份</td>
					<td class=""><span v-if="!isEdit">{{value2}}</span><el-input v-else :value="value2" style="width:50%"></el-input></td>
				</tr>
				<tr>
					<td class="title">企业名称</td>
					<td class="">华夏基金</td>
					<td class="title">已认购股东数</td>
					<td class="">12</td>
				</tr>
				<tr>
					<td class="title">项目所在地</td>
					<td class="">上海</td>
					<td class="title"></td>
					<td class=""></td>
				</tr>
		</table>
		<div v-if="!showHolderDetail">
			<div class="clear" style="border-bottom:1px solid #ddd;padding:5px 0">
				<el-col :span="12" style="color:#20a0ff">股东列表</el-col>
				<el-col :span="12" style="text-align:right">
					<el-button type="primary" @click="">导出列表</el-button>
				</el-col>
			</div>
			<div class="holderList">
				<div class="clear">
					<el-col :span="2" class="inputTitle">手机号：</el-col>
					<el-col :span="5"><el-input></el-input></el-col>
					<el-col :span="2" class="inputTitle">姓名：</el-col>
					<el-col :span="5"><el-input></el-input></el-col>
					<el-col :span="2" class="inputTitle">流水ID：</el-col>
					<el-col :span="5"><el-input></el-input></el-col>
				</div>
				<div class="clear" style="margin:15px 0;">
					<el-col :span="2">&nbsp;</el-col>
					<el-col :span="2"><el-button type="primary">搜索</el-button></el-col>
					<el-col :span="2"><el-button>清空条件</el-button></el-col>
				</div>
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
				      label="订单总额"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="持有股份">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="流水ID"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="手机号">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="住址"
				      width="180">
				    </el-table-column>
				    <el-table-column label="操作">
				      <template scope="scope">
				        <el-button
				          size="small"
				          @click="holderDetail()">查看</el-button>
				      </template>
				    </el-table-column>

				</el-table>
			</div>
		</div>
		<div v-else>
			<div class="clear" style="border-bottom:1px solid #ddd;padding:5px 0">
				<el-col :span="12" style="color:#20a0ff">股东详情</el-col>
				<el-col :span="12" style="text-align:right">
					<el-button type="danger" @click="closeHolderDetail">关闭</el-button>
				</el-col>
			</div>
			<holderDetail></holderDetail>
		</div>
		
	</div>
</template>
<script>
import $ from 'jquery'
import {} from 'service/getData'
import holderDetail from './holderDetail'
	export default{
		data(){
			return{
				isEdit:false,
				showHolderDetail:false,
				value1:'120000',
				value2:'12%',
				tableData: [{
		          name: '王小虎',
		        }]
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			editParams(){
				this.isEdit = true;
			},
			saveEditParams(){
				this.isEdit = false;
			},
			holderDetail(){
				this.showHolderDetail = true
			},
			closeHolderDetail(){
				this.showHolderDetail = false;
			}
		},
		components:{holderDetail}
	}
</script>
<style>
.deliveryDetail{width: 80%;margin: auto; }
.infoTable{margin-top: 20px;}
.holderList{margin-top: 15px}
.inputTitle{line-height: 33px;text-align: right;}
</style>