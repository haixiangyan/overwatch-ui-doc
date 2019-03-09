<template>
    <div class="doc-date-picker">
        <doc-post>
            <h1>DatePicker</h1>
            <p>This component allows user to pick a date easily.</p>
            <h2>Basic</h2>
            <div class="sample">
                <ow-date-picker v-model="date1"></ow-date-picker>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <h2>Range</h2>
            <p>You can also specify a range for the DatePicker component.</p>
            <div class="sample">
                <ow-date-picker v-model="date2" :range="range"></ow-date-picker>
            </div>
            <pre>
                <code class="html">{{sample.rangeHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.rangeJs}}</code>
            </pre>

            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>value</td><td>Value of DatePicker</td><td>Date</td><td>-</td>
                </tr>
                <tr>
                    <td>range</td><td>Range of date that user can select</td><td>Array</td><td>[]</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/datePicker'
    export default {
        name: "DocDatePicker",
        data() {
            return {
                sample,
                date1: new Date(),
                date2: new Date(),
                range: [new Date(1996, 7, 20), new Date(2020, 7, 1)]
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-date-picker {
    .sample {
        margin-bottom: 20px;
    }
}
</style>
