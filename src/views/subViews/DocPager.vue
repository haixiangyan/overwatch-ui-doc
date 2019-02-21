<template>
    <div class="doc-pager">
        <doc-post>
            <h1>Pager</h1>
            <p>To improve user experience on table navigation, you can use Pager.</p>

            <h2>Basic</h2>
            <p>Use <code>total</code> and <code>current</code> to initialize it.</p>
            <div class="sample">
                <ow-pager :total="20" :current="5"></ow-pager>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>

            <h2>Listener</h2>
            <p>You can use <code>.sync</code> to synchronize <code>current</code>.</p>
            <div class="sample">
                <ow-pager :total="20" :current.sync="current1"></ow-pager>
            </div>
            <pre>
                <code class="html">{{sample.syncHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.syncJs}}</code>
            </pre>
            <p>Or add a <code>update:current</code> listener.</p>
            <div class="sample">
                <ow-pager :total="20" :current.sync="current2" @update:current="onUpdateCurrent"></ow-pager>
            </div>
            <pre>
                <code class="html">{{sample.listenerHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.listenerJs}}</code>
            </pre>

            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>total</td><td>Total number of pages</td><td>Number</td><td>-</td>
                </tr>
                <tr>
                    <td>current</td><td>Current page</td><td>Number</td><td>-</td>
                </tr>
                <tr>
                    <td>hide-on-single-page</td><td>Hide if there's only one page</td><td>Boolean</td><td>true</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/pager'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocPager",
        data() {
            return {
                sample,
                current1: 5,
                current2: 5
            }
        },
        components: {
            DocPost
        },
        methods: {
            onUpdateCurrent(newCurrent) {
                alert(newCurrent)
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-pager {
    .sample {
        margin-bottom: 20px;
    }
}
</style>