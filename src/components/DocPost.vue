<template>
    <div class="doc-post">
        <section v-for="section in doc.sections">
            <h1 v-if="section.h1">{{section.h1}}</h1>
            <h2 v-if="section.h2">{{section.h2}}</h2>
            <div v-if="section.desc">{{section.desc}}</div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "DocPost",
        props: {
            doc: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-post {
    padding: 10px 20px;
    margin: 1vh 3vw 1vh 0;
    height: 98vh;
    overflow: auto;
    background: rgba(245, 237, 221, 0.95);
    color: #2f3e4e;
    
    section {
        h1, h2 {
            padding-bottom: .3em;
            margin-bottom: 16px;
        }
        h1 {
            font-size: 2em;
        }
    }
}
</style>