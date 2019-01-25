<template>
    <ul class="doc-menu">
        <li v-for="menuItem in menu.mainItems" :key="menuItem.title" class="main-item-wrapper">
            <router-link class="main-item" :to="menuItem.url">{{menuItem.title}}</router-link>
        </li>
        <li v-for="menuItem in menu.subItems" :key="menuItem.title" class="sub-item-wrapper">
            <a class="sub-item" v-if="menuItem.url.startsWith('http')" :href="menuItem.url">{{menuItem.title}}</a>
            <router-link v-else class="sub-item" :to="menuItem.url">{{menuItem.title}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "DocMenu",
        props: {
            isShowSubMenu: {
                type: Boolean
            }
        },
        data() {
            return {
                menu: {
                    mainItems: [
                        {title: 'INTRO', url: '/'},
                        {title: 'START', url: '/start'},
                        {title: 'TRAINING', url: '/train'},
                        {title: 'COMPONENTS', url: '/components'},
                    ],
                    subItems: [
                        {title: 'GITHUB', url: 'https://github.com/Haixiang6123/overwatch-ui'},
                        {title: 'SOCIAL', url: 'https://github.com/Haixiang6123'},
                        {title: 'HIGHLIGHTS', url: 'https://www.bilibili.com/video/av13119712?from=search&seid=15921253199209780039'},
                    ]
                }
            }
        },
        methods: {
            showSubMenu() {
                this.$emit('update:isShowSubMenu', true)
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-menu {
    margin-top: 4vh;
    width: 100%;
    > li {
        display: flex;
        margin: auto 0;
        padding-top: 10px;
        &.main-item-wrapper {
            .main-item {
                color: $--color-white;
                font-size: 4em;
                font-family: overwatch-italic, serif;
                transition: all .3s;
            }

            &:hover {
                .main-item {
                    padding-left: 50px;
                    transform: scale(1.2);
                }
            }
        }
        &.sub-item-wrapper {
            .sub-item {
                color: #E2F2FF;
                font-family: overwatch, serif;
                font-size: 1.5em;
                transition: all .3s;
            }
            &:hover {
                .sub-item {
                    transform: scale(1.2);
                }
            }
        }
    }
}
</style>