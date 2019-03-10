export default {
    basicHtml: `
<div>
    <ow-checkbox v-model="value1">DPS</ow-checkbox>
</div>
<div>
    <ow-checkbox v-model="value2">TANK</ow-checkbox>
</div>
<div>
    <ow-checkbox v-model="value3">HEALER</ow-checkbox>
</div>`,
    basicJs: `
data() {
    return {
        value1: true,
        value2: false,
        value3: true
    }
}`
}
