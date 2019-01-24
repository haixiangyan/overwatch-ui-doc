<template>
    <div class="doc-start">
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
                            h2: 'Start',
                            desc: 'Building...'
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
