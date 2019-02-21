export default {
basicHtml: `
<ow-uploader
    name="file"
    action="https://upload-node-server.herokuapp.com/upload"
    method="POST"
    :getPreviewUrl="getPreviewUrl"
    :file-list.sync="fileList">
    <ow-button icon-name="upload" icon-position="right">Upload</ow-button>
</ow-uploader>`,
basicJs: `
data() {
    return {
        fileList: [
            {name: 'README.md', size: 231, type: 'text/markdown', status: 'UPLOADING'},
            {name: 'index.html', size: 333, type: 'text/html', status: 'UPLOADED'},
            {name: 'styles.css', size: 876, type: 'text/css', status: 'FAIL'},
        ],
    }
},
methods: {
    getPreviewUrl(response) {
        let responseJson = JSON.parse(response)
        return "https://upload-node-server.herokuapp.com/preview/" + responseJson.filename
    }
}`,
maxSizeHtml: `
<ow-uploader
    name="file"
    action="https://upload-node-server.herokuapp.com/upload"
    method="POST"
    :getPreviewUrl="getPreviewUrl"
    :max-size="1024*2014"
    :file-list.sync="fileList">
    <ow-button icon-name="upload" icon-position="right">Upload</ow-button>
</ow-uploader>`,
maxSizeJs: `
data() {
    return {
        fileList: [
            {name: 'README.md', size: 231, type: 'text/markdown', status: 'UPLOADING'},
        ]
    }
},
methods: {
    getPreviewUrl(response) {
        let responseJson = JSON.parse(response)
        return "https://upload-node-server.herokuapp.com/preview/" + responseJson.filename
    }
}`,
multipleFileHtml: `
<ow-uploader
    name="file"
    action="https://upload-node-server.herokuapp.com/upload"
    method="POST"
    :getPreviewUrl="getPreviewUrl"
    :multiple="true"
    :file-list.sync="fileList2">
    <ow-button icon-name="upload" icon-position="right">Upload</ow-button>
</ow-uploader>`,
multipleFileJs: `
data() {
    return {
        fileList: [
            {name: 'index.html', size: 333, type: 'text/html', status: 'UPLOADED'},
        ]
    }
},
methods: {
    getPreviewUrl(response) {
        let responseJson = JSON.parse(response)
        return "https://upload-node-server.herokuapp.com/preview/" + responseJson.filename
    }
}`,
fileTypeHtml: `
<ow-uploader
    name="file"
    action="https://upload-node-server.herokuapp.com/upload"
    method="POST"
    :getPreviewUrl="getPreviewUrl"
    :multiple="true"
    :file-list.sync="fileList3">
    <ow-button icon-name="upload" icon-position="right">Upload</ow-button>
</ow-uploader>`,
fileTypeJs: `
data() {
    return {
        fileList: [
            {name: 'styles.css', size: 876, type: 'text/css', status: 'FAIL'},
        ]
    }
},
methods: {
    getPreviewUrl(response) {
        let responseJson = JSON.parse(response)
        return "https://upload-node-server.herokuapp.com/preview/" + responseJson.filename
    }
}`,
}