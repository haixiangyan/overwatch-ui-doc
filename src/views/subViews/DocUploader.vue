<template>
    <div class="doc-uploader">
        <doc-post>
            <h1>Uploader</h1>
            <p>This component allows you to upload multiple files or images.</p>

            <!--Basic-->
            <h2>Basic</h2>
            <div class="sample">
                <ow-uploader
                    name="file"
                    action="https://upload-node-server.herokuapp.com/upload"
                    method="POST"
                    :getPreviewUrl="getPreviewUrl"
                    :file-list.sync="fileList">
                    <ow-button icon-name="upload" icon-position="right">Upload</ow-button>
                </ow-uploader>
            </div>
            <pre>
                <code class="html">{{sample.basicHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.basicJs}}</code>
            </pre>

            <!--File Size-->
            <h2>File Size</h2>
            <p>You define max size for each file. This example defines 2Mb as max size.</p>
            <div class="sample">
                <ow-uploader
                    name="file"
                    action="https://upload-node-server.herokuapp.com/upload"
                    method="POST"
                    :getPreviewUrl="getPreviewUrl"
                    :max-size="1024*2014"
                    :file-list.sync="fileList1">
                    <ow-button icon-name="upload" icon-position="right">Upload</ow-button>
                </ow-uploader>
            </div>
            <pre>
                <code class="html">{{sample.maxSizeHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.maxSizeJs}}</code>
            </pre>

            <!--Multiple Files-->
            <h2>Upload Multiple Files</h2>
            <p>You can upload multiple files at the same time.</p>
            <div class="sample">
                <ow-uploader
                    name="file"
                    action="https://upload-node-server.herokuapp.com/upload"
                    method="POST"
                    :getPreviewUrl="getPreviewUrl"
                    :multiple="true"
                    :file-list.sync="fileList2">
                    <ow-button icon-name="upload" icon-position="right">Upload</ow-button>
                </ow-uploader>
            </div>
            <pre>
                <code class="html">{{sample.multipleFileHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.multipleFileJs}}</code>
            </pre>

            <!--File Type-->
            <h2>File Type</h2>
            <p>Sometime you may want users to upload specific files, then you can use <code>accept</code> props to limit file type.</p>
            <div class="sample">
                <ow-uploader
                    name="file"
                    action="https://upload-node-server.herokuapp.com/upload"
                    method="POST"
                    :getPreviewUrl="getPreviewUrl"
                    :multiple="true"
                    :file-list.sync="fileList3">
                    <ow-button icon-name="upload" icon-position="right">Upload</ow-button>
                </ow-uploader>
            </div>
            <pre>
                <code class="html">{{sample.fileTypeHtml}}</code>
            </pre>
            <pre>
                <code class="js">{{sample.fileTypeJs}}</code>
            </pre>

            <!--Properties-->
            <h2>Properties</h2>
            <table>
                <thead>
                <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
                </thead>
                <tbody>
                <tr>
                    <td>name</td><td>Upload input field name</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>method</td><td>Upload request method</td><td>String</td><td>"POST"</td>
                </tr>
                <tr>
                    <td>action</td><td>Upload request url</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>file-list</td><td>List of files</td><td>Array</td><td>[]</td>
                </tr>
                <tr>
                    <td>max-size</td><td>Max size for each file</td><td>Number</td><td>-</td>
                </tr>
                <tr>
                    <td>accept</td><td>Upload file type</td><td>String</td><td>-</td>
                </tr>
                <tr>
                    <td>multiple</td><td>If upload multiple files at the same time</td><td>Boolean</td><td>false</td>
                </tr>
                <tr>
                    <td>get-preview-url</td><td>Function to get preview url (Image only)</td><td>Function</td><td>-</td>
                </tr>
                <tr>
                    <td>on-upload-error</td><td>Callback when there is an upload error</td><td>Function</td><td>() => {}</td>
                </tr>
                </tbody>
            </table>
        </doc-post>
    </div>
</template>

<script>
    import DocPost from '../../components/DocPost/DocPost'
    import sample from '../../assets/samples/uploader'
    export default {
        name: "DocUploader",
        data() {
            return {
                sample,
                fileList: [
                    {name: 'README.md', size: 231, type: 'text/markdown', status: 'UPLOADING'},
                    {name: 'index.html', size: 333, type: 'text/html', status: 'UPLOADED'},
                    {name: 'styles.css', size: 876, type: 'text/css', status: 'FAIL'},
                ],
                fileList1: [
                    {name: 'README.md', size: 231, type: 'text/markdown', status: 'UPLOADING'},
                ],
                fileList2: [
                    {name: 'index.html', size: 333, type: 'text/html', status: 'UPLOADED'},
                ],
                fileList3: [
                    {name: 'styles.css', size: 876, type: 'text/css', status: 'FAIL'},
                ],
            }
        },
        components: {
            DocPost
        },
        methods: {
            getPreviewUrl(response) {
                let responseJson = JSON.parse(response)
                return `https://upload-node-server.herokuapp.com/preview/${responseJson.filename}`
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-post {
    .sample {
    }
}
</style>