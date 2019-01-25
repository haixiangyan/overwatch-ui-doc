export default {
    withType: `
<ow-button type="primary">Primary</ow-button>
<ow-button type="warning">Warning</ow-button>
<ow-button type="info">Info</ow-button>
<ow-button type="danger">Danger</ow-button>`,
    withIcon: `
<ow-button type="primary" icon-name="setting">Setting</ow-button>
<ow-button type="danger" icon-name="remove">Remove</ow-button>`,
    withIconPosition: `
<ow-button icon-name="up" icon-position="left">Up</ow-button>
<ow-button icon-name="down" icon-position="right">Down</ow-button>`,
    withLoading: `
<ow-button
    icon-name="loading"
    :is-loading="true">
    Loading...
</ow-button>`,
    withEvent: `
<ow-button
    @click="isLoading = !isLoading"
    icon-name="loading"
    :is-loading="isLoading">
    Loading...
</ow-button>`,
    withGroup: `
<ow-button-group>
    <ow-button icon-name="add" type="primary" icon-position="left">
        More
    </ow-button>
    <ow-button icon-name="subtract" type="primary" icon-position="right">
        Less
    </ow-button>
</ow-button-group>`
}