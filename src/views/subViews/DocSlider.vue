<template>
    <div class="doc-slider">
        <doc-post>
            <h1>Slider</h1>

            <h2>Basic</h2>
            <p>You can use two-way binding to make it responsive to data.</p>
            <div class="sample">
                <ow-slider v-model="value"></ow-slider>
                <p>You are selecting: {{value}}</p>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <h2>Range</h2>
            <p>You can also give it a range.</p>
            <div class="sample">
                <ow-slider :min="20" :max="50" v-model="value1"></ow-slider>
                <p>Setting range to [20, 50]. You are selecting: {{value1}}</p>
            </div>
            <pre>
                <code class="html">{{sample.rangeHtml}}</code>
            </pre>

            <h2>Width</h2>
            <p>Customize the width with property <code>width</code>.</p>
            <div class="sample">
                <ow-slider :width="400" v-model="value2"></ow-slider>
                <p>You are selecting: {{value2}}</p>
            </div>
            <pre>
                <code class="html">{{sample.widthHtml}}</code>
            </pre>

            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>value</td><td>Value of OwSlider</td><td>Number</td><td>-</td>
                </tr>
                <tr>
                    <td>min</td><td>Minimum value of OwSlider</td><td>Number</td><td>0</td>
                </tr>
                <tr>
                    <td>max</td><td>Maximum value of OwSlider</td><td>Number</td><td>100</td>
                </tr>
                <tr>
                    <td>width</td><td>Width of OwSlider</td><td>Number</td><td>200</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/slider'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocSlider",
        data() {
            return {
                sample,
                value: 20,
                value1: 50,
                value2: 30
            }
        },
        components: { DocPost }
    }
</script>

<style scoped lang="scss">

</style>