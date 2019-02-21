<template>
    <ul class="doc-sub-menu">
        <li class="types" v-for="menuItem in subMenu" :key="menuItem.type">
            <p class="main-item-wrapper">
                <span class="main-item">{{menuItem.type}}</span>
            </p>
            <ul class="components">
                <li class="sub-item-wrapper" v-for="link in menuItem.urls" :key="link.title">
                    <router-link class="sub-item" :to="link.url">{{link.title}}</router-link>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "DocSubMenu",
        data() {
            return {
                subMenu: [
                    {
                        type: 'LAYOUT',
                        urls: [
                            {title: 'Layout', url: '/components/layout'},
                            {title: 'Grid', url: '/components/grid'},
                            {title: 'Design', url: '/components/design'},
                            {title: 'Sticky', url: '/components/sticky'},
                        ],
                    },
                    {
                        type: 'NAVIGATION',
                        urls: [
                            {title: 'Nav', url: '/components/nav'},
                            {title: 'Tabs', url: '/components/tabs'},
                            {title: 'Carousel', url: '/components/carousel'},
                        ],
                    },
                    {
                        type: 'BASIC',
                        urls: [
                            {title: 'Button', url: '/components/button'},
                            {title: 'Icon', url: '/components/icon'},
                        ],
                    },
                    {
                        type: 'DATA',
                        urls: [
                            {title: 'Table', url: '/components/table'},
                            {title: 'Pager', url: '/components/pager'},
                        ],
                    },
                    {
                        type: 'FORM',
                        urls: [
                            {title: 'Input', url: '/components/input'},
                            {title: 'Validator', url: '/components/validator'},
                            {title: 'Cascader', url: '/components/cascader'},
                            {title: 'Collapse', url: '/components/collapse'},
                            {title: 'Uploader', url: '/components/uploader'}
                        ],
                    },
                    {
                        type: 'MESSAGE',
                        urls: [
                            {title: 'Alert', url: '/components/alert'},
                            {title: 'Popover', url: '/components/popover'},
                        ],
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-sub-menu {
    overflow: auto;
    height: 75vh;
    box-shadow: 0px 20px 20px -20px rgba(255,255,255,0.75);
    /*Chrome*/
    &::-webkit-scrollbar {
        width: 0 !important;
    }
    /*IE 10+*/
    -ms-overflow-style: none;
    /*Firefox*/
    overflow: -moz-scrollbars-none;

    .types {
        margin-bottom: 20px;
        .main-item-wrapper {
            .main-item {
                color: $--color-white;
                font-size: 3em;
                font-family: overwatch-italic, serif;
                transition: all .3s;
            }
        }
        .components {
            .sub-item-wrapper {
                display: flex;
                .sub-item {
                    color: #E2F2FF;
                    font-family: overwatch, serif;
                    font-size: 1.5em;
                    transition: all .3s;
                }
                &:hover {
                    .sub-item {
                        transform: scale(1.3);
                        padding-left: 15px;
                    }
                }
            }
        }
    }
}
</style>