export default {
basic: `
<ow-badge title="99+">
    <span>LOOTBOX</span>
</ow-badge>
<ow-badge title="NEW">
    <span>HIGHLIGHTS</span>
</ow-badge>`,
dot: `
<ow-badge :is-dot="true">
    <span>LOOTBOX</span>
</ow-badge>
<ow-badge :is-dot="true">
    <span>HIGHLIGHTS</span>
</ow-badge>`,
block: `
<div>
    <span>MESSAGE</span>
    <ow-badge title="NEW"></ow-badge>
</div>`
}