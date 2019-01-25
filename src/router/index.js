import Vue from 'vue'
import Router from 'vue-router'
import DocIntro from '../views/DocIntro'
import DocStart from '../views/DocStart'
import DocTrain from '../views/DocTrain'
import DocComponents from '../views/DocComponents'

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
            path: '/components',
            name: 'components',
            component: DocComponents
        }
    ]
})
export default router
