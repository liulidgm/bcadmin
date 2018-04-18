<template>
	<div>
		<el-select v-model="operateStatusValue" @change="changeValue" placeholder="请选择">
			<el-option
			  v-for="item in operateStatus"
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
				operateStatusValue:'',
				operateStatus: [
			        {
			          value: '0',
			          label: '全部'
			        },{
			          value: '1',
			          label: '未发布'
			        }, {
			          value: '2',
			          label: '上线'
			        }, {
			          value: '3',
			          label: '下线'
			        }
		        ],
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			changeValue(){
				this.$emit('getOperateValue', this.operateStatusValue)
			}
		},
		components:{}
	}
</script>
<style>
</style>