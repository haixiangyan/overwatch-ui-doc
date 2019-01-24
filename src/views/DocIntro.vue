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
                        },
                        {
                            h2: 'Demo',
                            desc: 'Click here to view the demo'
                        },
                        {
                            h2: 'Docs',
                            desc: 'Documentations (Building...)'
                        },
                        {
                            h2: 'Note',
                            desc: 'This UI library will reset some styles as followed. I strongly recommend you to add these styles to all of your projects :), because some CSS bugs can\'t be found without them.',
                            codes: `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`
                        },
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
