<template>
    <div class="doc-input">
        <doc-post>
            <h1>Input</h1>
            <!--Basic-->
            <h2>Basic</h2>
            <div class="sample">
                <label>
                    Name
                    <ow-input></ow-input>
                </label>
            </div>
            <pre>
                <code class="html">{{sample.basic}}</code>
            </pre>

            <!--Hint-->
            <h2>Hint</h2>
            <div class="sample">
                <ow-input
                    class="input"
                    value="Password"
                    placeholder="password"
                    icon-name="check"
                    hint="Success: Valid Password."
                    hintType="success">
                </ow-input>
                <ow-input
                    class="input"
                    value="Password"
                    placeholder="password"
                    icon-name="cancel"
                    hint="Error: Invalid Password."
                    hintType="danger">
                </ow-input>
                <ow-input
                    class="input"
                    value="Password"
                    placeholder="password"
                    icon-name="warning"
                    hint="Warn: Password is easy to guess."
                    hintType="warning">
                </ow-input>
                <ow-input
                    class="input"
                    value="Password"
                    placeholder="password"
                    icon-name="notification"
                    hint="Info: Keep typing password."
                    hintType="info">
                </ow-input>
            </div>
            <pre>
                <code class="html">{{sample.hint}}</code>
            </pre>

            <!--Two-way Binding-->
            <h2>Two-way Binding</h2>
            <div class="sample">
                <ow-input
                    v-model="text"
                    placeholder="password">
                </ow-input>

                <p>Result: {{text}}</p>
            </div>
            <pre>
                <code class="html">{{sample.twoWayBindingHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.twoWayBindingJs}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <td>Property</td> <td>Description</td> <td>Type</td> <td>Default</td> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>value</td><td>Set name of an icon that along with OwInput</td><td>String</td><td>""</td>
                </tr>
                <tr>
                    <td>iconName</td><td>Set name of an icon that along with OwInput</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>placeholder</td><td>Set placeholder of OwInput</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>disabled</td><td>Set whether is disabled to OwInput</td><td>Boolean</td><td>false</td>
                </tr>
                <tr>
                    <td>readonly</td><td>Set whether is readonly to OwInput</td><td>Boolean</td><td>false</td>
                </tr>
                <tr>
                    <td>hint</td><td>Set a hin below OwInput</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>hintType</td><td>Set type of hint, can be info, warning, danger, danger</td><td>String</td><td>-</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/input'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocInput",
        data() {
            return {
                sample,
                text: "Hello World"
            }
        },
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">
.doc-input {
    .sample {
        margin-bottom: 10px;
        .input {
            display: inline-block;
            margin-right: 8px;
        }
    }
}
</style>