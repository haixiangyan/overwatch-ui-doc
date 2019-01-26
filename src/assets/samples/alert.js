export default {
importing: `
import OwUI from 'overwatch-ui'

Vue.use(OwUI.plugins.$owAlert)`,
useHtml: `
<ow-button type="primary" @click="showAlert">Alert it</ow-button>`,
useJs: `
methods: {
    showAlert() {
        this.$owAlert({
            type: 'loading',
            title: 'SEARCHING FOR GAME',
            message: 'ESTIMATE TIME: 0:0:2',
            closeButton: {
                text: 'OK',
                callback(vm) {
                    console.log('Yes')
                }
            }
        })
    }
}`,
typeHtml: `
<ow-button class="button" type="primary" @click="showAlert('info')">Notification</ow-button>
<ow-button class="button" type="success" @click="showAlert('success')">Success</ow-button>
<ow-button class="button" type="warning" @click="showAlert('warning')">Warning</ow-button>
<ow-button class="button" type="danger" @click="showAlert('danger')">Danger</ow-button>
<ow-button class="button" type="primary" @click="showAlert('loading')">Loading</ow-button>`,
typeJs: `
methods: {
    showAlert(type) {
        this.$owAlert({
            type: type,
            title: 'SEARCHING FOR GAME',
            message: 'ESTIMATE TIME: 0:0:2',
            closeButton: {
                text: 'OK',
                callback(vm) {
                    console.log('Yes')
                }
            }
        })
    }
}`
}