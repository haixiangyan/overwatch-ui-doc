<template>
    <div class="doc-hero">
        <doc-post>
            <h1>Hero</h1>
            <p>You can use this component to make your hero list!</p>
            <h2>Basic</h2>
            <div class="sample">
                <p>You are selecting <strong>{{selected}}</strong></p>
                <div>
                    <ow-hero class="hero-item" @click="onClick(hero)" :is-active="hero === selected" v-for="hero in heroes1" :hero="hero"></ow-hero>
                </div>
                <div>
                    <ow-hero class="hero-item" @click="onClick(hero)" :is-active="hero === selected" v-for="hero in heroes2" :hero="hero"></ow-hero>
                </div>
            </div>
            <p>Hero names could be: </p>
            <p><strong>{{heroes1.concat(heroes2).join(', ')}}</strong></p>
            <pre>
                <code class="html">{{sample.basic}}</code>
            </pre>

            <h2>Url</h2>
            <p>You can also use your own image by setting <code>url</code>.</p>
            <div class="sample">
                <ow-hero url="https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/icon-portrait.png"></ow-hero>
                <ow-hero url="https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/icon-portrait.png"></ow-hero>
                <ow-hero url="https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/icon-portrait.png"></ow-hero>
            </div>
            <pre>
                <code class="html">{{sample.url}}</code>
            </pre>

            <h2>Size</h2>
            <p>This component providers <strong>small</strong>, <strong>middle(default)</strong> and <strong>large</strong> sizes.</p>
            <div class="sample">
                <ow-hero hero="pharah" size="small"></ow-hero>
                <ow-hero hero="reaper" size="middle"></ow-hero>
                <ow-hero hero="doomfist" size="large"></ow-hero>
            </div>
            <pre>
                <code class="html">{{sample.size}}</code>
            </pre>

            <h2>Active</h2>
            <p>Using <code>isActive</code> to set if it's active.</p>
            <div class="sample">
                <ow-hero hero="dva" :is-active="false"></ow-hero>
                <ow-hero hero="dva" :is-active="true"></ow-hero>
            </div>
            <pre>
                <code class="html">{{sample.active}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>hero</td><td>Hero name</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>url</td><td>Url of custom image</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>size</td><td>Set size</td><td>String</td><td>"middle"</td>
                </tr>
                <tr>
                    <td>is-active</td><td>Define if it's active</td><td>Boolean</td><td>false</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/hero'
    import DocPost from '../../components/DocPost/DocPost'
    export default {
        name: "DocHero",
        data() {
            return {
                sample,
                selected: 'genji',
                heroes1: [ 'ana', 'ashe', 'baptiste', 'bastion', 'brigitte', 'dva', 'doomfist', 'genji', 'hanzo', 'junkrat', 'lucio', 'mccree', 'mei', 'mercy', 'moira'],
                heroes2:[ 'orisa', 'pharah', 'reaper', 'reinhardt', 'roadhog', 'soldier-76', 'sombra', 'symmetra', 'torbjorn', 'tracer', 'widowmaker', 'winston', 'wrecking-ball', 'zarya', 'zenyatta' ]
            }
        },
        methods: {
            onClick(hero) {
                this.selected = hero
            }
        },
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">
.doc-hero {
    .hero-item {
        margin: 8px 4px;
    }
}
</style>