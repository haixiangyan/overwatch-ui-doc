<template>
    <div class="doc-label">
        <doc-post>
            <h1>Label</h1>
            <p>You can use this component to wrap other input components.</p>

            <h2>Select</h2>
            <div class="sample">
                <ow-label title="ALL HEROES">
                    <ow-select :width="250" v-model="value1" :options="options1"></ow-select>
                </ow-label>
            </div>
            <pre>
                <code class="html">{{sample.selectHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.selectJs}}</code>
            </pre>

            <h2>Slider</h2>
            <p>It allows you to wrap the whole input component by enabling <code>wrappable</code>. To set an input along OwSlider, you need to bind value to OwLabel too.</p>
            <div class="sample">
                <ow-label v-model="value2" :wrappable="true" title="FIELD OF VIEW">
                    <ow-slider :width="250" v-model="value2"></ow-slider>
                </ow-label>
            </div>
            <pre>
                <code class="html">{{sample.sliderHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.sliderJs}}</code>
            </pre>

            <h2>Switch</h2>
            <div class="sample">
                <ow-label :wrappable="true" title="DISPLAY MODE">
                    <ow-switch :width="300" v-model="value3" :options="options3"></ow-switch>
                </ow-label>
            </div>
            <pre>
                <code class="html">{{sample.switchHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.switchJs}}</code>
            </pre>

            <h2>Input</h2>
            <div class="sample">
                <ow-label :wrappable="true" title="ADD FRIEND">
                    <ow-input rect placeholder="Game ID" :width="300"></ow-input>
                </ow-label>
            </div>
            <pre>
                <code class="html">{{sample.inputHtml}}</code>
            </pre>

            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>title</td><td>Title for input component</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>value</td><td>value of OwSlider (Only works for OwSlider)</td><td>Number, String</td><td>-</td>
                </tr>
                <tr>
                    <td>wrappable</td><td>If OwLabel wraps the whole input component</td><td>Boolean</td><td>false</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/label'
    export default {
        name: "DocLabel",
        data() {
            return {
                sample,
                value1: 'genji',
                options1: [
                    { value: 'genji', label: 'Genji', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png', },
                    { value: 'hanzo', label: 'Hanzo', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png', },
                    { value: 'mccree', label: 'McCree', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png', },
                    { value: 'tracer', label: 'Tracer', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png', },
                    { value: 'zarya', label: 'Zarya', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png', }
                ],
                value2: 30,
                value3: 'medium',
                options3: [
                    {
                        label: 'EPIC',
                        value: 'epic'
                    },
                    {
                        label: 'MEDIUM',
                        value: 'medium'
                    },
                    {
                        label: 'LOW',
                        value: 'low'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>