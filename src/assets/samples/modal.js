export default {
    basicHtml: `
<ow-button @click="isOpen = true">Show A Modal</ow-button>
<ow-modal :is-open.sync="isOpen">
    <template slot="header">
        ADD A NEW FRIEND
    </template>
    <p style="margin-bottom: 12px">PUT A GAME ID OR EMAIL ADDRESS</p>
    <ow-input placeholder="Game ID or Email Address" :width="300"></ow-input>
    <template slot="footer">
        <ow-button @click="isOpen = false">BACK</ow-button>
        <ow-button type="warning">SEND REQUEST</ow-button>
    </template>
</ow-modal>`,
    basicJs: `
data() {
    return {
        isOpen: false
    }
}`,
    fixedHtml: `
<ow-button @click="isOpen1 = true">Show A Modal</ow-button>
<ow-modal :is-fixed="false" :is-open.sync="isOpen1">
    <template slot="header">
        ADD A NEW FRIEND
    </template>
    <p style="margin-bottom: 12px">PUT A GAME ID OR EMAIL ADDRESS</p>
    <ow-input placeholder="Game ID or Email Address" :width="300"></ow-input>
    <template slot="footer">
        <ow-button @click="isOpen1 = false">BACK</ow-button>
        <ow-button type="warning">SEND REQUEST</ow-button>
    </template>
</ow-modal>`,
    fixedJs: `
data() {
    return {
        isOpen: false
    }
}`
}
