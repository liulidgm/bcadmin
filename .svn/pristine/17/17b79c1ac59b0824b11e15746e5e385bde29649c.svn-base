<template>
    <div>
        <el-row :gutter="20" style="width: 1220px; margin: 20px auto;">
            <el-col :span="3" :offset="20">
                <div class="grid-content bg-purple">
                    <el-button type="primary"  style="width: 140px;">新增+</el-button>
                </div>
            </el-col>
        </el-row>
        <el-tree
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange">
        </el-tree>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                form: {
                    region: '',
                },
                props: {
                    label: 'name',
                    children: 'zones'
                },
                count: 1

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

<style >
</style>
