export default {
    basicHtml: `
<div>
    <ow-radio v-model="value" radioKey="dps" :options="options">DPS</ow-radio>
</div>
<div>
    <ow-radio v-model="value" radioKey="tank" :options="options">TANK</ow-radio>
</div>
<div>
    <ow-radio v-model="value" radioKey="healer" :options="options">HEALER</ow-radio>
</div>`,
    basicJs: `
data() {
    return {
        value: 'dps',
        options: [
            { value: 'dps' },
            { value: 'tank' },
            { value: 'healer' }
        ]
    }
}`
}
