import Vue from 'vue'
import Router from 'vue-router'
import DocIntro from '../views/DocIntro.vue'
import DocStart from '../views/DocStart.vue'

Vue.use(Router)

export default new Router({
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
        }
    ]
})
