export default {
install: `
$ yarn install overwatch-ui

or

$ npm install overwatch-ui --save`,
importing: `
// Import the library
import OwUI from 'overwatch-ui'
import 'overwatch-ui/dist/overwatch-ui.css'

// Use some plugins
Vue.use(OwUI.plugins.$owAlert)

// Register components that you need in the root component
new Vue({
    components: {
        ...OwUI.Components
    },
    router,
    render: h => h(App)
}).$mount('#app')`,
    basicHtml: `
<ow-button type="info">Info</ow-button>
<ow-button type="primary">Primary</ow-button>
<ow-button type="success">Success</ow-button>
<ow-button type="warning">Warning</ow-button>
<ow-button type="danger">Danger</ow-button>

<ow-popover position="top">
    <template slot="content">
        <div>Hello, Overwatch UI!</div>
    </template>
    <ow-button>Pop It!</ow-button>
</ow-popover>`
}