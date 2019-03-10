export default {
    selectHtml: `
<ow-label title="HEROES">
    <ow-select :width="250" v-model="value" :options="options"></ow-select>
</ow-label>`,
    selectJs: `
data() {
    return {
        value: 'genji',
        options: [
            { value: 'genji', label: 'Genji', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png', },
            { value: 'hanzo', label: 'Hanzo', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png', },
            { value: 'mccree', label: 'McCree', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png', },
            { value: 'tracer', label: 'Tracer', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png', },
            { value: 'zarya', label: 'Zarya', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png', }
        ]
    }
}`,
    sliderHtml: `
<ow-label v-model="value" :wrappable="true" title="FIELD OF VIEW">
    <ow-slider :width="250" v-model="value"></ow-slider>
</ow-label>`,
    sliderJs: `
data() {
    return {
        value: 30
    }
}`,
    switchHtml: `
<ow-label :wrappable="true" title="DISPLAY MODE">
    <ow-switch :width="300" v-model="value" :options="options"></ow-switch>
</ow-label>`,
    switchJs: `
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
    inputHtml: `
<ow-label :wrappable="true" title="ADD FRIEND">
    <ow-input rect placeholder="Game ID" :width="250"></ow-input>
</ow-label>`
}