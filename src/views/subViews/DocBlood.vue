<template>
    <div class="doc-blood">
        <doc-post>
            <h1>Blood</h1>
            <p>This component is built for showing progress.</p>

            <h2>Basic</h2>
            <p>To show total blood for a hero, you can set <code>total</code> props.</p>
            <div class="sample">
                <ow-blood :total="150"></ow-blood>
                <ow-blood :total="200"></ow-blood>
                <ow-blood :total="250"></ow-blood>
                <ow-blood :total="500"></ow-blood>
                <ow-blood :total="600"></ow-blood>
            </div>
            <pre>
                <code class="html">{{sample.basic}}</code>
            </pre>

            <h2>Color</h2>
            <p>If you think you have better color values, then set <code>goneColor</code> and <code>residualColor</code>.</p>
            <div class="sample">
                <ow-blood residualColor="#3B9CE1" goneColor="#909399" :total="150" :residual="50"></ow-blood>
                <ow-blood residualColor="#DE4561" goneColor="#909399" :total="200" :residual="150"></ow-blood>
            </div>
            <pre>
                <code class="html">{{sample.color}}</code>
            </pre>
            <p>Or set text color by setting <code>textTotalColor</code> and <code>textResidualColor</code>.</p>
            <div class="sample">
                <ow-blood textTotalColor="#3B9CE1" textResidualColor="#909399" residualColor="#3B9CE1" goneColor="#909399" :total="150" :residual="50"></ow-blood>
                <ow-blood textTotalColor="#DE4561" textResidualColor="#909399" residualColor="#DE4561" goneColor="#909399" :total="200" :residual="150"></ow-blood>
            </div>
            <pre>
                <code class="html">{{sample.textColor}}</code>
            </pre>


            <h2>Width</h2>
            <p>When setting component <code>width</code>, it's recommended to set a number that can be divided by 6, 8, 10, 20, 24, 32, 40.</p>
            <div class="sample">
                <ow-blood :width="320" :total="200"></ow-blood>
                <ow-blood :width="480" :total="600"></ow-blood>
            </div>
            <pre>
                <code class="html">{{sample.width}}</code>
            </pre>

            <h2>Residual</h2>
            <p>You can display the residual progress.</p>
            <div class="sample">
                <ow-blood :residual="100" :total="200"></ow-blood>
                <ow-blood :residual="200" :total="600"></ow-blood>
            </div>
            <pre>
                <code class="html">{{sample.residual}}</code>
            </pre>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/blood'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocBlood",
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
.doc-blood {
    .sample {
        > div {
            margin-right: 10px;
        }
        ul {
            padding: 0;
        }
    }
}
</style>