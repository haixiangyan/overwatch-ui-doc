<template>
    <div class="doc-icon">
        <doc-post>
            <h1>Icon</h1>
            <p>You may need to define the color first before using any icons.</p>
            <h2>Basic</h2>
            <div class="sample display">
                <span @click="onClickIcon(icon)" v-for="icon in icons" :class="['icon', {active: icon === selectedIcon}]">
                    <ow-icon size="2em" :name="icon"></ow-icon>
                    <span class="text">{{icon}}</span>
                </span>
            </div>
            <p>Here's the code for selected icon.</p>
            <pre style="padding: 16px 16px;"><code ref="selectedCode" class="html">{{selectedHtml}}</code></pre>
            <!--Color-->
            <h2>Color</h2>
            <p>In some cases, you may want to highlight the Icon.</p>
            <div class="sample display">
                <span class="icon-small">
                    <ow-icon name="setting" color="#DE4561"></ow-icon>
                </span>
                <span class="icon-small">
                    <ow-icon name="remove" color="#3B9CE1"></ow-icon>
                </span>
                <span class="icon-small">
                    <ow-icon name="user" color="#FFC429"></ow-icon>
                </span>
            </div>
            <pre>
                <code class="html">{{sample.color}}</code>
            </pre>
            <!--Loading-->
            <h2>Loading</h2>
            <p>You can set it to loading state with enable <code>is-loading</code></p>
            <div class="sample display">
                <div class="icon-small">
                    <ow-icon name="loading" :is-loading="true"></ow-icon>
                </div>
            </div>
            <pre>
                <code class="html">{{sample.loading}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>name</td><td>Set name of OwIcon</td><td>String</td><td>"setting"</td>
                </tr>
                <tr>
                    <td>color</td><td>Set stroke color of OwIcon</td><td>String</td><td>"#000000"</td>
                </tr>
                <tr>
                    <td>size</td><td>Size of OwIcon</td><td>String</td><td>"1em"</td>
                </tr>
                <tr>
                    <td>is-loading</td><td>Set loading state of OwIcon	</td><td>Boolean</td><td>false</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/icon'
    import hljs from 'highlight.js'
    export default {
        name: "DocIcon",
        data() {
            return {
                sample,
                icons: [
                    'left', 'right', 'fast-left', 'fast-right', 'upload', 'loading',
                    'seat-solid', 'question-solid', 'cancel-solid', 'confirm-solid', 'warning-solid',
                    'phone-solid', 'up-solid', 'down-solid', 'add', 'subtract', 'order',  'search',
                    'more', 'edit', 'setting', 'bag-confirm', 'warning', 'scan', 'dinner', 'question',
                    'down', 'notification', 'cook', 'cancel', 'up', 'print', 'map', 'calendar', 'bag',
                    'check', 'wifi', 'make-order', 'user', 'pay', 'cancel-order', 'remove'
                ],
                selectedHtml: `<ow-icon name="left" size="2em"></ow-icon>`,
                selectedIcon: 'left'
            }
        },
        methods: {
            onClickIcon(icon) {
                this.$refs.selectedCode.innerText = `<ow-icon name="${icon}" size="2em"></ow-icon>`
                this.selectedIcon = icon
                hljs.highlightBlock(this.$refs.selectedCode)
            },
        }
    }
</script>

<style scoped lang="scss">
.doc-icon {
    .display {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        background: #2B3753;
        color: rgb(201, 212, 227);
        border-radius: 4px;
    }
    .icon {
        display: inline-flex;
        vertical-align: top;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 120px;
        height: 120px;
        transition: all .3s;
        border: 2px solid #2B3753;
        border-radius: 4px;
        &.active {
            border: 2px solid $--color-primary;
        }
        &:hover {
            border: 2px solid $--color-primary;
        }
        &-small {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
        }
    }
    .text {
        margin-top: 4px;
    }
}
</style>
