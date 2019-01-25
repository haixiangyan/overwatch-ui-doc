<template>
    <div class="doc-alert">
        <doc-post>
            <h1>Alert</h1>
            <!--Basic-->
            <h2>Basic</h2>
            <p>Before you use this component, you need to import the plugin function.</p>
            <pre>
                <code class="js">{{sample.importing}}</code>
            </pre>
            <p>Then you can invoke the function anywhere.</p>
            <div class="sample">
                <ow-button type="primary" @click="showAlert('info')">Alert it</ow-button>
            </div>
            <pre>
                <code class="html">{{sample.useHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.useJs}}</code>
            </pre>
            <!--Types-->
            <h2>Types</h2>
            <p>You can specific any alert types as you like.</p>
            <div class="sample">
                <ow-button class="button" type="primary" @click="showAlert('info')">Notification</ow-button>
                <ow-button class="button" type="success" @click="showAlert('success')">Success</ow-button>
                <ow-button class="button" type="warning" @click="showAlert('warning')">Warning</ow-button>
                <ow-button class="button" type="danger" @click="showAlert('danger')">Danger</ow-button>
                <ow-button class="button" type="primary" @click="showAlert('loading')">Loading</ow-button>
            </div>
            <pre>
                <code class="html">{{sample.typeHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.typeJs}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <td>Property</td> <td>Description</td> <td>Type</td> <td>Default</td> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>type</td><td>Type of OwAlert, can be loading, success, info, warning, danger</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>title</td><td>Title of OwAlert</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>message</td><td>message of OwAlert</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>title</td><td>Title of OwAlert</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>closeButton</td><td>Custom close button, containing 2 keys: <code>text</code> and <code>callback</code></td><td>Object</td><td>-</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/alert'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocAlert",
        data() {
            return {
                sample
            }
        },
        components: {
            DocPost
        },
        methods: {
            showAlert(type) {
                this.$owAlert({
                    type: type,
                    title: 'SEARCHING FOR GAME',
                    message: 'ESTIMATE TIME: 0:0:2',
                    closeButton: {
                        text: 'OK',
                        callback(vm) {
                            console.log('Yes')
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.sample {
    margin-bottom: 10px;
    .button {
        margin-right: 8px;
    }
}
</style>