<template>
    <div>
        <el-tabs type="border-card" v-model="activeName2">
            <el-tab-pane label="广告" name="first">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="首页广告" name="first"><MainBanner></MainBanner></el-tab-pane>
                    <el-tab-pane label="APP启动页广告" name="second"><AppBanner></AppBanner></el-tab-pane>
                </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="新闻中心" name="second">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="平台公告" name="first"><Plat></Plat></el-tab-pane>
                    <el-tab-pane label="公司动态" name="second"><Company></Company></el-tab-pane>
                    <el-tab-pane label="媒体报道" name="third"><Media></Media></el-tab-pane>
                </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="意见反馈" name="third"><Suggest></Suggest></el-tab-pane>
            <el-tab-pane label="APP" name="four"><Appvsion></Appvsion></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script type="text/ecmascript-6">
    import MainBanner from './mainBanner.vue'
    import AppBanner from './appBanner.vue'
    import Plat from './plat.vue'
    import Company from './company.vue'
    import Media from './media.vue'
    import Suggest from './suggest.vue'
    import Appvsion from './appVersion.vue'

  export default {
    data() {
      return {
          activeName: 'first',
          activeName2: 'first',
          activeName3: 'first'
      };
    },
    mounted() {
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    components: {
        MainBanner,AppBanner,Plat,Company,Media,Suggest,Appvsion
    }
  }
</script>

<style>
</style>
