<template>
    <div>

        <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
            <el-col :span="5" >
                <div class="grid-content bg-purple">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="筛选">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
            <el-col :span="3" :offset="10">
                <div class="grid-content bg-purple">
                    <el-button type="primary"  style="width: 140px;">新增+</el-button>
                </div>
            </el-col>
        </el-row>

        <el-table
            :data="tableData"
            style="width: 1220px;margin:0 auto;">
            <el-table-column
                label="序号"
                prop="name"
                width="180">

            </el-table-column>
            <el-table-column
                label="标题"
                prop="name"
                width="350">
            </el-table-column>
            <el-table-column
                prop="name"
                label="创建时间"
                width="200">
            </el-table-column>
            <el-table-column
                prop="name"
                label="状态"
                width="200">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                        size="small"
                        type="warning"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            style="width: 1220px;margin: 50px auto;text-align: center"
        >
        </el-pagination>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
          form: {
              region: '',

          },
          tableData: [{
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-08',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-06',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }],
      };
    },
    mounted() {
    },
    methods: {},
    components: {}
  }
</script>

<style >
</style>
