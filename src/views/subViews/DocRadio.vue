<template>
    <div class="doc-radio">
        <doc-post>
            <h1>Radio</h1>
            <p>Simple Radio component.</p>

            <h2>Basic</h2>
            <div class="sample">
                <div>
                    <ow-radio v-model="value" radioKey="dps" :options="options">DPS</ow-radio>
                </div>
                <div>
                    <ow-radio v-model="value" radioKey="tank" :options="options">TANK</ow-radio>
                </div>
                <div>
                    <ow-radio v-model="value" radioKey="healer" :options="options">HEALER</ow-radio>
                </div>
                <p>You prefer: {{value}}</p>
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
                    <td>value</td><td>Selected value</td><td>String, Number, Boolean</td><td>-</td>
                </tr>
                <tr>
                    <td>radioKey</td><td>The value that belongs to current OwRadio</td><td>String, Number, Boolean</td><td>-</td>
                </tr>
                <tr>
                    <td>options</td><td>Option array that should contain "value" property</td><td>Array</td><td>-</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/radio'
    export default {
        name: "DocRadio",
        data() {
            return {
                sample,
                value: 'dps',
                options: [
                    { value: 'dps' },
                    { value: 'tank' },
                    { value: 'healer' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
