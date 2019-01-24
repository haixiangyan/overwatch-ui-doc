import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

import OwUI from 'overwatch-ui'
import 'overwatch-ui/dist/overwatch-ui.css'

Vue.use(OwUI.plugins.$owAlert)

new Vue({
    components: {
        ...OwUI.Components
    },
    router,
    render: h => h(App)
}).$mount('#app')
