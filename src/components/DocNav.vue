<template>
    <div class="doc-nav-wrapper">
        <img class="nav-logo" src="../assets/images/logo.png" alt="Logo">

        <doc-menu :menu="menu"></doc-menu>

        <doc-board class="doc-board"></doc-board>
    </div>
</template>

<script>
    import DocMenu from './DocMenu'
    import DocBoard from './DocBoard'
    export default {
        name: "DocNav",
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
        components: {
            DocMenu,
            DocBoard
        }
    }
</script>

<style scoped lang="scss">
.doc-nav-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 500px;
    height: 100vh;
    background: transparent;
    padding-left: 3vw;

    .nav-logo {
        margin-top: 4vh;
        width: 90%;
    }

    .doc-board {
        position: absolute;
        width: 80%;
        bottom: 4vh;
    }
}
</style>