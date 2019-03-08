export default {
basicHtml: `
<ow-select v-model="value" :options="options"></ow-select>`,
basicJs: `
data() {
    return {
        value: 'genji',
        options: [
            {
                value: 'genji',
                label: 'Genji',
            }, {
                value: 'hanzo',
                label: 'Hanzo',
            }, {
                value: 'mccree',
                label: 'McCree',
            }, {
                value: 'tracer',
                label: 'Tracer',
            }, {
                value: 'zarya',
                label: 'Zarya',
            }
        ]
    }
}`,
imageHtml: `
<ow-select v-model="value" :options="options"></ow-select>`,
imageJs: `
data() {
    return {
        value: 'tracer',
        options: [
            {
                value: 'genji',
                label: 'Genji',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png',
            }, {
                value: 'hanzo',
                label: 'Hanzo',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png',
            }, {
                value: 'mccree',
                label: 'McCree',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png',
            }, {
                value: 'tracer',
                label: 'Tracer',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png',
            }, {
                value: 'zarya',
                label: 'Zarya',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
            }
        ]
    }
}`,
disabledHtml: `
<ow-select v-model="value" :options="options"></ow-select>`,
disabledJs: `
data() {
    return {
        value: 'mccree',
        options: [
            {
                value: 'genji',
                label: 'Genji',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png',
            }, {
                value: 'hanzo',
                label: 'Hanzo',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png',
                disabled: true
            }, {
                value: 'mccree',
                label: 'McCree',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png',
            }, {
                value: 'tracer',
                label: 'Tracer',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png',
                disabled: true
            }, {
                value: 'zarya',
                label: 'Zarya',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
            }
        ]
    }
}`,
    maxHeightHtml: `
<ow-select :max-height="100" v-model="value" :options="options"></ow-select>`,
    maxHeightJs: `
data() {
    return {
        value: 'mccree',
        options: [
            {
                value: 'genji',
                label: 'Genji',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png',
            }, {
                value: 'hanzo',
                label: 'Hanzo',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png',
                disabled: true
            }, {
                value: 'mccree',
                label: 'McCree',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png',
            }, {
                value: 'tracer',
                label: 'Tracer',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png',
                disabled: true
            }, {
                value: 'zarya',
                label: 'Zarya',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
            },
            {
                value: 'genji',
                label: 'Genji',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png',
            }, {
                value: 'hanzo',
                label: 'Hanzo',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png',
                disabled: true
            }, {
                value: 'mccree',
                label: 'McCree',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png',
            }, {
                value: 'tracer',
                label: 'Tracer',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png',
                disabled: true
            }, {
                value: 'zarya',
                label: 'Zarya',
                img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
            }
        ]
    }
}`
}