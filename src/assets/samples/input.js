export default {
basic: `
<label>
    Name
    <ow-input></ow-input>
</label>`,
hint: `
<ow-input
    class="input"
    value="Password"
    placeholder="password"
    icon-name="cancel"
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
</ow-input>`,
twoWayBindingHtml: `
<ow-input
    v-model="text"
    placeholder="password">
</ow-input>

<p>Result: {{text}}</p>`,
twoWayBindingJs: `
data() {
    return {
        text: 'Hello World'
    }
}`
}