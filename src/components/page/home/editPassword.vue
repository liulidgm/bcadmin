<template>
    <div>
        <el-dialog title="修改密码" :visible.sync="dialogFormVisible" >
            <el-form :model="form">
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                    <el-form-item label="名称">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                </el-form>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" size='large' @click="dialogFormVisible = false">修 改</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
          dialogFormVisible: false,
          labelPosition: 'right',
          formLabelAlign: {
              name: '',
              region: '',
              type: ''
          },
          form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
          },
          formLabelWidth: '120px'
      };
    },
      props:{
          dialogFormVisible:''
      },
    mounted() {
    },
    methods: {},
    components: {}
  }
</script>

<style >
</style>
