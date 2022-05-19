import { createRouter,createWebHashHistory } from 'vue-router';
import Index from './components/Index'
import Words from '@view/Words'
import Diary from '@view/Diary'
import Admin from '@view/admin/Admin'
import WordsList from '@view/admin/WordsList'
import DiaryList from '@view/admin/DiaryList'
import Login from '@view/admin/Login'

const routes = [
    {
        path: '/',
        component: Index,
        redirect: "words",
        children:[
            {
                path: 'words',
                component: Words,
                meta: {
                  title: '舔狗の语'
                }
            },
            {
                path: 'diary',
                component: Diary,
                meta: {
                  title: '舔狗日记'
                }
            }
        ]
    },
    {
        path: '/admin',
        component: Admin,
        redirect: "/admin/words",
        meta: {
          title: '后台管理'
        },
        children:[
            {
                path: 'words',
                component: WordsList,
                meta: {
                  title: '舔狗の语 - 后台管理'
                }
            },
            {
                path: 'diary',
                component: DiaryList,
                meta: {
                  title: '舔狗日记 - 后台管理'
                }
            }
        ]
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