<template>
    <div class="doc-post">
        <div class="author">
            <img @click="jumpToGithub" class="add-button" src="../assets/images/add-friend.png" alt="Add">
            <span class="author-info-wrapper">
                <img class="avatar" src="../assets/images/avatar.png" alt="Avatar">
                <span class="name">HAIXIANG</span>
            </span>
        </div>
        <section v-html="doc">
        </section>
    </div>
</template>

<script>
    import hljs from 'highlight.js'
    import 'highlight.js/styles/github.css'

    export default {
        name: "DocPost",
        props: {
            doc: {
                type: String,
                required: true
            }
        },
        mounted() {
            hljs.highlightBlock(this.$refs.codeblock[0])
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
    background: rgba(245, 237, 221, 0.95);
    color: #2f3e4e;

    .author {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;

        .add-button {
            height: 25px;
            width: 25px;
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
                height: 25px;
                width: 25px;
            }
        }
    }
    
    section {
        h1, h2 {
            padding-bottom: .3em;
            margin-bottom: 16px;
        }
        h1 {
            font-size: 2em;
        }
        p {
            margin-bottom: 16px;
        }
        pre {
            padding: 16px;
            background: rgba(248, 256, 255, 0.8);
            border-radius: $--border-radius-base;
        }
    }
}
</style>