import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReviewView from '../views/ReviewView.vue'
import MypageView from '../views/MypageView.vue'
import AnalysisDetail from '../components/review/AnalysisDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/review',
    name: 'review',
    component: ReviewView
  },
  {
    path: '/review/:id',
    name: 'detail',
    component: AnalysisDetail
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MypageView
  },
  
]

const router = new VueRouter({
  routes
})

export default router
