<template>
   <div class="doc-layout">
        <doc-post>
            <h1>Layout</h1>
            <!--Basic-->
            <h2>Examples</h2>
            <p>Here is the basic example.</p>
            <div class="sample">
                <ow-layout class="layout">
                    <ow-header class="header">Header</ow-header>
                    <ow-content class="content">Content</ow-content>
                    <ow-footer class="footer">Footer</ow-footer>
                </ow-layout>
            </div>
            <pre>
                <code class="html">{{sample.basic}}</code>
            </pre>

            <!--Sider-->
            <h2>Using Sider</h2>
            <p>You can add a sider aside main content.</p>
            <div class="sample">
                <ow-layout>
                    <ow-sider class="sider">Sider</ow-sider>
                    <ow-layout class="layout">
                        <ow-header class="header">Header</ow-header>
                        <ow-content class="content">Content</ow-content>
                        <ow-footer class="footer">Footer</ow-footer>
                    </ow-layout>
                </ow-layout>
            </div>
            <pre>
                <code class="html">{{sample.outerSider}}</code>
            </pre>

            <p>Adding sider in another way.</p>
            <div class="sample">
                <ow-layout class="layout">
                    <ow-header class="header">Header</ow-header>
                    <ow-layout>
                        <ow-sider class="sider">Sider</ow-sider>
                        <ow-content class="content">Content</ow-content>
                    </ow-layout>
                    <ow-footer class="footer">Footer</ow-footer>
                </ow-layout>
            </div>
            <pre>
                <code class="html">{{sample.innerSider}}</code>
            </pre>

            <p>You can also toggle sider with props visible.</p>
            <div class="sample">
                <ow-layout class="layout">
                    <ow-header class="header">Header</ow-header>
                    <ow-layout>
                        <ow-sider :visible="isVisible" class="sider">Sider</ow-sider>
                        <ow-content class="content">
                            Content
                            <ow-button @click="isVisible = !isVisible">Toggle Sider</ow-button>
                        </ow-content>
                    </ow-layout>
                    <ow-footer class="footer">Footer</ow-footer>
                </ow-layout>
            </div>
            <pre>
                <code class="html">{{sample.toggle}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>visible</td><td>Set if OwHead is visible</td><td>Boolean</td><td>true</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
   </div>
</template>

<script>
    import sample from '../../assets/samples/layout'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocLayout",
        data() {
            return {
                sample,
                isVisible: true
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
    color: $--color-white;
    .layout {
        width: 100%;
        .header, .footer {
            @include hvFlexCenterMx(flex);
            width: 100%;
            height: 30px;
            background: $--color-primary;
        }
        .content {
            @include hvFlexCenterMx(flex);
            height: 120px;
            background: $--color-bg;
        }
    }
    .sider {
        @include hvFlexCenterMx(flex);
        width: 10%;
        background: $--color-bg-dark;
    }
}
</style>