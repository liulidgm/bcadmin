<template>
    <div>
        <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
            <el-col :span="3">
                <div class="grid-content bg-purple">
                    <el-button type="primary"  style="width: 140px;">批量删除</el-button>
                </div>
            </el-col>
            <el-col :span="5" :offset="10">
                <div class="grid-content bg-purple">
                    <el-form ref="form" :model="form" label-width="120px">
                        <el-form-item label="显示时间（秒）">
                            <el-input placeholder="5"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
            <el-col :span="3" >
                <div class="grid-content bg-purple">
                    <el-button type="primary"  style="width: 140px;">保存显示时间</el-button>
                </div>
            </el-col>
            <el-col :span="3" >
                <div class="grid-content bg-purple">
                    <el-button type="primary"  style="width: 140px;">新增+</el-button>
                </div>
            </el-col>
        </el-row>
        <el-table
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 1220px;margin: 0 auto;"
            @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                label="图片"
                width="350">
                <template slot-scope="scope">
                    <img src="" alt="">
                </template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="上线时间"
                width="200">
            </el-table-column>
            <el-table-column
                prop="address"
                label="状态"
                width="200">
               预上线
            </el-table-column>
            <el-table-column
                prop="address"
                label="操作"
                width="413"
                show-overflow-tooltip>
                <template slot-scope="scope">
                    <el-button type="primary" size="small" style="width:80px;">停用</el-button>
                    <el-button type="warning" size="small" style="width:80px;">删除</el-button>
                    <el-button type="primary" size="small" style="width:80px;">编辑</el-button>
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
                    name: '',
                },
                tableData3: [{
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
                multipleSelection: [],
            }
        },
        mounted() {
        },
        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }

        },
        components: {}
    }
</script>

<style >
</style>
