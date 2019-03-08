export default {
basicHtml: `
<ow-slider v-model="value"></ow-slider>`,
basicJs: `
data() {
    return {
        value: 20
    }
}`,
    rangeHtml: `
<ow-slider :min="20" :max="50" v-model="value"></ow-slider>`,
    widthHtml: `
<ow-slider :width="400" v-model="value2"></ow-slider>`,
}