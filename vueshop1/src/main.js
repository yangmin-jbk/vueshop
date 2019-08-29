import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 导入第三方图标库
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 导入axios这个包 
import axios from 'axios'
//配置根路径,请求路径就不需要配置这个前面的路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
    //把这个包挂载在vue原型对象,这样每个组件都可以访问到$http,从而去发起ajax请求
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')