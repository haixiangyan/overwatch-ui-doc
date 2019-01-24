<template>
    <div class="doc-intro">
        <doc-post :doc="doc"></doc-post>
    </div>
</template>

<script>
    import DocPost from '../components/DocPost'

    export default {
        name: 'DocIntro',
        data() {
            return {
                doc: {
                    sections: [
                        {
                            h1: 'Overwatch UI',
                            h2: 'Intro',
                            desc: 'A UI library of game Overwatch, built with Vue.js.'
                        }
                    ]
                }
            }
        },
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">

</style>
