export default {
basicHtml: `
<ow-collapse-group :selected.sync="selectedCollapse">
    <ow-collapse title="Title1" name="1"> <div>Content 1</div> </ow-collapse>
    <ow-collapse title="Title2" name="2"> <div>Content 2</div> </ow-collapse>
    <ow-collapse title="Title3" name="3"> <div>Content 3</div> </ow-collapse>
</ow-collapse-group>
<span>You select: {{selectedCollapse}}</span>`,
basicJs: `
data() {
    return {
        sample,
        selectedCollapse: ['1', '2']
    }
}`,
    single: `
<ow-collapse-group :selected.sync="selectedCollapse" :multiSelect="false">
    <ow-collapse title="Title1" name="1"> <div>Content 1</div> </ow-collapse>
    <ow-collapse title="Title2" name="2"> <div>Content 2</div> </ow-collapse>
    <ow-collapse title="Title3" name="3"> <div>Content 3</div> </ow-collapse>
</ow-collapse-group>
<span>You are selecting: {{selectedCollapse}}</span>`
}