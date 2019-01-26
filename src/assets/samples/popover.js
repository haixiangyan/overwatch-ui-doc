export default {
basic: `
<ow-popover position="top">
    <template slot="content">
        <div>Popover Content</div>
    </template>
    <ow-button>Pop It!</ow-button>
</ow-popover>`,
direction: `
<ow-popover class="popover" position="top">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <ow-button>Top</ow-button>
</ow-popover>
<ow-popover class="popover" position="bottom">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <ow-button type="warning">Bottom</ow-button>
</ow-popover>
<ow-popover class="popover" position="left">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <ow-button type="info">Left</ow-button>
</ow-popover>
<ow-popover class="popover" position="right">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <ow-button type="danger">Right</ow-button>
</ow-popover>`,
hover: `
<ow-popover trigger="hover" class="popover" position="top">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <ow-button>Top</ow-button>
</ow-popover>
<ow-popover trigger="hover" class="popover" position="bottom">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <ow-button type="warning">Bottom</ow-button>
</ow-popover>
<ow-popover trigger="hover" class="popover" position="left">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <ow-button type="info">Left</ow-button>
</ow-popover>
<ow-popover trigger="hover" class="popover" position="right">
    <template slot="content">
        <div>Popover Content, Hello World</div>
    </template>
    <ow-button type="danger">Right</ow-button>
</ow-popover>`,
close: `
<ow-popover position="top">
    <template slot="content" slot-scope="{close}">
        <div>Popover Content, Hello World</div>
        <ow-button @click="close">Cancel</ow-button>
    </template>
    <ow-button>Top</ow-button>
</ow-popover>`
}