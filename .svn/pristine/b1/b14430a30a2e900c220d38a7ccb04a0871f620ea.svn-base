<template>
	<el-select v-model="riskValue" @change="changeValue" placeholder="请选择">
		<el-option
		  v-for="item in risk"
		  :key="item.value"
		  :label="item.label"
		  :value="item.value">
		</el-option>
	</el-select>
</template>
<script>
import $ from 'jquery'
	export default{
		data(){
			return{
				riskValue:'',
				risk: [
			        {
			          value: '0',
			          label: '全部'
			        },{
			          value: '1',
			          label: '低'
			        }, {
			          value: '2',
			          label: '中低'
			        }, {
			          value: '3',
			          label: '中'
			        }, {
			          value: '4',
			          label: '中高'
			        }, {
			          value: '5',
			          label: '高'
			        }
		        ],
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			changeValue(){
				this.$emit('getRiskValue', this.riskValue)
			}
		},
		components:{}
	}
</script>
<style>
</style>