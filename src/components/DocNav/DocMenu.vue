<template>
    <ul class="doc-menu">
        <li v-for="menuItem in menu.mainItems" :key="menuItem.title" class="main-item-wrapper">
            <router-link class="main-item" :to="menuItem.url">
                <span class="title">{{menuItem.title}}</span>
                <ow-badge v-if="menuItem.isNew" title="NEW"></ow-badge>
            </router-link>
        </li>
        <li v-for="menuItem in menu.subItems" :key="menuItem.title" class="sub-item-wrapper">
            <a class="sub-item" v-if="menuItem.url.startsWith('http')" :href="menuItem.url">
                <span class="title">{{menuItem.title}}</span>
            </a>
            <router-link v-else class="sub-item" :to="menuItem.url">
                <span class="title">{{menuItem.title}}</span>
                <ow-badge v-if="menuItem.isNew" :is-dot="true"></ow-badge>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "DocMenu",
        data() {
            return {
                menu: {
                    mainItems: [
                        {title: 'INTRO', url: '/'},
                        {title: 'START', url: '/start'},
                        {title: 'TRAINING', url: '/train'},
                        {title: 'COMPONENTS', url: '/components', isNew: true},
                    ],
                    subItems: [
                        {title: 'GITHUB', url: 'https://github.com/Haixiang6123/overwatch-ui'},
                        {title: 'SOCIAL', url: '/social'},
                        {title: 'HIGHLIGHTS', url: '/highlights', isNew: true},
                    ]
                }
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
                transition: all .3s;
                .title {
                    font-family: overwatch-italic, serif;
                    font-size: 4em;
                }
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
                transition: all .3s;
                .title {
                    color: #E2F2FF;
                    font-family: overwatch, serif;
                    font-size: 1.5em;
                }
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