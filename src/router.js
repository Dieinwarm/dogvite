import { createRouter,createWebHashHistory } from 'vue-router';
import Index from './components/Index.vue'
import Words from './components/view/Words.vue'
import Diary from './components/view/Diary.vue'
import Admin from './components/view/admin/Admin.vue'
import Login from './components/view/admin/Login.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
        redirect: "/words",
        children:[
            {
                path: '/words',
                name: 'words',
                component: Words,
                meta: {
                  title: '舔狗の语'
                }
            },
            {
                path: '/diary',
                name: 'diary',
                component: Diary,
                meta: {
                  title: '舔狗日记'
                }
            }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        meta: {
          title: '内容管理'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          title: '登录'
        }
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});

/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title + " - " + import.meta.env.VITE_NAME;
    }
    next();
});