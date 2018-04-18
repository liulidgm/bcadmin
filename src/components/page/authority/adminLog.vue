<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" style="width:1220px;margin: 30px auto 50px;">
            <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="姓名">
                            <el-input placeholder="5"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5" >
                    <div class="grid-content bg-purple">
                        <el-form-item label="类型">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="10" >
                    <div class="grid-content bg-purple">
                        <el-form-item label="操作时间" label-width="100px">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                            </el-col>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="3" >
                    <el-button type="primary" @click="onSubmit" style="width: 100%;">立即创建</el-button>
                </el-col>
            </el-row>
        </el-form>

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
                label="操作人"
                width="120">
            </el-table-column>
            <el-table-column
                prop="province"
                label="权限"
                width="170">
            </el-table-column>
            <el-table-column
                prop="city"
                label="操作时间"
                width="200">
            </el-table-column>
            <el-table-column
                prop="address"
                label="IP"
                width="192">
            </el-table-column>
            <el-table-column
                prop="zip"
                label="操作类型"
                width="300">
            </el-table-column>
            <el-table-column
                prop="time"
                label="维护内容"
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
