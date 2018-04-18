<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="全部用户">
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
                        <el-col :span="7" >
                            <div class="grid-content bg-purple">
                                <el-form-item label="风险等级">
                                    <el-select v-model="form.region" placeholder="请选择活动区域">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
                        <el-col :span="7">
                            <div class="grid-content bg-purple">
                                <el-form-item label="用户状态">
                                    <el-select v-model="form.region" placeholder="请选择活动区域" style="width: 100%;">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="5" :offset="1" style="margin-right: 20px;">
                            <div class="grid-content bg-purple">
                                <el-button type="primary" @click="onSubmit" style="width: 100%;">搜索</el-button>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content bg-purple">
                                <el-button  @click="onSubmit" style="width: 100%;">清除条件</el-button>
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
                        label="注册时间"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="province"
                        label="姓名"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="city"
                        label="手机"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="风险等级"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="zip"
                        label="累计认购金额（元）"
                        width="192">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="认购项目"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="关联项目"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="用户状态"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        label="操作"
                        width="120">
                        <templete>
                            查看
                        </templete>
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
