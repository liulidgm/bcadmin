<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="全部订单">
                <el-form ref="form" :model="form" label-width="80px" style="width:1220px;margin: 30px auto 50px;">
                    <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
                        <el-col :span="7">
                            <div class="grid-content bg-purple">
                                <el-form-item label="手机号">
                                    <el-input placeholder="5"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="7">
                            <div class="grid-content bg-purple">
                                <el-form-item label="姓名">
                                    <el-input placeholder="5"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="7">
                            <div class="grid-content bg-purple">
                                <el-form-item label="产品编号">
                                    <el-input placeholder="5"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
                        <el-col :span="13">
                            <div class="grid-content bg-purple">
                                <el-form-item label="日期时间">
                                    <el-col :span="11" style="padding-left: 0">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11" style="padding-left: 0">
                                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                                    </el-col>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="7" style="margin-right: 20px;">
                            <div class="grid-content bg-purple">
                                <el-form-item label="订单编号">
                                    <el-input placeholder="5"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
                        <el-col :span="10">
                            <div class="grid-content bg-purple">
                                <el-form-item label="选择器">
                                    <el-select v-model="form.region" placeholder="请选择">
                                        <el-option key="bbk" label="步步高" value="bbk"></el-option>
                                        <el-option key="xtc" label="小天才" value="xtc"></el-option>
                                        <el-option key="imoo" label="imoo" value="imoo"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="10" style="margin-right: 20px;">
                            <div class="grid-content bg-purple">
                                <el-form-item label="选择器">
                                    <el-select v-model="form.region" placeholder="请选择">
                                        <el-option key="bbk" label="步步高" value="bbk"></el-option>
                                        <el-option key="xtc" label="小天才" value="xtc"></el-option>
                                        <el-option key="imoo" label="imoo" value="imoo"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
                        <el-col :span="5" :offet="2">
                            <div class="grid-content bg-purple">
                                <el-button type="primary" @click="onSubmit" style="width: 100%;">提交</el-button>
                            </div>
                        </el-col>
                        <el-col :span="3" style="margin-right: 20px;">
                            <div class="grid-content bg-purple">
                                <el-button @click="onSubmit" style="width: 100%;">提交</el-button>
                            </div>
                        </el-col>
                        <el-col :span="5" :offet="10" style="margin-right: 20px;">
                            <div class="grid-content bg-purple">
                                <el-button type="primary" @click="onSubmit" style="width: 100%;">新增订单</el-button>
                            </div>
                        </el-col>
                    </el-row>


                </el-form>
                <el-table
                    :data="tableData"
                    style="width:1220px;margin: 0 auto;"
                    height="630">
                    <el-table-column
                        prop="number"
                        label="序号"
                        width="66">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="创建时间"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="province"
                        label="订单编号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="city"
                        label="姓名"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="手机号码"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="zip"
                        label="项目名称"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="产品编号"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="认购金额（元）"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="项目状态"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="订单状态"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="操作"
                        width="120">
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

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                form: {
                    region: '',

                },
                tableData: [{
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
        methods: {},
        components: {}
    }
</script>

<style >
</style>
