<template>
    <div class="doc-button">
        <doc-post>
            <h1>Button</h1>

            <!--Button Types-->
            <h2>Button Types</h2>
            <p>There are 4 button types: primary, warning, info, danger.</p>
            <div class="samples">
                <ow-button class="item" type="primary">Primary</ow-button>
                <ow-button class="item" type="warning">Warning</ow-button>
                <ow-button class="item" type="info">Info</ow-button>
                <ow-button class="item" type="danger">Danger</ow-button>
            </div>
            <pre>
                <code class="html">{{sample.withType}}</code>
            </pre>

            <!--Button with Icons-->
            <h2>Button with Icons</h2>
            <p>You can add an icon inside the button.</p>
            <div class="samples">
                <ow-button class="item" type="primary" icon-name="setting">Setting</ow-button>
                <ow-button class="item" type="danger" icon-name="remove">Remove</ow-button>
            </div>
            <pre>
                <code class="html">{{sample.withIcon}}</code>
            </pre>
            <p>Also, you can set its position as you like.</p>
            <div class="samples">
                <ow-button class="item" icon-name="up" icon-position="left">Up</ow-button>
                <ow-button class="item" icon-name="down" icon-position="right">Down</ow-button>
            </div>
            <pre>
                <code class="html">{{sample.withIconPosition}}</code>
            </pre>
            <p>Loading state is also available.</p>
            <div class="samples">
                <ow-button
                    icon-name="loading"
                    :is-loading="true">
                    Loading...
                </ow-button>
            </div>
            <pre>
                <code class="html">{{sample.withLoading}}</code>
            </pre>

            <!--Button with event-->
            <h2>Event</h2>
            <p>You can add a click event handler to this component.</p>
            <div class="samples">
                <ow-button
                    class="item"
                    @click="isLoading = !isLoading"
                    icon-name="loading"
                    :is-loading="isLoading">
                    Loading...
                </ow-button>
            </div>
            <pre>
                <code class="html">{{sample.withEvent}}</code>
            </pre>

            <!--Button with group-->
            <h2>Button Group</h2>
            <p>Sometimes, you may want to group several buttons like: buttons for next page and prev page.</p>
            <div class="samples">
                <ow-button-group>
                    <ow-button icon-name="add" type="primary" icon-position="left">
                        More
                    </ow-button>
                    <ow-button icon-name="subtract" type="primary" icon-position="right">
                        Less
                    </ow-button>
                </ow-button-group>
            </div>
            <pre>
                <code class="html">{{sample.withGroup}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                    <tr> <td>Property</td> <td>Description</td> <td>Type</td> <td>Default</td> </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>icon-name</td><td>Set name of icon in OwButton</td><td>String</td><td>-</td>
                    </tr>
                    <tr>
                        <td>icon-position</td><td>Set position of icon in OwButton</td><td>String</td><td>"left"</td>
                    </tr>
                    <tr>
                        <td>is-loading</td><td>Set the loading status of OwButton</td><td>Boolean</td><td>false</td>
                    </tr>
                    <tr>
                        <td>type</td><td>Set type of OwButton</td><td>String</td><td>"primary"</td>
                    </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/button'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocButton",
        data() {
            return {
                sample,
                isLoading: true
            }
        },
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">
.doc-button {
    .samples {
        margin-bottom: 8px;
        .item {
            margin: 0 4px;
        }
    }
}
</style>