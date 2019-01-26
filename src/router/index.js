import Vue from 'vue'
import Router from 'vue-router'
// Main menu
import DocIntro from '../views/DocIntro'
import DocStart from '../views/DocStart'
import DocTrain from '../views/DocTrain'
// Sub menu
import DocButton from '../views/subViews/DocButton'
import DocLayout from '../views/subViews/DocLayout'
import DocDesign from '../views/subViews/DocDesign'
import DocGrid from '../views/subViews/DocGrid'
import DocTabs from '../views/subViews/DocTabs'
import DocIcon from '../views/subViews/DocIcon'
import DocInput from '../views/subViews/DocInput'
import DocCollapse from '../views/subViews/DocCollapse'
import DocAlert from '../views/subViews/DocAlert'
import DocPopover from '../views/subViews/DocPopover'
import DocHighlights from '../views/DocHighlights'
import DocSocial from '../views/DocSocial'

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
            path: '/social',
            name: 'social',
            component: DocSocial
        },
        {
            path: '/highlights',
            name: 'highlights',
            component: DocHighlights
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
            path: '/components/design',
            name: 'design',
            component: DocDesign
        },
        {
            path: '/components/grid',
            name: 'grid',
            component: DocGrid
        },
        {
            path: '/components/tabs',
            name: 'tabs',
            component: DocTabs
        },
        {
            path: '/components/icon',
            name: 'icon',
            component: DocIcon
        },
        {
            path: '/components/input',
            name: 'input',
            component: DocInput
        },
        {
            path: '/components/collapse',
            name: 'collapse',
            component: DocCollapse
        },
        {
            path: '/components/alert',
            name: 'alert',
            component: DocAlert
        },
        {
            path: '/components/popover',
            name: 'popover',
            component: DocPopover
        },
    ]
})
export default router
