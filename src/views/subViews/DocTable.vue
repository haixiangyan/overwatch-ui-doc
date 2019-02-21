<template>
    <div class="doc-table">
        <doc-post class="doc-table-post" :use-markdown="false">
            <h1>Table</h1>
            <p>It's always better to use Table to represent your data.</p>

            <h2>Basic</h2>
            <p><code>source</code>, <code>columns</code> and <code>selected</code> are required.</p>
            <div class="sample">
                <ow-table :columns="columns" :source="source" :selected.sync="selected"></ow-table>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <h2>Sorting</h2>
            <p>You can add any sorting rules for each field. By listening to the event <code>update:sortRules</code> you can define how to sort it.</p>
            <div class="sample">
                <ow-table
                    :columns="columns"
                    :source="source1"
                    :selected.sync="selected1"
                    :sort-rules.sync="sortRules"
                    @update:sortRules="sortScore">
                </ow-table>
            </div>
            <pre>
                <code class="html">{{sample.sortHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.sortJs}}</code>
            </pre>

            <!--Selection-->
            <h2>Selection</h2>
            <p>This table allows you to select one of rows.</p>
            <div class="sample">
                <ow-table
                    :columns="columns"
                    :source="source"
                    :selected.sync="selected2"
                    :selectable="true">
                </ow-table>
            </div>
            <pre>
                <code class="html">{{sample.selectableHtml}}</code>
            </pre>

            <!--Loading-->
            <h2>Loading</h2>
            <p>You can set a loading state for it.</p>
            <div class="sample">
                <ow-table
                    :columns="columns"
                    :source="source"
                    :loading="loading"
                    :selected.sync="selected3">
                </ow-table>
                <ow-button @click="loading = !loading">Toggle Loading</ow-button>
            </div>
            <pre>
                <code class="html">{{sample.loadingHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.loadingJs}}</code>
            </pre>

            <!--Action-->
            <h2>Action Cell</h2>
            <p>You may want to add some buttons in the table to modify your data.</p>
            <div class="sample">
                <ow-table
                    :columns="columns"
                    :source="source"
                    :selected.sync="selected4">
                    <template slot-scope="row">
                        <ow-button @click="editItem(row.item)">Edit</ow-button>
                        <ow-button @click="deleteItem(row.item)" type="danger">Delete</ow-button>
                    </template>
                </ow-table>
            </div>
            <pre>
                <code class="html">{{sample.actionHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.actionJs}}</code>
            </pre>

            <!--Expandable-->
            <h2>Expandable</h2>
            <p>Sometime you may want to show details of that item. You can add <code>description</code> for each item.</p>
            <div class="sample">
                <ow-table
                    :columns="columns"
                    :source="source2"
                    expand-field="description"
                    :selected.sync="selected5">
                </ow-table>
            </div>
            <pre>
                <code class="html">{{sample.expandableHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.expandableJs}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <div class="markdown-body properties">
                <table>
                    <thead>
                    <tr> <td>Property</td> <td>Description</td> <td>Type</td> <td>Default</td> </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>selected</td><td>Selected items</td><td>Array</td><td>-</td>
                    </tr>
                    <tr>
                        <td>source</td><td>Data source of this table</td><td>Array</td><td>-</td>
                    </tr>
                    <tr>
                        <td>columns</td><td>Array to represent columns</td><td>Array</td><td>-</td>
                    </tr>
                    <tr>
                        <td>strip</td><td>Strip style</td><td>Boolean</td><td>false</td>
                    </tr>
                    <tr>
                        <td>selectable</td><td>If table has checkbox</td><td>Boolean</td><td>false</td>
                    </tr>
                    <tr>
                        <td>height</td><td>Set table height</td><td>Number</td><td>-</td>
                    </tr>
                    <tr>
                        <td>sort-rules</td><td>Sorting rules for each item</td><td>Object</td><td>{}</td>
                    </tr>
                    <tr>
                        <td>is-show-index</td><td>If show index</td><td>Boolean</td><td>false</td>
                    </tr>
                    <tr>
                        <td>is-compact</td><td>If show a compact table</td><td>Boolean</td><td>false</td>
                    </tr>
                    <tr>
                        <td>expand-field</td><td>Define the field that will be shown in details</td><td>String</td><td>-</td>
                    </tr>
                    <tr>
                        <td>loading</td><td>Loading state</td><td>Boolean</td><td>false</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </doc-post>
    </div>
</template>

<script>
    import sample from '../../assets/samples/table'
    import DocPost from '../../components/DocPost/DocPost'

    export default {
        name: "DocTable",
        data() {
            return {
                sample,
                columns: [
                    {label: 'Name', field: 'name', width: 300},
                    {label: 'Score', field: 'score'}
                ],
                sortRules: {
                    name: 'asc',
                    score: 'desc'
                },
                source: [
                    {id: 1, name: 'Jack', score: 100, description: 'Good Job'},
                    {id: 2, name: 'Marry', score: 200, description: 'Nice Job'},
                    {id: 3, name: 'Xiaoming', score: 300},
                    {id: 4, name: 'Ani', score: 400},
                ],
                source1: [
                    {id: 1, name: 'Jack', score: 100, description: 'Good Job'},
                    {id: 2, name: 'Marry', score: 200, description: 'Nice Job'},
                    {id: 3, name: 'Xiaoming', score: 300},
                    {id: 4, name: 'Ani', score: 400},
                ],
                source2: [
                    {id: 1, name: 'Jack', score: 100, description: 'Good Job'},
                    {id: 2, name: 'Marry', score: 200, description: 'Nice Job'},
                    {id: 3, name: 'Xiaoming', score: 300},
                    {id: 4, name: 'Ani', score: 400},
                ],
                selected: [],
                selected1: [],
                selected2: [],
                selected3: [],
                selected4: [],
                selected5: [],
                loading: true
            }
        },
        components: {
            DocPost
        },
        methods: {
            editItem(item) {
                console.log(item)
                alert('Edit: ' + item.id)
            },
            deleteItem(item) {
                alert('Delete: ' + item.id)
            },
            sortScore(newOrder) {
                this.source1 = this.source1.sort((a, b) => {
                    if (newOrder.score === 'asc') {
                        return a.score - b.score
                    }
                    if (newOrder.score === 'desc') {
                        return b.score - a.score
                    }
                })
            },
        }
    }
</script>

<style scoped lang="scss">
.doc-table {
    .sample {
        margin-bottom: 20px;
    }

    .properties {
        th, td {
            padding: .8em 1em;
        }
    }
}
.doc-table-post {
    color: #353846;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.doc-table-post a {
    background-color: transparent;
}

.doc-table-post a:active,
.doc-table-post a:hover {
    outline-width: 0;
}

.doc-table-post h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

.doc-table-post img {
    border-style: none;
}

.doc-table-post code,
.doc-table-post kbd,
.doc-table-post pre {
    font-family: monospace, monospace;
    font-size: 1em;
}

.doc-table-post hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

.doc-table-post input {
    font: inherit;
    margin: 0;
}

.doc-table-post input {
    overflow: visible;
}

.doc-table-post [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
}

.doc-table-post * {
    box-sizing: border-box;
}

.doc-table-post input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.doc-table-post a {
    color: #0366d6;
    text-decoration: none;
}

.doc-table-post a:hover {
    text-decoration: underline;
}

.doc-table-post strong {
    font-weight: 600;
}

.doc-table-post hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #dfe2e5;
}

.doc-table-post hr::before {
    display: table;
    content: "";
}

.doc-table-post hr::after {
    display: table;
    clear: both;
    content: "";
}

.doc-table-post td,
.doc-table-post th {
    padding: 0;
}

.doc-table-post h1,
.doc-table-post h2,
.doc-table-post h3,
.doc-table-post h4,
.doc-table-post h5,
.doc-table-post h6 {
    margin-top: 0;
    margin-bottom: 0;
}

.doc-table-post h1 {
    font-size: 32px;
    font-weight: 600;
}

.doc-table-post h2 {
    font-size: 24px;
    font-weight: 600;
}

.doc-table-post h3 {
    font-size: 20px;
    font-weight: 600;
}

.doc-table-post h4 {
    font-size: 16px;
    font-weight: 600;
}

.doc-table-post h5 {
    font-size: 14px;
    font-weight: 600;
}

.doc-table-post h6 {
    font-size: 12px;
    font-weight: 600;
}

.doc-table-post p {
    margin-top: 0;
    margin-bottom: 10px;
}

.doc-table-post blockquote {
    margin: 0;
}

.doc-table-post ul,
.doc-table-post ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}

.doc-table-post ol ol,
.doc-table-post ul ol {
    list-style-type: lower-roman;
}

.doc-table-post ul ul ol,
.doc-table-post ul ol ol,
.doc-table-post ol ul ol,
.doc-table-post ol ol ol {
    list-style-type: lower-alpha;
}

.doc-table-post dd {
    margin-left: 0;
}

.doc-table-post code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 12px;
}

.doc-table-post pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 12px;
}

.doc-table-post a:not([href]) {
    color: inherit;
    text-decoration: none;
}
.doc-table-post p,
.doc-table-post blockquote,
.doc-table-post ul,
.doc-table-post ol,
.doc-table-post dl,
.doc-table-post pre {
    margin-top: 0;
    margin-bottom: 16px;
}

.doc-table-post hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
}

.doc-table-post blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
}

.doc-table-post blockquote>:first-child {
    margin-top: 0;
}

.doc-table-post blockquote>:last-child {
    margin-bottom: 0;
}

.doc-table-post kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
}

.doc-table-post h1,
.doc-table-post h2,
.doc-table-post h3,
.doc-table-post h4,
.doc-table-post h5,
.doc-table-post h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
}
.doc-table-post h1 {
    font-size: 2em;
}

.doc-table-post h2 {
    font-size: 1.5em;
}

.doc-table-post h3 {
    font-size: 1.25em;
}

.doc-table-post h4 {
    font-size: 1em;
}

.doc-table-post h5 {
    font-size: 0.875em;
}

.doc-table-post h6 {
    font-size: 0.85em;
    color: #6a737d;
}

.doc-table-post ul,
.doc-table-post ol {
    padding-left: 2em;
}

.doc-table-post ul ul,
.doc-table-post ul ol,
.doc-table-post ol ol,
.doc-table-post ol ul {
    margin-top: 0;
    margin-bottom: 0;
}

.doc-table-post li {
    word-wrap: break-word;
}

.doc-table-post li>p {
    margin-top: 16px;
}

.doc-table-post li+li {
    margin-top: 0.25em;
}

.doc-table-post dl {
    padding: 0;
}

.doc-table-post dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
}

.doc-table-post dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
}

.doc-table-post img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;
}

.doc-table-post img[align=right] {
    padding-left: 20px;
}

.doc-table-post img[align=left] {
    padding-right: 20px;
}

.doc-table-post code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
}

.doc-table-post pre {
    word-wrap: normal;
}

.doc-table-post pre>code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
}

.doc-table-post pre {
    padding: 0 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
}

.doc-table-post pre code {
    display: inline;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
}

.doc-table-post kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #d1d5da;
    border-bottom-color: #c6cbd1;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #c6cbd1;
}

.doc-table-post hr {
    border-bottom-color: #eee;
}
</style>