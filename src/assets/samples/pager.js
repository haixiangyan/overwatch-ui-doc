export default {
   basicHtml: `
<ow-pager :total="20" :current="5"></ow-pager>`,
    syncHtml: `
<ow-pager :total="20" :current.sync="current"></ow-pager>`,
    syncJs: `
data() {
    return {
        current: 5,
    }
}`,
    listenerHtml: `
<ow-pager :total="20" :current.sync="current" @update:current="onUpdateCurrent"></ow-pager>
    `,
    listenerJs: `
data() {
    return {
        current: 5,
    }
},
methods: {
    onUpdateCurrent(newCurrent) {
        alert(newCurrent)
    }
}`
}