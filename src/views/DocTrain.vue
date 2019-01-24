<template>
    <div class="doc-train">
        <doc-post :doc="doc"></doc-post>
    </div>
</template>

<script>
    import DocPost from '../components/DocPost'
    export default {
        name: "DocTrain",
        data() {
            return {
                doc: {
                    sections: [
                        {
                            h1: 'Overwatch UI',
                            h2: 'Train',
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