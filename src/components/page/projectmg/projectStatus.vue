<template>
	<div>
		<el-select v-model="projectStatusValue" @change="changeValue" placeholder="请选择">
			<el-option
			  v-for="item in projectStatus"
			  :key="item.value"
			  :label="item.label"
			  :value="item.value">
			</el-option>
		</el-select>
	</div>
</template>
<script>
import $ from 'jquery'
	export default{
		data(){
			return{
				projectStatusValue:'',
				projectStatus:[
		        	{
			          value: '0',
			          label: '全部'
			        },{
			          value: '1',
			          label: '预热期'
			        },{
			          value: '2',
			          label: '认购期'
			        }, {
			          value: '3',
			          label: '募集失败'
			        },{
			          value: '4',
			          label: '交割中'
			        },{
			          value: '5',
			          label: '交割完成'
			        }, {
			          value: '6',
			          label: '退出'
			        }
			     ],
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			changeValue(){
				this.$emit('getProjectStatusValue', this.projectStatusValue)
			}
		},
		components:{}
	}
</script>
<style>
</style>