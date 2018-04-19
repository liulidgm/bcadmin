<template>
    <div>
        <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
            <el-col :span="3" :offset="20">
                <div class="grid-content bg-purple">
                    <el-button type="primary"  style="width: 140px;"  @click="isShow = true">新增+</el-button>
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
                label="创建时间"
                prop="name"
                width="200">
            </el-table-column>
            <el-table-column
                prop="name"
                label="版本号"
                width="350">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        size="small"
                        @click="isShow = true">查看</el-button>
                    <el-button
                        size="small"
                        type="warning"
                        @click="cancleHandle"
                       >删除</el-button>
                    <el-button
                        size="small"
                        type="primary"
                        >设为默认</el-button>
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
        <addAppVersion :isShow="isShow" @isShowHandle="isShowHandle"></addAppVersion>
    </div>
</template>

<script type="text/ecmascript-6">
    import addAppVersion from './addAppVersion.vue'
    export default {
        data() {
            return {
                isShow:false,
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
        methods: {
            isShowHandle() {
              this.isShow = false;
            },
            cancleHandle() {
                this.$confirm('确认删除该版本吗？', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: false
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        },
        components: {addAppVersion}
    }
</script>

<style >
</style>
