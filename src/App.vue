<template>
    <div id="app">
        <ow-layout>
            <!--Left hand side nav-->
            <ow-sider>
                <doc-nav></doc-nav>
            </ow-sider>
            <!--Right hand side documents-->
            <ow-layout>
                <ow-content>
                    <router-view></router-view>
                </ow-content>
                <ow-footer></ow-footer>
            </ow-layout>
        </ow-layout>
    </div>
</template>

<script>
    import DocNav from './components/DocNav'
    export default {
        name: 'App',
        components: {
            DocNav
        }
    }
</script>

<style lang="scss">
    #app {
        background: url("./assets/images/bg.jpg") center center;
    }
</style>
