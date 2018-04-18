<template>
    <div>
        <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
            <el-col :span="3" :offset="20">
                <div class="grid-content bg-purple">
                    <el-button type="primary"  style="width: 140px;">新增管理员+</el-button>
                </div>
            </el-col>
        </el-row>

        <el-table
            :data="tableData"
            style="width: 1220px;margin:0 auto;">
            <el-table-column
                label="序号"
                prop="name"
                width="120">
            </el-table-column>
            <el-table-column
                label="姓名"
                prop="name"
                width="150">
            </el-table-column>
            <el-table-column
                prop="name"
                label="手机号"
                width="160">
            </el-table-column>
            <el-table-column
                prop="name"
                label="创建时间"
                width="140">
            </el-table-column>
            <el-table-column
                prop="name"
                label="权限"
                width="147">
            </el-table-column>
            <el-table-column
                prop="name"
                label="状态"
                width="150">
            </el-table-column>
            <el-table-column
                label="操作"
                width="350"
            >
                <template slot-scope="scope">
                    <el-button
                        type="primary"
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)">停用</el-button>
                    <el-button
                        size="small"
                        type="primary"
                        @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    <el-button
                        size="small"
                        type="warning"
                        @click="handleDelete(scope.$index, scope.row)">解锁</el-button>
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
