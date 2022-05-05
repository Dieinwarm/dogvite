import { createRouter,createWebHashHistory } from 'vue-router';
import Index from './components/Index.vue'
import Words from '@view/Words.vue'
import Diary from '@view/Diary.vue'
import AdminIndex from '@view/admin/Index.vue'
import Admin from '@view/admin/Admin.vue'
import Login from '@view/admin/Login.vue'

const routes = [
    {
        path: '/',
        component: Index,
        redirect: "/words",
        children:[
            {
                path: '/words',
                component: Words,
                meta: {
                  title: '舔狗の语'
                }
            },
            {
                path: '/diary',
                component: Diary,
                meta: {
                  title: '舔狗日记'
                }
            }
        ]
    },
    {
        path: '/admin',
        component: AdminIndex,
        meta: {
          title: '后台管理'
        }
    },
    {
        path: '/admin/list',
        component: Admin,
        meta: {
          title: '内容管理'
        }
    },
    {
        path: '/login',
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