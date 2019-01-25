export default {
basic: `
<ow-layout class="layout">
    <ow-header class="header">Header</ow-header>
    <ow-content class="content">Content</ow-content>
    <ow-footer class="footer">Footer</ow-footer>
</ow-layout>`,
outerSider: `
<ow-layout>
    <ow-sider class="sider">Sider</ow-sider>
    <ow-layout class="layout">
        <ow-header class="header">Header</ow-header>
        <ow-content class="content">Content</ow-content>
        <ow-footer class="footer">Footer</ow-footer>
    </ow-layout>
</ow-layout>
`,
innerSider: `
<ow-layout class="layout">
    <ow-header class="header">Header</ow-header>
    <ow-layout>
        <ow-sider class="sider">Sider</ow-sider>
        <ow-content class="content">Content</ow-content>
    </ow-layout>
    <ow-footer class="footer">Footer</ow-footer>
</ow-layout>
`,
toggle: `
<ow-layout class="layout">
    <ow-header class="header">Header</ow-header>
    <ow-layout>
        <ow-sider :visible="isVisible" class="sider">Sider</ow-sider>
        <ow-content class="content">
            Content
            <ow-button @click="isVisible = !isVisible">Toggle Sider</ow-button>
        </ow-content>
    </ow-layout>
    <ow-footer class="footer">Footer</ow-footer>
</ow-layout>`
}