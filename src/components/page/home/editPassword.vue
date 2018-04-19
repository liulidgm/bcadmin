<template>
    <div>
        <el-dialog title="修改密码" :visible.sync="dialogFormVisible" style="width: 900px;margin:0 auto;">
            <el-form :model="form" >
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                    <el-form-item label="原密码">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码">
                        <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item label="确定密码">
                        <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size='large' @click="dialogFormVisible = false" style="width:100%;">修 改</el-button>
                    </el-form-item>

                </el-form>
            </el-form>
            <!--<div slot="footer" class="dialog-footer"></div>-->
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
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
