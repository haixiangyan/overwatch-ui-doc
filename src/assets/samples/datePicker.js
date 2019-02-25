export default {
basicHtml: `
<ow-date-picker v-model="date"></ow-date-picker>`,
basicJs: `
data() {
    return {
        date: new date(),
    }
}`,
rangeHtml: `
<ow-date-picker v-model="date" :range="range"></ow-date-picker>
    `,
rangeJs: `
data() {
    return {
        date: new Date(),
        range: [new Date(1996, 7, 20), new Date(2020, 7, 1)]
    }
}`
}