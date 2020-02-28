import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // 全局注册
import defaultSlot from '../views/defaultslot'
import bakSlot from '../views/bakslot'
import nameSlot from '../views/nameSlot'
export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/defaultSlot' // 强制跳转到 默认插槽
    }, {
        path: '/defaultSlot',
        component: defaultSlot
    }, {
        path: '/bakSlot',
        component: bakSlot
    }, {
        path: '/nameSlot',
        component: nameSlot
    }]
})
//  导出实例