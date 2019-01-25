<template>
    <div class="doc-nav-wrapper">
        <img class="nav-logo" src="../../assets/images/logo.png" alt="Logo">

        <doc-menu v-if="!isShowSubMenu"></doc-menu>
        <doc-sub-menu v-else></doc-sub-menu>

        <doc-board class="doc-board"></doc-board>
    </div>
</template>

<script>
    import DocMenu from './DocMenu'
    import DocSubMenu from './DocSubMenu'
    import DocBoard from './DocBoard'

    export default {
        name: "DocNav",
        data() {
            return {
                isShowSubMenu: false
            }
        },
        watch: {
            $route(route) {
                console.log('jjjjj', route)
                this.isShowSubMenu = route.name === 'components';
            }
        },
        components: {
            DocMenu,
            DocSubMenu,
            DocBoard
        }
    }
</script>

<style scoped lang="scss">
.doc-nav-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 28vw;
    height: 100vh;
    background: transparent;
    padding-left: 3vw;

    .nav-logo {
        margin-top: 2vh;
        width: 25vw;
    }

    .doc-board {
        position: absolute;
        width: 25vw;
        bottom: 4vh;
    }
}
</style>