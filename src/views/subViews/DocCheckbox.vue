<template>
    <div class="doc-checkbox">
        <doc-post>
            <h1>Checkbox</h1>
            <p>Simple Checkbox component.</p>

            <h2>Basic</h2>
            <div class="sample">
                <div>
                    <div>
                        <ow-checkbox v-model="value1">DPS</ow-checkbox>
                    </div>
                    <div>
                        <ow-checkbox v-model="value2">TANK</ow-checkbox>
                    </div>
                    <div>
                        <ow-checkbox v-model="value3">HEALER</ow-checkbox>
                    </div>
                </div>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>value</td><td>OwCheckbox value</td><td>Boolean</td><td>true</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/checkbox'
    export default {
        name: "DocCheckbox",
        data() {
            return {
                sample,
                value1: true,
                value2: false,
                value3: true
            }
        }
    }
</script>

<style scoped>

</style>
