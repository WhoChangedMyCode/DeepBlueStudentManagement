import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login.vue";
import Newstemplate from "../views/newstemplate.vue";
import store from "../store/index.js";
const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/newstemplate",
        name: "newstemplate",
        component: Newstemplate,
    },
    {
        path: "/home",
        name: "home",
        component: import("@/views/home.vue"), //路由懒加载
        redirect: "/index", //重定向
        children: [],
    },
    {
        path: "/:catchAll(.*)",
        component: import("@/views/err"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

//全局前置守卫
let isfirst = true; //用来判断第一次访问网站还是按了刷新
router.beforeEach((to, from, next) => {
    //to:即将要进入的目标
    //from: 当前导航正要离开的路由
    //next:进入该路由
    if (store.state.routerList) {
        store.state.routerList.forEach((item) => {
            if (item.children) {
                item.children.forEach((site) => {
                    router.addRoute("home", {
                        path: site.path,
                        name: site.name,
                        component: import("@/views/" + site.name),
                    });
                });
            } else {
                router.addRoute("home", {
                    path: item.path,
                    name: item.name,
                    component: import("@/views/" + item.name),
                });
            }
        });
    }

    if (isfirst) {
        router.addRoute("home", {
            path: "/index",
            name: "index",
            component: import("@/views/index"),
        });
        isfirst = false;

        var xx = store.state.defaultActive;
        console.log(xx);
        if (xx) {
            next({
                path: xx.path,
            });
        } else {
            next();
        }
    } else {
        next();
    }
});
router.afterEach((to, from) => {
    console.log(router);
});
export default router;
