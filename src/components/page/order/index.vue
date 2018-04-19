<template>
    <div>
        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
                v-for="(item, index) in editableTabs2"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
                <itemList @addTabHandle="addTabHandle" v-if="index == 0"></itemList>
                <detail v-else></detail>
            </el-tab-pane>
        </el-tabs>
        <!--<el-tabs type="border-card" editable>-->
            <!--<el-tab-pane label="全部订单">-->
                <!--<itemList @addTabHandle="addTabHandle"></itemList>-->
            <!--</el-tab-pane>-->
            <!--<el-tab-pane label="订单详情">-->
                <!--<itemList></itemList>-->
            <!--</el-tab-pane>-->
        <!--</el-tabs>-->
    </div>
</template>

<script type="text/ecmascript-6">
    import itemList from './list.vue'
    import detail from './detail.vue'

    export default {
        data() {
            return {
                editableTabsValue2: '1',
                editableTabs2: [{
                    title: '全部订单',
                    name: '1',
                    content: 'Tab 1 content'
                }],
                tabIndex: 2
            }
        },
        mounted() {
        },
        methods: {
            addTabHandle() {
                let newTabName = ++this.tabIndex + '';
                this.editableTabs2.push({
                    title: '订单详情',
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.editableTabsValue2 = newTabName;
            },
            removeTab(targetName) {
                let tabs = this.editableTabs2;
                let activeName = this.editableTabsValue2;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                this.editableTabsValue2 = activeName;
                this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
            }

        },
        components: {itemList,detail}
    }
</script>

<style >
    .el-tabs__nav .el-tabs__item:nth-child(1) .el-icon-close{
        display: none;
    }
</style>
