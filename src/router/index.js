import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import GraphicsView from '@/views/GraphicsView.vue'
import CaseStudyRabbitry from '@/views/CaseStudyRabbitry.vue'
import CaseStudyBudgeting from '@/views/CaseStudyBudgeting.vue';
import CaseStudyRealEstate from '@/views/CaseStudyRealEstate.vue';
import CaseStudyVacation from '@/views/CaseStudyVacation.vue';
import CaseStudyMedical from '@/views/CaseStudyMedical.vue';
import CaseStudyCards from '@/components/CaseStudyCards.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: HomeView
            },
            {
                path: 'about',
                name: 'About',
                component: AboutView
            },
            {
                path: 'graphics',
                name: 'Graphics',
                component: GraphicsView
            },
            {
                path: '/case-study/rabbitry',
                name: 'CaseStudyRabbitry',
                component: CaseStudyRabbitry,
            },
            {
                path: '/case-study/budgeting',
                name: 'CaseStudyBudgeting',
                component: CaseStudyBudgeting,
            },
            {
                path: '/case-study/vacation',
                name: 'CaseStudyVacation',
                component: CaseStudyVacation,
            },
            {
                path: '/case-study/real-estate',
                name: 'CaseStudyRealEstate',
                component: CaseStudyRealEstate,
            },
            {
                path: '/case-study/medical',
                name: 'CaseStudyMedical',
                component: CaseStudyMedical,
            },
            {
                path: '/case-studies',
                name: 'CaseStudies',
                component: CaseStudyCards
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    // ScrollBehavior function
    scrollBehavior(to, from, savedPosition) {
        // If a saved position is available (e.g., from browser back/forward buttons), use it
        if (savedPosition) {
            return savedPosition;
        } else {
            // Otherwise, scroll to the top of the page
            return { top: 0, left: 0, behavior: 'smooth' }; // 'smooth' for a smooth scroll animation
        }
    }
})

export default router
