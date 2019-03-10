<template>
    <div class="doc-select">
        <doc-post>
            <h1>Select</h1>
            <p>This is a Dropdown selector component. You can put a data list on it.</p>
            <!--Basic-->
            <h2>Basic</h2>
            <p>The key things here are putting a data list and the initial value to the component.</p>
            <div class="sample">
                <ow-select v-model="value" :options="options"></ow-select>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <!--Image-->
            <h2>Image</h2>
            <p>You can also attach an url to the data list. The image will render ont the left.</p>
            <div class="sample">
                <ow-select v-model="value1" :options="options1"></ow-select>
            </div>
            <pre>
                <code class="html">{{sample.imageHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.imageJs}}</code>
            </pre>

            <!--Disabled-->
            <h2>Disabled</h2>
            <p>You can disabled some items by adding <code>disabled</code> property.</p>
            <div class="sample">
                <ow-select v-model="value2" :options="options2"></ow-select>
            </div>
            <pre>
                <code class="html">{{sample.disabledHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.disabledJs}}</code>
            </pre>

            <!--MaxHeight-->
            <h2>Max Height</h2>
            <p>You can set a max height for the dropdown.</p>
            <div class="sample">
                <ow-select :max-height="100" v-model="value3" :options="options3"></ow-select>
            </div>
            <pre>
                <code class="html">{{sample.maxHeightHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.maxHeightJs}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>value</td><td>Set selected dropdown item</td><td>String, Number</td><td>-</td>
                </tr>
                <tr>
                    <td>options</td><td>Data set</td><td>Array</td><td>-</td>
                </tr>
                <tr>
                    <td>max-height</td><td>Max height of dropdown</td><td>Number</td><td>274</td>
                </tr>
                <tr>
                    <td>disabled</td><td>If OwSelect is disabled</td><td>Boolean</td><td>false</td>
                </tr>
                <tr>
                    <td>width</td><td>Width of OwSelect</td><td>Number</td><td>200</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/select'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocSelect",
        data() {
            return {
                sample,
                options: [ { value: 'genji', label: 'Genji', }, { value: 'hanzo', label: 'Hanzo', }, { value: 'mccree', label: 'McCree', }, { value: 'tracer', label: 'Tracer', }, { value: 'zarya', label: 'Zarya', }, ],
                value: 'genji',
                options1: [
                    {
                        value: 'genji',
                        label: 'Genji',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png',
                    }, {
                        value: 'hanzo',
                        label: 'Hanzo',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png',
                    }, {
                        value: 'mccree',
                        label: 'McCree',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png',
                    }, {
                        value: 'tracer',
                        label: 'Tracer',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png',
                    }, {
                        value: 'zarya',
                        label: 'Zarya',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
                    },
                ],
                value1: 'tracer',
                options2: [
                    {
                        value: 'genji',
                        label: 'Genji',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png',
                    }, {
                        value: 'hanzo',
                        label: 'Hanzo',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png',
                        disabled: true
                    }, {
                        value: 'mccree',
                        label: 'McCree',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png',
                    }, {
                        value: 'tracer',
                        label: 'Tracer',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png',
                        disabled: true
                    }, {
                        value: 'zarya',
                        label: 'Zarya',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
                    },
                ],
                value2: 'mccree',
                options3: [
                    {
                        value: 'genji',
                        label: 'Genji',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png',
                    }, {
                        value: 'hanzo',
                        label: 'Hanzo',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png',
                        disabled: true
                    }, {
                        value: 'mccree',
                        label: 'McCree',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png',
                    }, {
                        value: 'tracer',
                        label: 'Tracer',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png',
                        disabled: true
                    }, {
                        value: 'zarya',
                        label: 'Zarya',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
                    },
                    {
                        value: 'genji',
                        label: 'Genji',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png',
                    }, {
                        value: 'hanzo',
                        label: 'Hanzo',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png',
                        disabled: true
                    }, {
                        value: 'mccree',
                        label: 'McCree',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png',
                    }, {
                        value: 'tracer',
                        label: 'Tracer',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png',
                        disabled: true
                    }, {
                        value: 'zarya',
                        label: 'Zarya',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
                    },
                ],
                value3: 'mccree',
            }
        },
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">

</style>