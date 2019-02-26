<template>
    <div class="doc-icon">
        <doc-post>
            <h1>Icon</h1>
            <p>You may need to define the color first before using any icons.</p>
            <!--Color-->
            <h2>Color</h2>
            <p>In some cases, you may want to highlight the Icon.</p>
            <div class="sample">
                <ow-icon class="icon" name="setting" color="red"></ow-icon>
                <ow-icon class="icon" name="remove" color="green"></ow-icon>
                <ow-icon class="icon" name="user" color="blue"></ow-icon>
            </div>
            <pre>
                <code class="html">{{sample.color}}</code>
            </pre>
            <!--Loading-->
            <h2>Loading</h2>
            <p>You can set it to loading state with enable <code>is-loading</code></p>
            <div class="sample">
                <ow-icon name="loading" :is-loading="true"></ow-icon>
            </div>
            <pre>
                <code class="html">{{sample.loading}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>name</td><td>Set name of OwIcon</td><td>String</td><td>"setting"</td>
                </tr>
                <tr>
                    <td>color</td><td>Set stroke color of OwIcon</td><td>String</td><td>"#000000"</td>
                </tr>
                <tr>
                    <td>is-loading</td><td>Set loading state of OwIcon	</td><td>Boolean</td><td>false</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/icon'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocIcon",
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
.sample {
    margin-bottom: 10px;
    .icon {
        margin-right: 8px;
    }
}
</style>