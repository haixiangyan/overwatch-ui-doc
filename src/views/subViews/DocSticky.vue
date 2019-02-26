<template>
    <div class="doc-sticky">
        <doc-post class="long-page">
            <h1>Sticky</h1>
            <h2>Basic</h2>
            <p>You can place a "GO TO TOP" button in this component.</p>
            <div class="sample">
                <ow-sticky>
                    <div class="item">
                        <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/dva/hero-select-portrait.png">
                    </div>
                </ow-sticky>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>

            <!--OffsetTop-->
            <h2>OffsetTop</h2>
            <p>You may want it to be pinned on some spot, then you can use <code>offsetTop</code> to define the offset.</p>
            <div class="sample">
                <ow-sticky :offset-top="400">
                    <div class="item right">
                        <img src="https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/hero-select-portrait.png">
                    </div>
                </ow-sticky>
            </div>
            <pre>
                <code class="html">{{sample.offsetTopHtml}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>offset-top</td><td>Offset top of visible window</td><td>Number</td><td>0</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/sticky'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocSticky",
        data() {
            return {
                sample
            }
        },
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">
.doc-sticky {
    .markdown-body{
        height: 2000px;
    }
    .sample {
        margin-bottom: 20px;
        .item {
            background: transparent;
            &.right {
                text-align: right;
            }
            img {
                background: transparent;
            }
        }
    }
}
</style>