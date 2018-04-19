<template>
    <el-dialog :title="title" :visible.sync="dialogFormVisible" style="width: 900px;margin:0 auto;">
        <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域" style="width: 330px;">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="初始密码" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center;">
            <el-button @click="dialogFormVisible = false" style="width: 120px;">取消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false" style="width: 120px;">修改</el-button>
        </div>
    </el-dialog>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
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
          formLabelWidth: '80px'
      };
    },
      props:{
            title:'',
          dialogFormVisible:'',
          userInfo:{}
      },
    mounted() {
    },
    methods: {},
    components: {}
  }
</script>

<style>
</style>
