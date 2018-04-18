<template>
	<div class="financeReturn">
		<div v-show="isAddReturn">
			<div>添加回报</div>
			<div v-show="isAddStall">档位</div>
			<el-button type="warning" @click="addStall" style="margin:10px 0">添加档位</el-button>
		</div>
		<el-button type="warning">添加回报</el-button>
	</div>
</template>
<script>
import $ from 'jquery'
import risk from '../risk'
import {} from 'service/getData'
	export default{
		data(){
			return{
				isAddReturn:true,
				isAddStall:false
			}

		},
		mixins:[],
		mounted(){
		},
		methods:{
			addStall(){
				this.isAddStall = true
			}
		},
		components:{risk}
	}
</script>
<style>

</style>