<template>
	<div class="financeReturn">
		<div v-show="isAddReturn">
			<div class="clear colLine">
				<el-col :span="10"><el-input placeholder="请输入内容"></el-input></el-col>
				<el-col :span="14">&nbsp;&nbsp;<el-button @click="delReturn">删除</el-button></el-col>
			</div>
			<p class="itemTitle">现金收益<span class="tipTxt" style="margin-left:70px;">投资者可获得的现金收益率</span></p>
			<div class="clear colLine">
				<el-col :span="3" class="inputTitle">收益率(年化)：</el-col>
				<el-col :span="6"><el-input placeholder="请输入内容"></el-input></el-col>
				<el-col :span="3" class="inputTitle" style="margin-left:30px;">预计回报时间：</el-col>
				<el-col :span="6"><el-input placeholder="请输入内容"></el-input></el-col>
			</div>
			<p class="itemTitle">实物或积分回报<span class="tipTxt">用户认购项目达到相应金额时给予的项目回报</span></p>
			<div class="clear colLine">
				<el-col :span="3" class="inputTitle">预计回报时间：</el-col>
				<el-col :span="6"><el-input placeholder="请输入内容"></el-input></el-col>
			</div>
			<div v-show="isAddStall">
				<div class="clear colLine">
					<el-col :span="3" class="inputTitle">档位金额：</el-col>
					<el-col :span="6"><el-input placeholder="请输入内容"></el-input></el-col>
					<el-col :span="2" class="inputTitle">&nbsp;&nbsp;万元</el-col>
					<el-col :span="2" class="inputTitle">&nbsp;<el-button @click="delStall">删除</el-button></el-col>
				</div>
				<div class="clear colLine">
					<el-col :span="3" class="inputTitle">实物回报：</el-col>
					<el-col :span="6"><el-input placeholder="请输入内容"></el-input></el-col>
					<el-col :span="3" class="inputTitle" style="margin-left:30px;">积分赠送比例：</el-col>
					<el-col :span="6"><el-input placeholder="请输入内容"></el-input></el-col>
				</div>
			</div>
			<el-button type="warning" @click="addStall" style="margin:10px 0">添加档位</el-button>
		</div>
		<el-button type="warning" @click="addReturn">添加回报</el-button>
	</div>
</template>
<script>
import $ from 'jquery'
import risk from '../risk'
import {} from 'service/getData'
	export default{
		data(){
			return{
				returnForm:{
					returnName:''
				},
				isAddReturn:true,
				isAddStall:false
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			addReturn(){
				this.isAddReturn = true;
			},
			delReturn(){
				this.isAddReturn = false;
			},
			addStall(){
				this.isAddStall = true
			},
			delStall(){
				this.isAddStall = false
			}
		},
		components:{risk}
	}
</script>
<style>
.financeReturn{margin-top:20px;font-size: 14px;}
.colLine{margin:10px 0;}
.itemTitle{margin:10px 0;color: #404B75}
.tipTxt{color: #888;margin-left: 30px;}
.inputTitle{line-height: 33px;}
</style>