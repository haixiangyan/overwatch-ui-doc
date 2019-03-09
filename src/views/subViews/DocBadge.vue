<template>
    <div class="doc-badge">
        <doc-post>
            <h1>Badge</h1>
            <p>Add a badge when you wanna display a notification for messages.</p>

            <h2>Basic</h2>
            <div class="sample">
                <ow-badge class="badge-item" title="99+">
                    <span>LOOTBOX</span>
                </ow-badge>
                <ow-badge class="badge-item" title="NEW">
                    <span>HIGHLIGHTS</span>
                </ow-badge>
            </div>
            <pre>
                <code class="html">{{sample.basic}}</code>
            </pre>

            <h2>Dot</h2>
            <p>If you don't want to put a text on OwBadge, you can try Dot mode.</p>
            <div class="sample">
                <ow-badge class="badge-item" :is-dot="true">
                    <span>LOOTBOX</span>
                </ow-badge>
                <ow-badge class="badge-item" :is-dot="true">
                    <span>HIGHLIGHTS</span>
                </ow-badge>
            </div>
            <pre>
                <code class="html">{{sample.dot}}</code>
            </pre>

            <h2>Another Way to Display</h2>
            <p>You can set it as an inline-block element aside other elements.</p>
            <div class="sample block">
                <span>MESSAGE</span>
                <ow-badge title="NEW"></ow-badge>
            </div>
            <pre>
                <code class="html">{{sample.block}}</code>
            </pre>

            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>title</td><td>OwBadge content</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>is-dot</td><td>If it's in dot state</td><td>String</td><td>"left"</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/badge'
    export default {
        name: "DocBadge",
        data() {
            return {
                sample
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-badge {
    .sample {
        display: flex;
        align-items: center;
        padding: 20px;
        color: white;
        background: #464F6A;
        border-radius: 4px;
        .badge-item {
            margin-right: 40px;
        }
        &.block {
            width: 300px;
            justify-content: space-between;
        }
    }
}
</style>
