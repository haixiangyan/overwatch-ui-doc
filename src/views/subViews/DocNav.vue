<template>
    <div class="doc-nav">
        <doc-post>
            <h1>Nav</h1>
            <p>You can use <code>Ow-Nav</code> component to display the navigation bar.</p>

            <!--Basic-->
            <h2>Basic</h2>
            <p>Here's the basic sample.</p>
            <div class="sample">
                <ow-nav :selected.sync="selected1">
                    <ow-nav-item name="home">Home</ow-nav-item>
                    <ow-nav-item name="team">Team</ow-nav-item>
                    <ow-nav-item name="developer">Developer</ow-nav-item>
                    <ow-nav-item name="career">Career</ow-nav-item>
                </ow-nav>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <p>Then you need to define <code>selected</code> in data function.</p>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <!--Nested-->
            <h2>Sub Nav</h2>
            <p>It allows you to nest a Sub Nav component in Nav.</p>
            <div class="sample">
                <ow-nav :selected.sync="selected2">
                    <ow-nav-item name="home">Home</ow-nav-item>
                    <ow-sub-nav name="about">
                        <template slot="title">About</template>
                        <ow-nav-item name="team">Team</ow-nav-item>
                        <ow-nav-item name="developer">Developer</ow-nav-item>
                        <ow-sub-nav name="company">
                            <template slot="title">Company</template>
                            <ow-nav-item name="baidu">Baidu</ow-nav-item>
                            <ow-sub-nav name="tencent">
                                <template slot="title">Tencent</template>
                                <ow-nav-item name="sports">Sports</ow-nav-item>
                                <ow-nav-item name="ant">Ant</ow-nav-item>
                            </ow-sub-nav>
                        </ow-sub-nav>
                    </ow-sub-nav>
                    <ow-nav-item name="career">Career</ow-nav-item>
                </ow-nav>
            </div>
            <pre>
                <code class="html">{{sample.nested}}</code>
            </pre>

            <!--Vertical-->
            <h2>Vertical Nav</h2>
            <p>Nav can be set to vertical mode, but you need to define how width it is.</p>
            <div class="sample">
                <ow-nav :selected.sync="selected1" :isVertical="true" style="width: 200px">
                    <ow-nav-item name="home">Home</ow-nav-item>
                    <ow-sub-nav name="about">
                        <template slot="title">About</template>
                        <ow-nav-item name="team">Team</ow-nav-item>
                        <ow-nav-item name="developer">Developer</ow-nav-item>
                        <ow-sub-nav name="company">
                            <template slot="title">Company</template>
                            <ow-nav-item name="baidu">Baidu</ow-nav-item>
                            <ow-sub-nav name="tencent">
                                <template slot="title">Tencent</template>
                                <ow-nav-item name="sports">Sports</ow-nav-item>
                                <ow-nav-item name="ant">Ant</ow-nav-item>
                            </ow-sub-nav>
                        </ow-sub-nav>
                    </ow-sub-nav>
                    <ow-nav-item name="career">Career</ow-nav-item>
                </ow-nav>
            </div>
            <pre>
                <code class="html">{{sample.vertical}}</code>
            </pre>

            <!--Responsive-->
            <h2>Responsive</h2>
            <p>You can add a listener to deal with the new selected data or define a function to watch the selected data.</p>
            <div class="sample">
                <ow-nav :selected.sync="selected4" @update:selected="onUpdateSelected">
                    <ow-nav-item name="home">Home</ow-nav-item>
                    <ow-nav-item name="team">Team</ow-nav-item>
                    <ow-nav-item name="developer">Developer</ow-nav-item>
                    <ow-nav-item name="career">Career</ow-nav-item>
                </ow-nav>
            </div>
            <pre>
                <code class="html">{{sample.newSelectedHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.newSelectedJs}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <td>Property</td> <td>Description</td> <td>Type</td> <td>Default</td> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>selected</td><td>Current selected name</td><td>String</td><td>""</td>
                </tr>
                <tr>
                    <td>name</td><td>Name of this item or Sub Nav. It's required.</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>is-vertical</td><td>Set if Nav is on vertical mode</td><td>Boolean</td><td>false</td>
                </tr>

                <tr>
                    <td>update:selected</td><td>Event of getting new selected name</td><td>Function</td><td>-</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/nav'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocNav",
        data() {
            return {
                selected1: 'home',
                selected2: 'home',
                selected3: 'home',
                selected4: 'home',
                sample
            }
        },
        components: {
            DocPost
        },
        methods: {
            onUpdateSelected(newSelected) {
                if (newSelected === 'home') {
                    alert('Use listener to get new selected: ' + newSelected)
                }
            }
        },
        watch: {
            selected4(newSelected) {
                if (newSelected === 'team') {
                    alert('Use watch feature to get new selected: ' + newSelected)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.sample {
    margin-bottom: 20px;
}
</style>