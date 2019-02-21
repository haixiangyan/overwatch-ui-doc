<template>
    <div class="doc-grid">
        <doc-post>
            <h1>Grid System</h1>
            <p>This UI library provides a Grid System. It mainly adapt to PC, tablet and cell phone screen.</p>
            <!--Basic-->
            <h2>Basic</h2>
            <div class="sample">
                <ow-row class="row">
                    <ow-col :phone="{span: 6}">
                        <div class="col-item col-item-primary"></div>
                    </ow-col>
                    <ow-col :phone="{span: 6}">
                        <div class="col-item col-item-warning"></div>
                    </ow-col>
                    <ow-col :phone="{span: 6}">
                        <div class="col-item col-item-primary"></div>
                    </ow-col>
                    <ow-col :phone="{span: 6}">
                        <div class="col-item col-item-warning"></div>
                    </ow-col>
                </ow-row>
            </div>
            <pre>
                <code class="html">{{sample.basic}}</code>
            </pre>

            <!--Gutter-->
            <h2>Gutter</h2>
            <p>You can assign a value to gutter to give more space between each element.</p>
            <div class="sample">
                <ow-row :gutter="10" class="row">
                    <ow-col :phone="{span: 6}">
                        <div class="col-item col-item-primary"></div>
                    </ow-col>
                    <ow-col :phone="{span: 6}">
                        <div class="col-item col-item-warning"></div>
                    </ow-col>
                    <ow-col :phone="{span: 6}">
                        <div class="col-item col-item-primary"></div>
                    </ow-col>
                    <ow-col :phone="{span: 6}">
                        <div class="col-item col-item-warning"></div>
                    </ow-col>
                </ow-row>
            </div>
            <pre>
                <code class="html">{{sample.gutter}}</code>
            </pre>

            <!--Span and Offset-->
            <h2>Span and Offset</h2>
            <p>You can define width for each OwCol or add an offset.</p>
            <div class="sample">
                <ow-row class="row">
                    <ow-col :phone="{span: 1, offset: 2}">
                        <div class="col-item col-item-primary"></div>
                    </ow-col>
                    <ow-col :phone="{span: 3, offset: 4}">
                        <div class="col-item col-item-warning"></div>
                    </ow-col>
                    <ow-col :phone="{span: 5, offset: 6}">
                        <div class="col-item col-item-primary"></div>
                    </ow-col>
                </ow-row>
            </div>
            <pre>
                <code class="html">{{sample.spanAndOffset}}</code>
            </pre>

            <!--Responsive-->
            <h2>Responsive</h2>
            <p>This library will first look for <code>phone</code>, then <code>tablet</code>, and <code>pc</code> at the end.
                To make it more adaptable, you should always set <code>phone</code> first.</p>
            <div class="sample">
                <ow-row class="row">
                    <ow-col :pc="{span: 2}" :tablet="{span: 12}" :phone="{span: 24}">
                        <div class="col-item col-item-primary"></div>
                    </ow-col>
                </ow-row>
            </div>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>pc</td><td>Set span and offset for PC device</td><td>Object</td><td>-</td>
                </tr>
                <tr>
                    <td>tablet</td><td>Set span and offset for tablet device</td><td>Object</td><td>-</td>
                </tr>
                <tr>
                    <td>phone</td><td>Set span and offset for phone device</td><td>Object</td><td>-</td>
                </tr>
                <tr>
                    <td>span</td><td>Set span of OwCol</td><td>Object</td><td>-</td>
                </tr>
                <tr>
                    <td>offset</td><td>Set offset of OwCol</td><td>Object</td><td>-</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/grid'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocGrid",
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
    .row {
        margin-bottom: 10px;
        .col-item {
            height: 30px;
            &-primary {
                background: $--color-primary;
            }
            &-warning {
                background: $--color-warning;
            }
        }
    }
}
</style>