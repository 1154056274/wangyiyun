import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/discover'
        },
        {
            path: '/discover',
            component: () => import('../views/discover/Discover.vue'),
            children: [{
                    path: '/discover',
                    redirect: '/discover/recommend'
                },
                {
                    path: 'recommend',
                    component: () => import('../views/discover/Recommend.vue')
                },
                {
                    path: 'songlist',
                    component: () => import('../views/discover/Songlist.vue'),
                    
                    
                },
                {
                    path: 'toplist',
                    component: () => import('../views/discover/Toplist.vue')
                },
                {
                    path: 'singer',
                    component: () => import('../views/discover/Singer.vue')
                },
                {
                    path: 'newsong',
                    component: () => import('../views/discover/Newsong.vue')
                }
            ]
        },
        {
            path: '/video',
            component: () => import('../views/video/Video.vue')
        },
        {
            path: '/friends',
            component: () => import('../views/friends/Friends.vue')
        },
        {
            path: '/perfm',
            component: () => import('../views/perfm/Perfm.vue')
        },
        {
            path:'/detail',
            component:()=>import('../views/discover/singerdetail/Detail.vue'),
            children:[
                {
                    path:'/detail',
                    redirect:'/detail/top'
                },
                {
                    path:'top',
                    component:()=>import('../views/discover/singerdetail/Top.vue')
                },
                {
                    path:'zhuanji',
                    component:()=>import('../views/discover/singerdetail/Zhuanji.vue')
                },
                {
                    path:'mv',
                    component:()=>import('../views/discover/singerdetail/Mv.vue')
                },
                {
                    path:'geshou',
                    component:()=>import('../views/discover/singerdetail/Geshou.vue')
                }
            ]
        }
    ],
    linkActiveClass: 'active'

})

export default router