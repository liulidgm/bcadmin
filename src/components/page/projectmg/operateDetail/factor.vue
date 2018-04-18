<template>
	<div>
		    <table class="infoTable">
				<tr>
					<td class="title">主营业务</td>
					<td class="txtArea">
						<el-input class="inputArea" type="textarea" :maxlength="5" @change="valueChange" v-model="$store.state.operateDetail.business"></el-input>
						<p class="txtLimit">{{businessLength}}/100</p>
					</td>
				</tr>
				<tr>
					<td class="title">融资用途</td>
					<td class="txtArea">
						<el-input class="inputArea" type="textarea" :maxlength="100" @change="valueChange" v-model="$store.state.operateDetail.purpose"></el-input>
						<p class="txtLimit">{{purposeLength}}/100</p>
					</td>
				</tr>
				<tr>
					<td class="title">融资方式</td>
					<td class="txtArea">
						<el-input class="inputArea" type="textarea" :maxlength="100" @change="valueChange" v-model="$store.state.operateDetail.mode"></el-input>
						<p class="txtLimit">{{modeLength}}/100</p>
					</td>
				</tr>
				<tr>
					<td class="title">退出方式</td>
					<td class="txtArea">
						<el-input class="inputArea" type="textarea" :maxlength="100" @change="valueChange" v-model="$store.state.operateDetail.exitMode"></el-input>
						<p class="txtLimit">{{exitModeLength}}/100</p>
					</td>
				</tr>
				<tr>
					<td class="title">注释</td>
					<td class="txtArea">
						<el-input class="inputArea" type="textarea" :maxlength="100" @change="valueChange" v-model="$store.state.operateDetail.remarks"></el-input>
						<p class="txtLimit">{{remarksLength}}/100</p>
					</td>
				</tr>
			</table>
	</div>
</template>
<script>
import $ from 'jquery'
import {} from 'service/getData'
	export default{
		data(){
			return{
				businessLength:0,
				purposeLength:0,
				modeLength:0,
				exitModeLength:0,
				remarksLength:0,
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			valueChange(){
				this.businessLength = this.$store.state.operateDetail.business.length;
				this.purposeLength= this.$store.state.operateDetail.purpose.length;
				this.modeLength= this.$store.state.operateDetail.mode.length;
				this.exitModeLength= this.$store.state.operateDetail.exitMode.length;
				this.remarksLength= this.$store.state.operateDetail.remarks.length;
			}

		},
		components:{}
	}
</script>
<style>
	.txtArea{position: relative;}
	.inputArea{}
	.inputArea textarea{height: 100px}
	.txtLimit{position: absolute;bottom: 10px;right: 15px;font-size: 12px;}
</style>