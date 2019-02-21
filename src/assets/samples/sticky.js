export default {
    basicHtml: `
<ow-sticky>
    <div class="item">
        <h1> Sticky Content </h1>
        <img src="../../assets/images/banner/banner-1.jpg">
    </div>
</ow-sticky>`,
    offsetTopHtml: `
<ow-sticky :offset-top="400">
    <div class="item">
        <h1> Sticky Content </h1>
        <img src="../../assets/images/banner/banner-2.jpg">
    </div>
</ow-sticky>`
}