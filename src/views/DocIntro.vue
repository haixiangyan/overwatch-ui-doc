<template>
    <div class="doc-intro">
        <doc-post>
            <h1>Overwatch UI</h1>
            <!--badges-->
            <img class="badge" src="https://camo.githubusercontent.com/a50c2d62e9116a9b23e760dbb18d507074e21ba1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f75692d2d6c69622d6f76657277617463682d4646433432392e737667" alt="badge">
            <img class="badge" src="https://camo.githubusercontent.com/169a1e3726438633a4ad90dc6b640346381d253b/68747470733a2f2f62616467652e667572792e696f2f6a732f6f76657277617463682d75692e737667" alt="badge">
            <img class="badge" src="https://camo.githubusercontent.com/c3bea802e4ffa728117492a608fe802a40aec586/68747470733a2f2f7472617669732d63692e6f72672f4861697869616e67363132332f6f76657277617463682d75692e7376673f6272616e63683d6d6173746572" alt="badge">
            <img class="badge" src="https://camo.githubusercontent.com/3ccf4c50a1576b0dd30b286717451fa56b783512/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667" alt="badge">
            <p>A UI library of game Overwatch, built with Vue.js.</p>

            <h2>Demo</h2>
            <p>
                <a href="https://haixiang6123.github.io/overwatch-ui/index.html">Click here to view demo</a>
            </p>

            <h2>Docs</h2>
            <p>
                <a href="https://haixiang6123.github.io/ow-ui-doc/#/">Official Docs</a>
            </p>
            <p>For now, I am working on building the official documentation website.</p>

            <h2>Note</h2>
            <p>This UI library will reset some styles as followed. I strongly recommend you to add these styles to all of your projects :), because some CSS bugs can't be found without them.</p>

            <pre>
<code class="css">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}</code>
            </pre>
        </doc-post>
    </div>
</template>

<script>
    import DocPost from '../components/DocPost'

    export default {
        name: 'DocIntro',
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">
.doc-intro {
    .badge {
        margin-right: 5px;
    }
}
</style>
