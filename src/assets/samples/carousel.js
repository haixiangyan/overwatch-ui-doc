export default {
basicHtml: `
<ow-carousel :selected.sync="selected">
    <ow-carousel-item name="1">
        <div class="box">1</div>
    </ow-carousel-item>
    <ow-carousel-item name="2">
        <div class="box">2</div>
    </ow-carousel-item>
    <ow-carousel-item name="3">
        <div class="box">3</div>
    </ow-carousel-item>
</ow-carousel>`,
basicJs: `
data() {
    return {
        selected: '1'
    }
}`,
autoPlayDelayHtml:`
<ow-carousel :auto-play-delay="5000" :selected.sync="selected">
    <ow-carousel-item name="1">
        <div class="box">1</div>
    </ow-carousel-item>
    <ow-carousel-item name="2">
        <div class="box">2</div>
    </ow-carousel-item>
    <ow-carousel-item name="3">
        <div class="box">3</div>
    </ow-carousel-item>
</ow-carousel>`,
autoPlayHtml: `
<ow-carousel :is-auto-play="false" :selected.sync="selected">
    <ow-carousel-item name="1">
        <div class="box">1</div>
    </ow-carousel-item>
    <ow-carousel-item name="2">
        <div class="box">2</div>
    </ow-carousel-item>
    <ow-carousel-item name="3">
        <div class="box">3</div>
    </ow-carousel-item>
</ow-carousel>`
}