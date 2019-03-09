<template>
    <div class="doc-start">
        <doc-post>
            <h1>Get Started</h1>

            <h2>Install</h2>
            <p>
                You can use <code>yarn</code> or <code>npm</code> to install this UI library.
            </p>

            <pre>
                <code class="bash">{{sample.install}}</code>
            </pre>

            <h2>Import</h2>
            <p>
                Then you need to import the components and plugins of it.
            </p>
            <pre>
                <code class="js">{{sample.importing}}</code>
            </pre>

            <h2>Usage</h2>
            <p>Now, let's place some components in your Web APP!</p>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>

            <p>Then you'll see this.</p>
            <div class="demo">
                <ow-button class="demo-button" type="info">Info</ow-button>
                <ow-button class="demo-button" type="primary">Primary</ow-button>
                <ow-button class="demo-button" type="success">Success</ow-button>
                <ow-button class="demo-button" type="warning">Warning</ow-button>
                <ow-button class="demo-button" type="danger">Danger</ow-button>

                <ow-popover position="top">
                    <template slot="content">
                        <div>Hello, Overwatch UI!</div>
                    </template>
                    <ow-button>Pop It!</ow-button>
                </ow-popover>
            </div>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../assets/samples/start'

    export default {
        name: 'DocIntro',
        data() {
            return {
                sample
            }
        }
    }
</script>

<style scoped lang="scss">
.demo {
    &-button {
        margin-right: 10px;
    }
}
</style>
