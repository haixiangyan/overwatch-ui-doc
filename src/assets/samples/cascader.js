export default {
basicHtml: `
<ow-cascader
    :source.sync="source"
    :selected.sync="selected"
    placeholder="Click to Select">
</ow-cascader>`,
basicJs: `
data() {
    return {
        selected: [],
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
    }`,
loadDataHtml: `
<ow-cascader
    :source.sync="source"
    :selected.sync="selected"
    :on-click-item="loadData"
    placeholder="Click to Select">
</ow-cascader>`,
loadDataJs: `
created() {
    ajax(0).then((lastSelectedItem) => {
        this.source = lastSelectedItem.map(item => {
            item.children = item.children || []
            return item
        })
    })
},
methods: {
    loadData(clickedItem, updateSource) {
        ajax(clickedItem.id).then(updatedChildren => {
            updateSource(updatedChildren)
        })
    }
}`
}