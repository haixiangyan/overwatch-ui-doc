<template>
    <div class="doc-carousel">
        <doc-post>
            <h1>Carousel</h1>
            <p> You can use Carousel component to display the banners.</p>
            <h2>Basic</h2>
            <div class="samples">
                <ow-carousel :selected.sync="selected1">
                    <ow-carousel-item name="1">
                        <div class="box">
                            <div class="item">
                                <img src="../../assets/images/hero/icon-portrait-0.png" alt="portrait">
                            </div>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-1.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-2.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-3.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-4.png" alt="portrait">
                            </span>
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="2">
                        <div class="box">
                            <div class="item">
                                <img src="../../assets/images/hero/icon-portrait-5.png" alt="portrait">
                            </div>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-6.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-7.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-8.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-9.png" alt="portrait">
                            </span>
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="3">
                        <div class="box">
                            <div class="item">
                                <img src="../../assets/images/hero/icon-portrait-10.png" alt="portrait">
                            </div>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-11.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-12.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-13.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="../../assets/images/hero/icon-portrait-14.png" alt="portrait">
                            </span>
                        </div>
                    </ow-carousel-item>
                </ow-carousel>
            </div>
            <p>Html Codes is like this.</p>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <p>You need to define <code>selected</code> in data field.</p>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <h2>Auto Play Delay</h2>
            <p>You can set the delay for auto play.</p>
            <div class="samples">
                <ow-carousel :auto-play-delay="5000" :selected.sync="selected2">
                    <ow-carousel-item name="1">
                        <div class="box">
                            <div class="game">
                                <img src="../../assets/images/banner/c-1.jpg" alt="portrait">
                            </div>
                            <div class="game">
                                <img src="../../assets/images/banner/c-2.jpg" alt="portrait">
                            </div>
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="2">
                        <div class="box">
                            <div class="game">
                                <img src="../../assets/images/banner/c-3.jpg" alt="portrait">
                            </div>
                            <div class="game">
                                <img src="../../assets/images/banner/c-4.jpg" alt="portrait">
                            </div>
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="3">
                        <div class="box">
                            <div class="game">
                                <img src="../../assets/images/banner/c-5.jpg" alt="portrait">
                            </div>
                            <div class="game">
                                <img src="../../assets/images/banner/c-6.jpg" alt="portrait">
                            </div>
                        </div>
                    </ow-carousel-item>
                </ow-carousel>
            </div>
            <pre>
                <code class="html">{{sample.autoPlayDelayHtml}}</code>
            </pre>

            <h2>Disable Auto play</h2>
            <p>You can also disable auto play.</p>
            <div class="samples">
                <ow-carousel :is-auto-play="false" :selected.sync="selected3">
                    <ow-carousel-item name="1">
                        <div class="box">
                            <img src="../../assets/images/banner/banner-1.jpg" alt="portrait">
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="2">
                        <div class="box">
                            <img src="../../assets/images/banner/banner-2.jpg" alt="portrait">
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="3">
                        <div class="box">
                            <img src="../../assets/images/banner/banner-3.jpg" alt="portrait">
                        </div>
                    </ow-carousel-item>
                </ow-carousel>
            </div>
            <pre>
                <code class="html">{{sample.autoPlayHtml}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <td>Property</td> <td>Description</td> <td>Type</td> <td>Default</td> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>selected</td><td>Selected item of Carousel</td><td>String, Number</td><td>The first item</td>
                </tr>
                <tr>
                    <td>is-auto-play</td><td>Set if slide automatically</td><td>Boolean</td><td>true</td>
                </tr>
                <tr>
                    <td>auto-play-delay</td><td>Interval of sliding one item</td><td>Number</td><td>3000</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/carousel'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocCarousel",
        data() {
            return {
                selected1: '1',
                selected2: '1',
                selected3: '1',
                sample
            }
        },
        components: {
            DocPost
        },
    }
</script>

<style scoped lang="scss">
.samples {
    margin: 0 auto;
    width: 100%;
    .box {
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        .item {
            margin: 0 8px;
            img {
                border-radius: 50%;
                background: #454343;
                transition: all .3s;
                &:hover {
                    background: #FF9C00;
                }
            }
        }
        .game {
            img {
                width: 300px;
                margin: 0 8px;
                transition: transform .3s;
                &:hover {
                    transform: scale(1.2);
                }
            }
        }
    }
}
</style>