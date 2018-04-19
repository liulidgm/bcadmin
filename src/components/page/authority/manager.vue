<template>
    <div>
        <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
            <el-col :span="3" :offset="20">
                <div class="grid-content bg-purple">
                    <el-button type="primary"  style="width: 140px;" @click="dialogFormVisible = true">新增+</el-button>
                </div>
            </el-col>
        </el-row>

        <table class="tables">
            <tr>
                <td>角色</td>
                <td>
                    <el-form ref="form" :model="form" style="text-align: left;margin: 20px;">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form>
                </td>
            </tr>
            <tr>
                <td>权限</td>
                <td>
                    <el-tree
                        :props="props"
                        :load="loadNode"
                        lazy
                        show-checkbox
                        @check-change="handleCheckChange"
                        style="width: 300px;border: none;"
                    >
                    </el-tree>

                </td>
            </tr>
            <tr>
                <td></td>
                <td style="text-align: left;">
                    <el-button type="primary" style="margin: 20px;width: 120px;">确认</el-button>
                    <el-button type="default" style="margin: 20px;width: 120px;">删除</el-button>
                </td>
            </tr>
        </table>

        <el-dialog title="新增角色" :visible.sync="dialogFormVisible" style="width: 900px;margin: 0 auto;">
            <el-form :model="form">
                <el-form-item label="角色名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>


    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                dialogFormVisible:false,
                form: {
                    region: '',
                },
                props: {
                    label: 'name',
                    children: 'zones'
                },
                count: 1,
                formLabelWidth: '80px'
            };
        },
        mounted() {
        },
        methods: {
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
            handleNodeClick(data) {
                console.log(data);
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region1' }, { name: 'region2' }]);
                }
                if (node.level > 3) return resolve([]);

                var hasChild;
                if (node.data.name === 'region1') {
                    hasChild = true;
                } else if (node.data.name === 'region2') {
                    hasChild = false;
                } else {
                    hasChild = Math.random() > 0.5;
                }

                setTimeout(() => {
                    var data;
                    if (hasChild) {
                        data = [{
                            name: 'zone' + this.count++
                        }, {
                            name: 'zone' + this.count++
                        }];
                    } else {
                        data = [];
                    }

                    resolve(data);
                }, 500);
            }

        },
        components: {}
    }
</script>

<style scoped>
    .tables{
        border-left:1px solid #D6E7FF;
        border-top:1px solid #D6E7FF;
    }
    .tables tr td{
        border-right:1px solid #D6E7FF;
        border-bottom:1px solid #D6E7FF;
        text-align: center;
        line-height: 40px;
        height:40px;
        font-size: 14px;
    }
    .tables tr td:nth-child(2n+1){
        width:119px;
        background: #F5FAFE;
        color: #707EAE;
    }
    .tables tr td:nth-child(2n){
        width:800px;
        color: #404B75;
    }
</style>
