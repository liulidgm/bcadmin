<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="融资申请" >
                <el-form ref="form" :model="form" label-width="80px" style="width:1220px;margin: 30px auto 50px;">
                    <el-form-item label="申请时间">
                        <el-col :span="3">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width:100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="1" style="text-align: center;width: 50px;">一</el-col>
                        <el-col :span="3">
                            <el-time-picker type="date" placeholder="选择日期" v-model="form.date2" style="width:100%;"></el-time-picker>
                        </el-col>
                        <el-col :span="3" style="margin: 0 32px">
                            <el-input v-model="form.name" placeholder="融资人姓名或手机"></el-input>
                        </el-col>
                        <el-col :span="4" >
                            <el-button type="primary" @click="onSubmit" style="width: 140px;">搜索</el-button>
                        </el-col>
                    </el-form-item>
                </el-form>
                <el-row type="flex" class="row-bg" justify="end" style="margin: 30px 0 20px;">
                    <el-col :span="2"><div class="grid-content bg-purple">合计数据：22条</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">
                        <el-button type="primary" @click="onSubmit" style="width: 140px;">导出</el-button>
                    </div></el-col>
                </el-row>
                <el-table
                    :data="tableData3"
                    style="width:1220px;margin: 0 auto;"
                    height="630">
                    <el-table-column
                        prop="number"
                        label="序号"
                        width="86">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="时间"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="province"
                        label="姓名"
                        width="170">
                    </el-table-column>
                    <el-table-column
                        prop="city"
                        label="手机号"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="邮箱"
                        width="192">
                    </el-table-column>
                    <el-table-column
                        prop="zip"
                        label="公司名称"
                        width="300">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="注册时间"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="注册地址"
                        width="300">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="所属行业"
                        width="150">
                    </el-table-column>
                </el-table>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                    style="width: 1220px;margin: 50px auto;text-align: center"
                >
                </el-pagination>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
  export default {
    data() {
      return {
          form: {
              date1: '',
              date2: '',
          },
          tableData3: [{
              number: '1',
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '799695599@qq.com',
              zip: '上海市普陀区金沙江路 1518 弄',
              time:2222
          }, {
              number: '2',
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '799695599@qq.com',
              zip: '上海市普陀区金沙江路 1518 弄',
              time:2222
          }, ]
      };
    },
    mounted() {
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        }
    },
    components: {}
  }
</script>

<style>

</style>
