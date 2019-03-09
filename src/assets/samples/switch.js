export default {
    basicHtml: `
<ow-switch v-model="value" :options="options"></ow-switch>`,
    basicJs: `
data() {
    return {
        value: 'medium',
        options: [
            {
                label: 'EPIC',
                value: 'epic'
            },
            {
                label: 'MEDIUM',
                value: 'medium'
            },
            {
                label: 'LOW',
                value: 'low'
            }
        ]
    }
}`,
    widthHtml: `
<ow-switch v-model="value" :options="options" :width="400"></ow-switch>`,
    widthJs: `
data() {
    return {
        value: 'full',
        options: [
            {
                label: 'FULL SCREEN',
                value: 'full'
            },
            {
                label: 'HALF SCREEN',
                value: 'half'
            },
            {
                label: 'SMALL SCREEN',
                value: 'small'
            }
        ]
    }
}`
}
