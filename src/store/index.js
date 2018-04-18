import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);


import operateDetailStore from './operateDetail_store';//引入某个store对象

export default new vuex.Store({
    modules: {
        operateDetail: operateDetailStore
    }
})
