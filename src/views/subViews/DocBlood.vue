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

            <h2>Color</h2>
            <p>If you think you have better color values, then set <code>goneColor</code> and <code>residualColor</code>.</p>
            <div class="sample">
                <ow-blood residualColor="#3B9CE1" goneColor="#909399" :total="150" :residual="50"></ow-blood>
                <ow-blood residualColor="#DE4561" goneColor="#909399" :total="200" :residual="150"></ow-blood>
            </div>
            <pre>
                <code class="html">{{sample.color}}</code>
            </pre>
            <p>Or set text color by setting <code>totalTextColor</code> and <code>residualTextColor</code>.</p>
            <div class="sample">
                <ow-blood totalTextColor="#3B9CE1" residualTextColor="#909399" residualColor="#3B9CE1" goneColor="#909399" :total="150" :residual="50"></ow-blood>
                <ow-blood totalTextColor="#DE4561" residualTextColor="#909399" residualColor="#DE4561" goneColor="#909399" :total="200" :residual="150"></ow-blood>
            </div>
            <pre>
                <code class="html">{{sample.textColor}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>total</td><td>Total blood</td><td>Number</td><td>200</td>
                </tr>
                <tr>
                    <td>width</td><td>Width of OwBlood</td><td>Number</td><td>240</td>
                </tr>
                <tr>
                    <td>residual</td><td>How much blood left</td><td>Number</td><td>Same as total</td>
                </tr>
                <tr>
                    <td>residualColor</td><td>Background of residual blood</td><td>String</td><td>"rgba(255, 255, 255, 0.8)"</td>
                </tr>
                <tr>
                    <td>goneColor</td><td>Background of blood that has gone</td><td>String</td><td>"rgba(255, 255, 255, 0.5)"</td>
                </tr>
                <tr>
                    <td>totalTextColor</td><td>Total text color</td><td>String</td><td>"black"</td>
                </tr>
                <tr>
                    <td>residualTextColor</td><td>Residual text color</td><td>String</td><td>"black"</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/blood'
    export default {
        name: "DocBlood",
        data() {
            return {
                sample
            }
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
