var fs = require('fs')
var path = require('path')
var marked = require('marked')

// Paths
var mdDocsPath = '../docs'
var jsDocsPath = '../src/assets/docs'

var mdDocs = fs.readdirSync(mdDocsPath)

var template = `
export default {
    content: \`{{msg}}\`
}`

mdDocs.forEach((mdDoc) => {
    var mdText = fs.readFileSync('../docs/' + mdDoc, 'utf-8')

    var htmlText = marked(mdText)

    var jsText = template.replace('{{msg}}', htmlText)

    fs.writeFileSync(path.join(jsDocsPath, mdDoc.replace('.md', '.js')), jsText, 'utf8')
})
