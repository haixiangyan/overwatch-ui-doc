<template>
    <div class="doc-nav-wrapper">
        <router-link to="/">
            <img class="nav-logo" src="../../assets/images/logo.png" alt="Logo">
        </router-link>

        <transition name="slide-quick-left">
            <doc-menu class="doc-menu" v-if="!isShowSubMenu"></doc-menu>
        </transition>
        <transition name="slide-quick-right">
            <doc-sub-menu class="doc-sub-menu" v-if="isShowSubMenu"></doc-sub-menu>
        </transition>

        <doc-board class="doc-board"></doc-board>

        <!--Back button-->
        <ow-button
            v-if="this.isShowSubMenu"
            class="back-button"
            type="danger"
            @click="$router.push({ path: '/' })">
            BACK
        </ow-button>
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
        mounted() {
            if (/components*/.test(this.$route.path)) {
                this.isShowSubMenu = true
            }
        },
        watch: {
            $route(route) {
                this.isShowSubMenu = /components*/.test(route.path);
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

    .doc-menu, .doc-sub-menu {
        position: absolute;
        left: 3vw;
        top: 12vh;
        width: 25vw;
    }

    .doc-board {
        position: absolute;
        width: 25vw;
        bottom: 4vh;
    }

    .back-button {
        position: fixed;
        left: 24vw;
        bottom: 20vh;
        z-index: 1;
    }
}
</style>