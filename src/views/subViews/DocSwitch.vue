<template>
    <div class="doc-switch">
        <doc-post>
            <h1>Switch</h1>
            <p>This component allows you to present a switch for user.</p>

            <h2>Basic</h2>
            <div class="sample">
                <ow-switch v-model="value1" :options="options1"></ow-switch>
                <p>You are selecting: {{value1}}</p>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <h2>Width</h2>
            <p>You can customize the width.</p>
            <div class="sample">
                <ow-switch v-model="value2" :options="options2" :width="400"></ow-switch>
                <p>You are selecting: {{value2}}</p>
            </div>
            <pre>
                <code class="html">{{sample.widthHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.widthJs}}</code>
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
                    <td>options</td><td>Options array</td><td>Array</td><td>-</td>
                </tr>
                <tr>
                    <td>width</td><td>OwSwitch width</td><td>Number</td><td>200</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/switch'
    export default {
        name: "DocSwitch",
        data() {
            return {
                sample,
                value1: 'medium',
                options1: [
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
                ],
                value2: 'full',
                options2: [
                    {
                        label: 'FULL SCREEN',
                        value: 'full'
                    },
                    {
                        label: 'HALF SCREEN',
                        value: 'half'
                    },
                    {
                        label: 'SMALL SCREEN',
                        value: 'small'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
