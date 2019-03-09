<template>
    <div class="doc-popover">
        <doc-post>
            <h1>Popover</h1>
            <!--Basic-->
            <h2>Basic</h2>
            <p>Here is the basic example.</p>
            <div class="sample">
                <ow-popover position="top">
                    <template slot="content">
                        <div>Popover Content</div>
                    </template>
                    <ow-button>Pop It!</ow-button>
                </ow-popover>
            </div>
            <pre>
                <code class="html">{{sample.basic}}</code>
            </pre>

            <!--Directions-->
            <h2>Directions</h2>
            <p>
                You can set your pop content in 4 directions:
                <code>top</code>, <code>bottom</code>, <code>left</code> and <code>right</code>
            </p>
            <div class="sample">
                <ow-popover class="popover" position="top">
                    <template slot="content">
                        <div>Popover Content, Hello World</div>
                    </template>
                    <ow-button>Top</ow-button>
                </ow-popover>
                <ow-popover class="popover" position="bottom">
                    <template slot="content">
                        <div>Popover Content, Hello World</div>
                    </template>
                    <ow-button type="warning">Bottom</ow-button>
                </ow-popover>
                <ow-popover class="popover" position="left">
                    <template slot="content">
                        <div>Popover Content, Hello World</div>
                    </template>
                    <ow-button type="info">Left</ow-button>
                </ow-popover>
                <ow-popover class="popover" position="right">
                    <template slot="content">
                        <div>Popover Content, Hello World</div>
                    </template>
                    <ow-button type="danger">Right</ow-button>
                </ow-popover>
            </div>
            <pre>
                <code class="html">{{sample.direction}}</code>
            </pre>

            <!--Trigger-->
            <h2>Trigger</h2>
            <p>You can also set the trigger to <code>hover</code>. Default trigger is <code>click</code>.</p>
            <div class="sample">
                <ow-popover trigger="hover" class="popover" position="top">
                    <template slot="content">
                        <div>Popover Content, Hello World</div>
                    </template>
                    <ow-button>Top</ow-button>
                </ow-popover>
                <ow-popover trigger="hover" class="popover" position="bottom">
                    <template slot="content">
                        <div>Popover Content, Hello World</div>
                    </template>
                    <ow-button type="warning">Bottom</ow-button>
                </ow-popover>
                <ow-popover trigger="hover" class="popover" position="left">
                    <template slot="content">
                        <div>Popover Content, Hello World</div>
                    </template>
                    <ow-button type="info">Left</ow-button>
                </ow-popover>
                <ow-popover trigger="hover" class="popover" position="right">
                    <template slot="content">
                        <div>Popover Content, Hello World</div>
                    </template>
                    <ow-button type="danger">Right</ow-button>
                </ow-popover>
            </div>
            <pre>
                <code class="html">{{sample.hover}}</code>
            </pre>

            <!--Close Event-->
            <h2>Close Event</h2>
            <p>OwPopover will expose a <code>close</code> function to close it. You can use <code>slot-scope="close"</code> to invoke it.</p>
            <div class="sample">
                <ow-popover position="top">
                    <template slot="content" slot-scope="{close}">
                        <div>Popover Content, Hello World</div>
                        <ow-button @click="close">Cancel</ow-button>
                    </template>
                    <ow-button>Top</ow-button>
                </ow-popover>
            </div>
            <pre>
                <code class="html">{{sample.close}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>trigger</td><td>Trigger of showing OwPopover</td><td>String</td><td>"click"</td>
                </tr>
                <tr>
                    <td>position</td><td>Position of showing OwPopover: left, right, top, bottom</td><td>String</td><td>"left"</td>
                </tr>
                <tr>
                    <td>slot-scope.close</td><td>Close function to hide OwPopover</td><td>Function</td><td>-</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/popover'
    export default {
        name: "DocPopover",
        data() {
            return {
                sample
            }
        }
    }
</script>

<style scoped lang="scss">
.sample {
    margin-bottom: 10px;
    .popover {
        margin-right: 8px;
    }
}
</style>
