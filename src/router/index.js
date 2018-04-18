import Vue from 'vue';
import Router from 'vue-router';
import project from 'components/page/projectmg/operate/project'
import unOperateList from 'components/page/projectmg/unoperate/list'
import deliveryList from 'components/page/projectmg/delivery/list'
import operateDetail from 'components/page/projectmg/operateDetail/detail'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['../components/page/login.vue'], resolve)
        },

       {
            path: '/index',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                    {path:'/project',component:project},
                    {path:'/unOperateList',component:unOperateList},
                    {path:'/deliveryList',component:deliveryList},
                    {path:'/operateDetail',component:operateDetail},
                    {
                        path: '/content',
                        component: resolve => require(['../components/page/content/index.vue'], resolve)
                    },
                    {
                        path: '/finance',
                        component: resolve => require(['../components/page/finance/index.vue'], resolve)
                    },
                    {
                        path: '/authority',
                        component: resolve => require(['../components/page/authority/index.vue'], resolve)
                    },
                    {
                        path: '/user',
                        component: resolve => require(['../components/page/user/index.vue'], resolve)
                    },
                    {
                        path: '/order',
                        component: resolve => require(['../components/page/order/index.vue'], resolve)
                    },
                    {
                        path: '/home',
                        component: resolve => require(['../components/page/home/index.vue'], resolve)
                    },
   ////////////////////////////////////////////////

                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/demo/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/demo/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/demo/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/demo/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/demo/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/demo/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/demo/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/demo/DragList.vue'], resolve)    // 拖拽列表组件
                }
            ]
        },

    ]
})
