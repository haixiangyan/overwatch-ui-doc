export default {
importJs: `
import OwUI from 'overwatch-ui'
Vue.use(OwUI.plugins.$OwValidator)`,
basicHtml: `
<ow-input v-model="values.email" :hint="hint" :hint-type="type"></ow-input>`,
basicJs: `
data() {
    return {
        validator: new this.$OwValidator(),
        values: {
            email: 'genji@gmail.com',
        },
        rules: [
            {field: 'email', required: true}
        ],
        hint: ''
    }
},
computed: {
    type() {
        // Get possible errors
        const errors = this.validator.validate(this.values, this.rules)
        // Assign hint
        this.hint = errors.email && errors.email.required
        // Determine hint type
        return Object.keys(errors).length > 0 ? 'danger' : 'success'
    }
}`,
moreRulesHtml: `
<ow-input v-model="values.email" :hint="hint" :hint-type="type"></ow-input>`,
moreRulesJs: `
data() {
    return {
        values: {
            email: 'genji@gmail.com',
        },
        rules: [{
            field: 'email',
            required: true,
            pattern: 'email',
            minLength: 5,
            maxLength: 20
        }],
        hint: ''
    }
},
computed: {
    type() {
        // Get possible errors
        const errors = this.validator.validate(this.values, this.rules)
        // Assign hint
        if (errors.email) {
            // Join hints
            this.hint = Object.keys(errors.email).map(errorKey => errors.email[errorKey]).join(', ')
        }
        // Determine hint type
        return Object.keys(errors).length > 0 ? 'danger' : 'success'
    }
}`,
customHtml: `
<ow-input v-model="values3.email" :hint="hint3" :hint-type="type3"></ow-input>
<ow-input v-model="values4.email" :hint="hint4" :hint-type="type4"></ow-input>`,
customJs: `
data() {
    return {
        validator3: new this.$OwValidator(),
        validator4: new this.$OwValidator(),
        values3: { email: '123@gmail.com', },
        values4: { email: '123@gmail.com', },
        rules3: [ {field: 'email', hasNumber: true} ],
        rules4: [ {field: 'email', hasNumber: true, hasFool: true} ],
        hint3: '',
        hint4: '',
    }
},
computed: {
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
}`,
    results: `
const errors = {
    email: {
        required: 'Value required',
        pattern: 'Invalid Value',
        minLength: 'Too short',
        maxLength: 'Too long'
    },
    password: {
        required: 'Value required',
        pattern: 'Invalid Value',
        minLength: 'Too short',
        maxLength: 'Too long'
    }
}`
}