<template>
    <div class="doc-cascader">
        <doc-post>
            <h1>Cascader</h1>
            <h2>Basic</h2>
            <p>You can use Cascader component for displaying different level data.</p>
            <div class="samples">
                <ow-cascader
                    :source.sync="source"
                    :selected.sync="selected"
                    placeholder="Click to Select">
                </ow-cascader>
                <p> You are selecting: {{selected.map(item => item.name).join('/')}} </p>
            </div>
            <p>Here's template codes.</p>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <p>Then define the <code>source</code> and <code>selected</code> in <code>data()</code> function.</p>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <h2>Load Data from Server</h2>
            <p>You can bind a listener to fetch data when clicking each item.</p>
            <div class="sample">
                <ow-cascader
                    :source.sync="source2"
                    :selected.sync="selected2"
                    :on-click-item="loadData"
                    placeholder="Click to Select">
                </ow-cascader>
                <p> You are selecting: {{selected2.map(item => item.name).join('/')}} </p>
            </div>
            <p>Pass a function as listener for item click event.</p>
            <pre>
                <code class="html">{{sample.loadDataHtml}}</code>
            </pre>
            <p>Define function <code>loadData</code> in <code>methods</code>.</p>
            <pre>
                <code class="js">{{sample.loadDataJs}}</code>
            </pre>
        </doc-post>
    </div>
</template>

<script>
    import district from '../../assets/samples/district'
    import sample from '../../assets/samples/cascader'
    import DocPost from '../../components/DocPost/DocPost'

    function ajax(parentId = 0) {
        return new Promise((success, fail) => {
            setTimeout(() => {
                let result = district.filter((item) => item.parentId === parentId)
                result.forEach(node => {
                    node.isLeaf = district.filter(item => item.parentId === node.id).length <= 0
                })
                success(result)
            }, 300)
        })
    }

    export default {
        name: "DocCascader",
        data() {
            return {
                sample,
                selected: [],
                selected2: [],
                source2: [],
                source: [
                    {
                        name: 'CA',
                        children: [
                            {
                                name: 'Irvine',
                                isLeaf: false,
                                children: [
                                    {name: 'UCI'},
                                    {name: 'UCSB'},
                                    {name: 'UCB'},
                                ]
                            },
                            {
                                name: 'LA',
                                isLeaf: false,
                                children: [
                                    {name: 'UCLA'},
                                    {name: 'UCB'},
                                    {name: 'UCSD'},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'NY',
                        children: [
                            {name: 'Col', isLeaf: true},
                            {
                                name: 'NY',
                                isLeaf: false,
                                children: [
                                    {name: 'NYU'},
                                    {name: 'FU'},
                                    {name: 'BC'},
                                ]
                            },
                        ]
                    }
                ]
            }
        },
        methods: {
            loadData(clickedItem, updateSource) {
                ajax(clickedItem.id).then(updatedChildren => {
                    updateSource(updatedChildren)
                })
            }
        },
        created() {
            ajax(0).then((lastSelectedItem) => {
                this.source2 = lastSelectedItem.map(item => {
                    item.children = item.children || []
                    return item
                })
            })
        },
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">

</style>