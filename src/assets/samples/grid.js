export default {
basic: `
<ow-row class="row">
    <ow-col :pc="{span: 6}">
        <div class="col-item col-item-primary"></div>
    </ow-col>
    <ow-col :pc="{span: 6}">
        <div class="col-item col-item-warning"></div>
    </ow-col>
    <ow-col :pc="{span: 6}">
        <div class="col-item col-item-primary"></div>
    </ow-col>
    <ow-col :pc="{span: 6}">
        <div class="col-item col-item-warning"></div>
    </ow-col>
</ow-row>
`,
withGutter: `
<ow-row :gutter="10" class="row">
    <ow-col :pc="{span: 6}">
        <div class="col-item col-item-primary"></div>
    </ow-col>
    <ow-col :pc="{span: 6}">
        <div class="col-item col-item-warning"></div>
    </ow-col>
    <ow-col :pc="{span: 6}">
        <div class="col-item col-item-primary"></div>
    </ow-col>
    <ow-col :pc="{span: 6}">
        <div class="col-item col-item-warning"></div>
    </ow-col>
</ow-row>`,
withSpanAndOffset: `
<ow-row class="row">
    <ow-col :pc="{span: 1, offset: 2}">
        <div class="col-item col-item-primary"></div>
    </ow-col>
    <ow-col :pc="{span: 3, offset: 4}">
        <div class="col-item col-item-warning"></div>
    </ow-col>
    <ow-col :pc="{span: 5, offset: 6}">
        <div class="col-item col-item-primary"></div>
    </ow-col>
</ow-row>`
}