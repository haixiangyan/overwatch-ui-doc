<template>
    <div class="doc-validator">
        <doc-post>
            <h1>Validator</h1>
            <p>This library provides you a validator for validating input value. Before you use it, you need to import
                it as plugins.</p>
            <pre>
                <code class="js">{{sample.importJs}}</code>
            </pre>
            <!--Basic-->
            <h2>Basic</h2>
            <div class="sample">
                <ow-input v-model="values1.email" :hint="hint1" :hint-type="type1"></ow-input>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <!--More rules-->
            <h2>More Rules</h2>
            <p>You can add more pre-defined rules to validate your value.</p>
            <div class="sample">
                <ow-input v-model="values2.email" :hint="hint2" :hint-type="type2"></ow-input>
            </div>
            <pre>
                <code class="html">{{sample.moreRulesHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.moreRulesJs}}</code>
            </pre>

            <!--Customization-->
            <h2>Custom Validator</h2>
            <p>This validator allows you to add your own validators globally or locally.</p>
            <div class="sample">
                <h3>hasNumber</h3>
                <ow-input v-model="values3.email" :hint="hint3" :hint-type="type3"></ow-input>
                <h3>hasNumber & hasFool</h3>
                <ow-input v-model="values4.email" :hint="hint4" :hint-type="type4"></ow-input>
            </div>
            <pre>
                <code class="html">{{sample.customHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.customJs}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <p>Here's a sample of error results.</p>
            <pre>
                <code class="js">{{sample.results}}</code>
            </pre>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/validator'

    export default {
        name: "DocValidator",
        data() {
            return {
                sample,
                validator1: new this.$OwValidator(),
                validator3: new this.$OwValidator(),
                validator4: new this.$OwValidator(),
                values1: { email: 'genji@gmail.com', },
                values2: { email: 'genji@gmail.com', },
                values3: { email: '123@gmail.com', },
                values4: { email: '123@gmail.com', },
                rules1: [ {field: 'email', required: true} ],
                rules2: [{
                    field: 'email',
                    required: true,
                    pattern: 'email',
                    minLength: 5,
                    maxLength: 20
                }],
                rules3: [ {field: 'email', hasNumber: true} ],
                rules4: [ {field: 'email', hasNumber: true, hasFool: true} ],
                hint1: '',
                hint2: '',
                hint3: '',
                hint4: '',
            }
        },
        computed: {
            type1() {
                // Get possible errors
                const errors = this.validator1.validate(this.values1, this.rules1)
                // Assign hint
                this.hint1 = errors.email && errors.email.required
                // Determine hint type
                return Object.keys(errors).length > 0 ? 'danger' : 'success'
            },
            type2() {
                // Get possible errors
                const errors = this.validator1.validate(this.values2, this.rules2)
                // Assign hint
                if (errors.email) {
                    this.hint2 = Object.keys(errors.email).map(errorKey => errors.email[errorKey]).join(', ')
                }
                // Determine hint type
                return Object.keys(errors).length > 0 ? 'danger' : 'success'
            },
            type3() {
                // Get possible errors
                const errors = this.validator3.validate(this.values3, this.rules3)
                // Assign hint
                if (errors.email) {
                    this.hint3 = Object.keys(errors.email).map(errorKey => errors.email[errorKey]).join(', ')
                }
                // Determine hint type
                return Object.keys(errors).length > 0 ? 'danger' : 'success'
            },
            type4() {
                // Get possible errors
                const errors = this.validator4.validate(this.values4, this.rules4)
                // Assign hint
                if (errors.email) {
                    this.hint4 = Object.keys(errors.email).map(errorKey => errors.email[errorKey]).join(', ')
                }
                // Determine hint type
                return Object.keys(errors).length > 0 ? 'danger' : 'success'
            },
        },
        created() {
            // Add validator globally
            this.$OwValidator.addValidator('hasNumber', (value) => {
                if (!/\d+/.test(value)) {
                    return 'No number in this value'
                }
            })
            // Add validator locally
            this.validator4.hasFool = (value) => {
                if (value.indexOf('Fool') === -1) {
                    return 'No "Fool" string'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-validator {
    .sample {
        margin-bottom: 20px;
    }
}
</style>
