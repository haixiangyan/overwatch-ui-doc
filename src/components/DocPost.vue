<template>
    <div class="doc-post">
        <div class="author">
            <img @click="jumpToGithub" class="add-button" src="../assets/images/add-friend.png" alt="Add">
            <span class="author-info-wrapper">
                <img class="avatar" src="../assets/images/avatar.png" alt="Avatar">
                <span class="name">HAIXIANG</span>
            </span>
        </div>
        <section data-doc class="markdown-body" v-html="doc">
        </section>
    </div>
</template>

<script>
    import hljs from 'highlight.js'
    import 'highlight.js/styles/github.css'
    import '../assets/styles/markdown.css'

    export default {
        name: "DocPost",
        props: {
            doc: {
                type: String,
                required: true
            }
        },
        mounted() {
            // hljs.highlightBlock(this.$refs.codeblock[0])
        },
        methods: {
            jumpToGithub() {
                window.location.href = 'https://github.com/Haixiang6123'
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-post {
    position: relative;
    padding: 10px 20px;
    margin: 1vh 3vw 1vh 0;
    height: 98vh;
    overflow: auto;
    background: rgba(252, 246, 229, 0.95);

    .author {
        display: flex;
        position: fixed;
        top: 1vh;
        right: 3vw;

        .add-button {
            height: 50px;
            width: 50px;
            margin-right: 5px;
            transition: all .3s;
            &:hover {
                box-shadow: 0px 0px 3px 3px #fff;
            }
            &:active {
                transform: scale(0.9);
            }
        }

        &-info-wrapper {
            display: flex;
            align-items: center;
            height: 100%;
            color: white;
            background: rgba(0, 0, 0, 0.5);
            border-left: 5px solid #b1fb23;
            .name {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 50px 0 10px;
            }
            .avatar {
                height: 50px;
                width: 50px;
            }
        }
    }

    .markdown-body[data-doc] {
        > h1, h2, h3 {
            border-color: #2f3e4e;
        }
    }
}
</style>