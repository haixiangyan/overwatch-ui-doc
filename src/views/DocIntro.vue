<template>
    <div class="doc-intro">
        <doc-post :doc="doc"></doc-post>
    </div>
</template>

<script>
    import introDocMd from '../assets/docs/OwButton'
    import DocPost from '../components/DocPost'

    export default {
        name: 'DocIntro',
        data() {
            return {
                doc: introDocMd.content
            }
        },
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">

</style>
