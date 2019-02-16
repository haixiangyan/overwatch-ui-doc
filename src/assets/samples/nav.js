export default {
basicHtml: `
<ow-nav :selected.sync="selected">
    <ow-nav-item name="home">Home</ow-nav-item>
    <ow-nav-item name="team">Team</ow-nav-item>
    <ow-nav-item name="developer">Developer</ow-nav-item>
    <ow-nav-item name="career">Career</ow-nav-item>
</ow-nav>`,
    basicJs: `
data() {
    return {
        selected: 'home'
    }
}`,
    nested: `
<ow-nav :selected.sync="selected">
    <ow-nav-item name="home">Home</ow-nav-item>
    <ow-sub-nav name="about">
        <template slot="title">About</template>
        <ow-nav-item name="team">Team</ow-nav-item>
        <ow-nav-item name="developer">Developer</ow-nav-item>
        <ow-sub-nav name="company">
            <template slot="title">Company</template>
            <ow-nav-item name="baidu">Baidu</ow-nav-item>
            <ow-sub-nav name="tencent">
                <template slot="title">Tencent</template>
                <ow-nav-item name="sports">Sports</ow-nav-item>
                <ow-nav-item name="ant">Ant</ow-nav-item>
            </ow-sub-nav>
        </ow-sub-nav>
    </ow-sub-nav>
    <ow-nav-item name="career">Career</ow-nav-item>
</ow-nav>`,
    vertical: `
<ow-nav :selected.sync="selected1" :isVertical="true" style="width: 200px">
    <ow-nav-item name="home">Home</ow-nav-item>
    <ow-sub-nav name="about">
        <template slot="title">About</template>
        <ow-nav-item name="team">Team</ow-nav-item>
        <ow-nav-item name="developer">Developer</ow-nav-item>
        <ow-sub-nav name="company">
            <template slot="title">Company</template>
            <ow-nav-item name="baidu">Baidu</ow-nav-item>
            <ow-sub-nav name="tencent">
                <template slot="title">Tencent</template>
                <ow-nav-item name="sports">Sports</ow-nav-item>
                <ow-nav-item name="ant">Ant</ow-nav-item>
            </ow-sub-nav>
        </ow-sub-nav>
    </ow-sub-nav>
    <ow-nav-item name="career">Career</ow-nav-item>
</ow-nav>`,
    newSelectedHtml: `
<ow-nav :selected.sync="selected4" @update:selected="onUpdateSelected">
    <ow-nav-item name="home">Home</ow-nav-item>
    <ow-nav-item name="team">Team</ow-nav-item>
    <ow-nav-item name="developer">Developer</ow-nav-item>
    <ow-nav-item name="career">Career</ow-nav-item>
</ow-nav>`,
    newSelectedJs: `
methods: {
    onUpdateSelected(newSelected) {
        if (newSelected === 'home') {
            alert('Use listener to get new selected: ' + newSelected)
        }
    }
},
watch: {
    selected4(newSelected) {
        if (newSelected === 'team') {
            alert('Use watch feature to get new selected: ' + newSelected)
        }
    }
}`
}