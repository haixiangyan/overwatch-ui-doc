import Vue from 'vue'
import Router from 'vue-router'
// Main menu
import DocIntro from '../views/DocIntro'
import DocStart from '../views/DocStart'
import DocTrain from '../views/DocTrain'
// Sub menu
import DocButton from '../views/subViews/DocButton'
import DocLayout from '../views/subViews/DocLayout'
import DocGrid from '../views/subViews/DocGrid'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'intro',
            component: DocIntro
        },
        {
            path: '/start',
            name: 'start',
            component: DocStart
        },
        {
            path: '/train',
            name: 'train',
            component: DocTrain
        },
        {
            path: '/components/button',
            name: 'components',
            component: DocButton
        },
        {
            path: '/components/layout',
            name: 'layout',
            component: DocLayout
        },
        {
            path: '/components/grid',
            name: 'grid',
            component: DocGrid
        },
    ]
})
export default router
