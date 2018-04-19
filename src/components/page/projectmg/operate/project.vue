<template>
	<div class="project">
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
		    <el-tab-pane label="运营项目" name="first">
		    	<el-tabs v-model="activeName2" @tab-click="childHandleClick">
		    		<el-tab-pane :label="allProject" name="allProject">
		    			<el-form :inline="true" :label-position="labelPosition" ref="formLabelAlign" label-width="110px" :model="formLabelAlign">
							<el-form-item label="产品编号 :">
							    <el-input v-model="formLabelAlign.type"></el-input>
							</el-form-item>
							<el-form-item label="关联用户 :">
							    <el-input v-model="formLabelAlign.type"></el-input>
							</el-form-item>
							<el-form-item label="项目起止日期 :">
							    <el-col :span="11">
							    	<el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date1" style="width: 100%;"></el-date-picker>
							    </el-col>
							    <el-col class="line"  :span="2">-</el-col>
							    <el-col :span="11">
							    	<el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date2" style="width: 100%;"></el-date-picker>
							    </el-col>
							</el-form-item>
							<el-form-item label="行业类别 :">
							    <el-input v-model="formLabelAlign.type"></el-input>
							</el-form-item>
							<el-form-item label="风险等级 :">
								<risk @getRiskValue="getRiskValue"></risk>
							</el-form-item>
							<el-form-item label="运营状态 :">
							    <operateStatus @getOperateValue='getOperateValue'></operateStatus>
							</el-form-item>
							<el-form-item label="项目状态 :">
								<projectStatus @getProjectStatusValue='getProjectStatusValue'></projectStatus>
							</el-form-item>
							<el-form-item label="类型 :">
							    <el-select v-model="formLabelAlign.projectType" placeholder="请选择">
								    <el-option
								      v-for="item in projectType"
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="精选状态 :">
							    <el-select v-model="formLabelAlign.selectedType" placeholder="请选择">
								    <el-option
								      v-for="item in selectedType"
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
								</el-select>
							</el-form-item>
						</el-form>
						<div style="margin-left:30px;">
							<el-button type="primary" icon="el-icon-search" @click="query">搜索</el-button>
							<el-button @click="resetForm('formLabelAlign')">清除选项</el-button>
						</div>
						<operateTable></operateTable>
		    		</el-tab-pane>
				   	<el-tab-pane :label="unpub" name="second"></el-tab-pane>
				    <el-tab-pane :label="online" name="third">3333333333333</el-tab-pane>
				    <el-tab-pane :label="offline" name="fourth">5675678</el-tab-pane>
				</el-tabs>
		    </el-tab-pane>
		    <el-tab-pane label="未运营项目" name="second">
		    	<unoperate></unoperate>
		    </el-tab-pane>
		    <el-tab-pane label="交割完成项目" name="third">
		    	<delivery></delivery>
		    </el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
import $ from 'jquery'
import operateTable from './operatePro'
import risk from '../risk'
import unoperate from '../unoperate/list'
import delivery from '../delivery/list'
import operateStatus from '../operateStatus'
import projectStatus from '../projectStatus'
import {} from 'service/getData'
	export default{
		data(){
			return{
				activeName: 'first',
				activeName2: 'allProject',
				allProject:'全部项目(20)',
				unpub:'未发布项目(16)',
				online:'上线项目(2)',
				offline:'下线项目(2)',
				///////
				labelPosition:'right',
				formLabelAlign: {
		          name: '',
		          region: '',
		          type: '',
		          date1:'',
		          date2:'',
		          risk:'',
		          projectStatus:'',
		          operateStatus:'',
		        },
			     projectType:[
			     	{
			     		value:'0',
			     		label:'展示'
			     	},{
			     		value:'1',
			     		label:'正常'
			     	}
			     ],
			     selectedType:[
			     	{
			     		value:'1',
			     		label:'是'
			     	},{
			     		value:'0',
			     		label:'否'
			     	}
			     ]

			}
		},
		mixins:[],
		mounted(){
		},
		methods:{
			handleClick(tab, event) {
		       console.log(tab, event);
		    },
		    childHandleClick(tab,event){
		    	console.log(tab, event);
		    },
		    getRiskValue(params){
		    	console.log(params);
		    },
		    getOperateValue(params){
		    	console.log(params);
		    },
		    getProjectStatusValue(params){
				console.log(params);
		    },
		    query(){

		    },
		    resetForm(formName) {
		    	console.log('ddd');
		        this.$refs[formName].resetFields();
		    }
		},
		components:{operateTable,risk,operateStatus,projectStatus,unoperate,delivery}
	}
</script>
<style>
</style>