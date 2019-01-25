<template>
    <div class="doc-train">
        <doc-post>
            <h1>Training</h1>

            <p>Before using components in your project, you can take a quick look in the playground below.</p>
            <iframe
                src="https://codesandbox.io/embed/r093528ny4"
                style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin">
            </iframe>
        </doc-post>
    </div>
</template>

<script>
    import DocPost from '../components/DocPost'
    export default {
        name: "DocTrain",
        components: {
            DocPost
        }
    }
</script>

<style scoped lang="scss">

</style>