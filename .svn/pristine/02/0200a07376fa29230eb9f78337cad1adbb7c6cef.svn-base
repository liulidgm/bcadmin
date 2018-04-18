<template>
    <div>
        <el-tabs type="border-card" v-model="activeName">
            <el-tab-pane label="管理员"><Administrators></Administrators></el-tab-pane>
            <el-tab-pane label="角色管理" name="second"><Manager></Manager></el-tab-pane>
            <el-tab-pane label="管理日志" name="third"><AdminLog></AdminLog></el-tab-pane>
        </el-tabs>

    </div>
</template>

<script type="text/ecmascript-6">
    import Administrators from './administrators.vue'
    import AdminLog from './adminLog.vue'
    import Manager from './manager.vue'


    export default {
        data() {
            return {
                activeName:'second'
            }
        },
        mounted() {
        },
        methods: {},
        components: {
            Administrators,AdminLog,Manager
        }
    }
</script>

<style >
</style>
