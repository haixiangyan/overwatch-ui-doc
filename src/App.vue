<template>
    <div id="app">
        <!--Background-->
        <div class="background"></div>
        <ow-layout>
            <!--Left hand side nav-->
            <ow-sider class="app-sider">
                <doc-nav class="doc-nav"></doc-nav>
            </ow-sider>
            <!--Right hand side documents-->
            <ow-layout class="app-content-wrapper">
                <ow-content>
                    <router-view></router-view>
                </ow-content>
                <ow-footer></ow-footer>
            </ow-layout>
        </ow-layout>
        <!--Modal-->
        <ow-modal :is-open.sync="isOpenModal">
            <div class="app-modal">
                <div>
                    <img class="app-modal-img" src="https://i.loli.net/2019/03/10/5c84ae1fe78fc.jpg" alt="mei">
                </div>
                <div class="app-modal-desc">The world needs more heroes and developers like you!</div>
            </div>
            <template slot="footer">
                <ow-button type="warning" @click="isOpenModal = false">GOT IT</ow-button>
            </template>
        </ow-modal>
    </div>
</template>

<script>
    import DB from './db/index'
    import DocNav from './components/DocNav/DocNav'
    export default {
        name: 'App',
        created() {
            DB.init()
        },
        data() {
            return {
                isOpenModal: false
            }
        },
        components: {
            DocNav
        },
        mounted() {
            const isVisited = Boolean(localStorage.getItem('isVisited'))
            if (isVisited) {
                this.isOpenModal = false
            }
            else {
                this.isOpenModal = true
                localStorage.setItem('isVisited', 'true')
            }
        }
    }
</script>

<style lang="scss">
    p {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
    #app {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        .background {
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: url("./assets/images/bg.jpg") no-repeat center;
            background-size: cover;
        }
        .app-sider {
            display: none;
            @include pc {
                display: block;
            }
            @include tablet {
                display: block;
            }
        }
        .app-content-wrapper {
            width: 100%;
        }
        .app-modal {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: -12px;
            margin-top: -28px;
            &-img {
                display: inline-block;
                vertical-align: top;
            }
            &-desc {
                @media (max-width:900px) {
                    display: none;
                }
                position: absolute;
                top: 50%;
                left: 10%;
                right: 0;
                font-size: 3em;
                width: 50%;
                transform: translateY(-50%);
            }
        }
        .sample {
            margin-bottom: 20px;
        }
    }
</style>
