<template>
    <div class="doc-nav-wrapper">
        <img class="nav-logo" src="../assets/images/logo.png" alt="Logo">
        <ul class="items">
            <li class="main-item-wrapper">
                <router-link class="main-item" to="/">INTRO</router-link>
            </li>
            <li class="main-item-wrapper">
                <router-link class="main-item" to="/">START</router-link>
            </li>
            <li class="main-item-wrapper">
                <router-link class="main-item" to="/">COMPONENTS</router-link>
            </li>
            <li class="main-item-wrapper">
                <router-link class="main-item" to="/">TRAINING</router-link>
            </li>
            <li class="sub-item-wrapper">
                <router-link class="sub-item" to="/">GITHUB</router-link>
            </li>
            <li class="sub-item-wrapper">
                <router-link class="sub-item" to="/">SOCIAL</router-link>
            </li>
            <li class="sub-item-wrapper">
                <router-link class="sub-item" to="/">HIGHLIGHTS</router-link>
            </li>
        </ul>

        <doc-board class="doc-board"></doc-board>
    </div>
</template>

<script>
    import DocBoard from './DocBoard'
    export default {
        name: "DocNav",
        components: {
            DocBoard
        }
    }
</script>

<style scoped lang="scss">
.doc-nav-wrapper {
    width: 500px;
    height: 100vh;
    background: transparent;
    padding-left: 50px;

    .nav-logo {
        margin-top: 4vh;
        width: 90%;
    }

    .items {
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

    .doc-board {
        width: 80%;
        margin-top: 8vh;
    }
}
</style>