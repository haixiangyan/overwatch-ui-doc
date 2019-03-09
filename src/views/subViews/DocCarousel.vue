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
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/ana/icon-portrait.png" alt="portrait">
                            </div>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/icon-portrait.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/baptiste/icon-portrait.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/icon-portrait.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/brigitte/icon-portrait.png" alt="portrait">
                            </span>
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="2">
                        <div class="box">
                            <div class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/dva/icon-portrait.png" alt="portrait">
                            </div>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/doomfist/icon-portrait.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/icon-portrait.png" alt="portrait">
                            </span>
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="3">
                        <div class="box">
                            <div class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/icon-portrait.png" alt="portrait">
                            </div>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/mei/icon-portrait.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/icon-portrait.png" alt="portrait">
                            </span>
                            <span class="item">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/moira/icon-portrait.png" alt="portrait">
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
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/media/thumbnail/genji-screenshot-002.jpg" alt="portrait">
                            </div>
                            <div class="game">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/media/thumbnail/genji-screenshot-003.jpg" alt="portrait">
                            </div>
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="2">
                        <div class="box">
                            <div class="game">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/media/thumbnail/petra-screenshot-001.jpg" alt="portrait">
                            </div>
                            <div class="game">
                                <img src="https://d1u1mce87gyfbn.cloudfront.net/media/thumbnail/petra-screenshot-002.jpg" alt="portrait">
                            </div>
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="3">
                        <div class="box">
                            <div class="game">
                                <img src="https://bnetcmsus-a.akamaihd.net/cms/page_media/7KF93I7WI5571516141975739.jpg" alt="portrait">
                            </div>
                            <div class="game">
                                <img src="https://bnetcmsus-a.akamaihd.net/cms/page_media/DWOKFGYB1SG61516141975756.jpg" alt="portrait">
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
                        <div class="large-box">
                            <img src="https://d1u1mce87gyfbn.cloudfront.net/media/thumbnail/mccree-animated-short.jpg" alt="portrait">
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="2">
                        <div class="large-box">
                            <img src="https://d1u1mce87gyfbn.cloudfront.net/media/thumbnail/roadhog-gameplay.jpg" alt="portrait">
                        </div>
                    </ow-carousel-item>
                    <ow-carousel-item name="3">
                        <div class="large-box">
                            <img src="https://d1u1mce87gyfbn.cloudfront.net/media/thumbnail/reaper-gameplay.jpg" alt="portrait">
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
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
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
    export default {
        name: "DocCarousel",
        data() {
            return {
                selected1: '1',
                selected2: '1',
                selected3: '1',
                sample
            }
        }
    }
</script>

<style scoped lang="scss">
.samples {
    margin: 0 auto;
    width: 100%;
    .large-box {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        height: 400px;
    }
    .box {
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        .item {
            margin: 0 8px;
            img {
                border-radius: 4px;
                background: #454343;
                transition: all .3s;
                &:hover {
                    background: #FF9C00;
                }
            }
        }
        .game {
            img {
                width: 450px;
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
