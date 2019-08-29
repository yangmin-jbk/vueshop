import Vue from 'vue'
import Router from 'vue-router'

// 导入vue组件
import Login from './components/Login.vue'
//导入登录组件
import Home from './components/home.vue'
Vue.use(Router)

var router = new Router({
        //路由规则
        routes: [
            // 组件添加路由规则和组件,还要重定向主页
            { path: '/', redirect: '/login' },
            { path: '/login', component: Login },
            //登录的路由规则
            { path: '/home', component: Home }
        ]
    })
    //12创建路由守卫
    // router.beforeEach((to, from, next) => {
    //     // to是跳转的页面
    //     //from从那个页面跳转而来
    //     //next 是一个函数,表示放行
    //     //如果跳转的页面是login,就执行下一个
    //     if (to.path == "/lgoin") {
    //         next();
    //     }
    //     var token = window.sessionStorage.getItem('token');
    //     //判断sessionStorage里面有没有token,没有就返回login地址,有就执行
    //     if (!token) {
    //         return next('/login')
    //     } else {
    //         next();
    //     }
    // });

export default router;