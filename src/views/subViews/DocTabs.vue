<template>
    <div class="doc-tabs">
        <doc-post>
            <h1>Tabs</h1>
            <!--Basic-->
            <h2>Basic</h2>
            <p>You can define a tab navigator with OwTabs.</p>
            <div class="sample">
                <ow-tabs :selected="selectedTab1">
                    <ow-tabs-head>
                        <ow-tabs-item name="data">Data</ow-tabs-item>
                        <ow-tabs-item name="career">Career</ow-tabs-item>
                        <ow-tabs-item name="avatar">Avatar</ow-tabs-item>
                    </ow-tabs-head>

                    <ow-tabs-body>
                        <ow-tabs-pane class="pane" name="data">Data</ow-tabs-pane>
                        <ow-tabs-pane class="pane" name="career">Career</ow-tabs-pane>
                        <ow-tabs-pane class="pane" name="avatar">Avatar</ow-tabs-pane>
                    </ow-tabs-body>
                </ow-tabs>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <!--Action-->
            <h2>Action</h2>
            <p>You can place any elements in the right hand side with <code>template</code>.</p>
            <div class="sample">
                <ow-tabs :selected="selectedTab2">
                    <ow-tabs-head>
                        <ow-tabs-item name="data">Data</ow-tabs-item>
                        <ow-tabs-item name="career">Career</ow-tabs-item>
                        <ow-tabs-item name="avatar">Avatar</ow-tabs-item>
                        <template slot="actions">
                            <ow-button>Setting</ow-button>
                        </template>
                    </ow-tabs-head>

                    <ow-tabs-body>
                        <ow-tabs-pane class="pane" name="data">Data</ow-tabs-pane>
                        <ow-tabs-pane class="pane" name="career">Career</ow-tabs-pane>
                        <ow-tabs-pane class="pane" name="avatar">Avatar</ow-tabs-pane>
                    </ow-tabs-body>
                </ow-tabs>
            </div>
            <pre>
                <code class="html">{{sample.actionHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>name</td><td>Name of OwTabsItem and OwTabsBody</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>selected</td><td>Set active item and pane with given selected name</td><td>String</td><td>-</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/tabs'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocTabs",
        data() {
            return {
                sample,
                selectedTab1: 'data',
                selectedTab2: 'data'
            }
        },
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">
.sample {
    margin-bottom: 10px;
    .pane {
        padding: 10px;
        color: $--color-white;
        background: $--color-bg-dark;
    }
}
</style>