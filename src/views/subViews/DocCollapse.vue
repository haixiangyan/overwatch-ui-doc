<template>
    <div class="doc-collapse">
        <doc-post>
            <h1>Collapse</h1>
            <!--Basic-->
            <h2>Basic</h2>
            <p>To use this component, you need to group your them with OwCollapseGroup</p>
            <div class="sample">
                <ow-collapse-group :selected.sync="selectedCollapse1">
                    <ow-collapse title="Title1" name="1"> <div class="content">Content 1</div> </ow-collapse>
                    <ow-collapse title="Title2" name="2"> <div class="content">Content 2</div> </ow-collapse>
                    <ow-collapse title="Title3" name="3"> <div class="content">Content 3</div> </ow-collapse>
                </ow-collapse-group>
                <span>You are selecting: {{selectedCollapse1}}</span>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>
            <!--Single Select-->
            <h2>Single Select</h2>
            <p>You can enable only one OwCollapse to expand. You can't define the selected array that has more than 1 element.</p>
            <div class="sample">
                <ow-collapse-group :selected.sync="selectedCollapse2" :multiSelect="false">
                    <ow-collapse title="Title1" name="1"> <div class="content">Content 1</div> </ow-collapse>
                    <ow-collapse title="Title2" name="2"> <div class="content">Content 2</div> </ow-collapse>
                    <ow-collapse title="Title3" name="3"> <div class="content">Content 3</div> </ow-collapse>
                </ow-collapse-group>
                <span>You are selecting: {{selectedCollapse2}}</span>
            </div>
            <pre>
                <code class="html">{{sample.single}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>selected</td><td>Array of selected items</td><td>Array</td><td>-</td>
                </tr>
                <tr>
                    <td>multiSelect</td><td>If multiple OwCollapse can expand</td><td>Boolean</td><td>true</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/collapse'
    export default {
        name: "DocCollapse",
        data() {
            return {
                sample,
                selectedCollapse1: ['1', '2'],
                selectedCollapse2: ['1']
            }
        }
    }
</script>

<style scoped lang="scss">
.sample {
    margin-bottom: 10px;
    .content {
        margin-top: 4px;
        padding: 10px;
        background: $--color-bg-dark;
        color: $--color-white;
    }
}
</style>
