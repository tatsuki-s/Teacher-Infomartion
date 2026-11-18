import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 教員一覧ページ
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // 教員プロフィールページ
      path: '/teacher-top',
      name: 'teacher-top',
      component: () => import('../views/TeacherTop.vue')
    },
    {
      // 経歴紹介ページ
      path: '/career',
      name: 'career',
      component: () => import('../views/CareerView.vue')
    },
    {
      // 出版物・論文紹介ページ
      path: '/publications',
      name: 'publications',
      component: () => import('../views/PublicationsView.vue')
    },
    {
      // 研究紹介ページ
      // 趣味・特技紹介ページ
      // 部活動紹介ページ
      path: '/article',
      name: 'article',
      component: () => import('../views/ArticleView.vue')
    },
    {
      // 他の誰かからのコメントページ
      path: '/comments',
      name: 'comments',
      component: () => import('../views/CommentsView.vue')
    },
  ],
})

export default router
