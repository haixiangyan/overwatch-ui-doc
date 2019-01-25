export default {
basicHtml: `
<ow-tabs :selected="selectedTab">
    <ow-tabs-head>
        <ow-tabs-item name="data">Data</ow-tabs-item>
        <ow-tabs-item name="career">Career</ow-tabs-item>
        <ow-tabs-item name="avatar">Avatar</ow-tabs-item>
    </ow-tabs-head>

    <ow-tabs-body>
        <ow-tabs-pane class="pane" name="data">Data</ow-tabs-pane>
        <ow-tabs-pane class="pane" name="career">Career</ow-tabs-pane>
        <ow-tabs-pane class="pane" name="avatar">Avatar</ow-tabs-pane>
    </ow-tabs-body>
</ow-tabs>`,
basicJs: `
data() {
    return {
        selectedTab: 'data'
    }
}`,
actionHtml: `
<ow-tabs :selected="selectedTab">
    <ow-tabs-head>
        <ow-tabs-item name="data">Data</ow-tabs-item>
        <ow-tabs-item name="career">Career</ow-tabs-item>
        <ow-tabs-item name="avatar">Avatar</ow-tabs-item>
        <template slot="actions">
            <ow-button>Setting</ow-button>
        </template>
    </ow-tabs-head>

    <ow-tabs-body>
        <ow-tabs-pane class="pane" name="data">Data</ow-tabs-pane>
        <ow-tabs-pane class="pane" name="career">Career</ow-tabs-pane>
        <ow-tabs-pane class="pane" name="avatar">Avatar</ow-tabs-pane>
    </ow-tabs-body>
</ow-tabs>`,
}