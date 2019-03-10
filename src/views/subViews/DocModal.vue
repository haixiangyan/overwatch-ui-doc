<template>
    <div class="doc-modal">
        <doc-post>
            <h1>Modal</h1>
            <p>It's easy to display an editor form for user with this component.</p>

            <h2>Basic</h2>
            <div class="sample">
                <ow-button @click="isOpen = true">Show A Modal</ow-button>
                <ow-modal :is-open.sync="isOpen">
                    <template slot="header">
                        ADD A NEW FRIEND
                    </template>
                    <p style="margin-bottom: 12px">PUT A GAME ID OR EMAIL ADDRESS</p>
                    <ow-input placeholder="Game ID or Email Address" :width="300"></ow-input>
                    <template slot="footer">
                        <ow-button @click="isOpen = false">BACK</ow-button>
                        <ow-button type="warning">SEND REQUEST</ow-button>
                    </template>
                </ow-modal>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <h2>Fixed</h2>
            <p>You can set it not fixed to the screen.</p>
            <div class="sample">
                <ow-button @click="isOpen1 = true">Show A Modal</ow-button>
                <ow-modal :is-fixed="false" :is-open.sync="isOpen1">
                    <template slot="header">
                        ADD A NEW FRIEND
                    </template>
                    <p style="margin-bottom: 12px">PUT A GAME ID OR EMAIL ADDRESS</p>
                    <ow-input placeholder="Game ID or Email Address" :width="300"></ow-input>
                    <template slot="footer">
                        <ow-button @click="isOpen1 = false">BACK</ow-button>
                        <ow-button type="warning">SEND REQUEST</ow-button>
                    </template>
                </ow-modal>
            </div>
            <pre>
                <code class="html">{{sample.fixedHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.fixedJs}}</code>
            </pre>

            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>is-open</td><td>Set if this OwModal is open<td>Boolean</td><td>false</td>
                </tr>
                <tr>
                    <td>is-fixed</td><td>If this OwModal is fixed to screen</td><td>Boolean</td><td>true</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/modal'
    export default {
        name: "DocModal",
        data() {
            return {
                sample,
                isOpen: false,
                isOpen1: false
            }
        }
    }
</script>

<style scoped>

</style>
