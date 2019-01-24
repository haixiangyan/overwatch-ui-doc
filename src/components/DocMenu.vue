<template>
    <ul class="doc-menu">
        <li v-for="menuItem in menu.mainItems" :key="menuItem.title" class="main-item-wrapper">
            <router-link class="main-item" :to="menuItem.url">{{menuItem.title}}</router-link>
        </li>
        <li v-for="menuItem in menu.subItems" :key="menuItem.title" class="sub-item-wrapper">
            <router-link class="sub-item" :to="menuItem.url">{{menuItem.title}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "DocMenu",
        props: {
            menu: { type: Object }
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