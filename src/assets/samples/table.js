export default {
basicHtml: `
<ow-table :columns="columns" :source="source" :selected.sync="selected"></ow-table>`,
    basicJs: `
data() {
    return {
        columns: [
            {label: 'Name', field: 'name', width: 300},
            {label: 'Score', field: 'score'}
        ],
        source: [
            {id: 1, name: 'Jack', score: 100},
            {id: 2, name: 'Marry', score: 200},
            {id: 3, name: 'Xiaoming', score: 300},
            {id: 4, name: 'Ani', score: 400},
        ],
        selected: []
    }
}`,
    sortHtml: `
<ow-table
    :columns="columns"
    :source="source"
    :selected.sync="selected"
    :sort-rules.sync="sortRules"
    @update:sortRules="sortScore">
</ow-table>`,
sortJs: `
data() {
    return {
        columns: [
            {label: 'Name', field: 'name', width: 300},
            {label: 'Score', field: 'score'}
        ],
        source: [
            {id: 1, name: 'Jack', score: 100},
            {id: 2, name: 'Marry', score: 200},
            {id: 3, name: 'Xiaoming', score: 300},
            {id: 4, name: 'Ani', score: 400},
        ],
        sortRules: {
            name: 'asc',
            score: 'desc'
        },
        selected: []
    }
},
methods: {
    sortScore(newOrder) {
        this.source = this.source.sort((a, b) => {
            if (newOrder.score === 'asc') {
                return a.score - b.score
            }
            if (newOrder.score === 'desc') {
                return b.score - a.score
            }
        })
    },
}`,
    selectableHtml: `
<ow-table
    :columns="columns"
    :source="source"
    :selected.sync="selected"
    :selectable="true">
</ow-table>`,
    loadingHtml: `
<ow-table
    :columns="columns"
    :source="source"
    :loading="loading"
    :selected.sync="selected">
</ow-table>
<ow-button @click="loading = !loading">Toggle Loading</ow-button>`,
loadingJs: `
data() {
    return {
        loading: true
    }
}`,
actionHtml: `
<ow-table
    :columns="columns"
    :source="source"
    :selected.sync="selected">
    <template slot-scope="row">
        <ow-button @click="editItem(row.item)">Edit</ow-button>
        <ow-button @click="deleteItem(row.item)" type="danger">Delete</ow-button>
    </template>
</ow-table>`,
actionJs: `
methods: {
    editItem(item) {
        alert('Edit: ' + item.id)
    },
    deleteItem(item) {
        alert('Delete: ' + item.id)
    }
}`,
    expandableHtml: `
<ow-table
    :columns="columns"
    :source="source"
    expand-field="description"
    :selected.sync="selected">
</ow-table>`,
expandableJs: `
data() {
    return {
        source: [
            {id: 1, name: 'Jack', score: 100, description: 'Good Job'},
            {id: 2, name: 'Marry', score: 200, description: 'Nice Job'},
            {id: 3, name: 'Xiaoming', score: 300},
            {id: 4, name: 'Ani', score: 400},
        ]
    }
}`
}