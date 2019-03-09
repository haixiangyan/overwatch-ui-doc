import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import DocPost from './components/DocPost/DocPost'

Vue.config.productionTip = false

import OwUI from 'overwatch-ui'
import 'overwatch-ui/dist/overwatch-ui.css'

Vue.use(OwUI.plugins.$owAlert)
Vue.use(OwUI.plugins.$OwValidator)

Vue.component('DocPost', DocPost)

new Vue({
    components: {
        ...OwUI.Components
    },
    router,
    render: h => h(App)
}).$mount('#app')
