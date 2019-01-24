<template>
    <div class="doc-components">
        <doc-post :doc="doc"></doc-post>
    </div>
</template>

<script>
    import DocPost from '../components/DocPost'
    export default {
        name: "DocComponents",
        data() {
            return {
                doc: {
                    sections: [
                        {
                            h1: 'Overwatch UI',
                            h2: 'Components',
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