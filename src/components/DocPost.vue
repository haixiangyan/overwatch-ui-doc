<template>
    <div class="doc-post">
        <div class="author">
            <img @click="jumpToGithub" class="add-button" src="../assets/images/add-friend.png" alt="Add">
            <span class="author-info-wrapper">
                <img class="avatar" src="../assets/images/avatar.png" alt="Avatar">
                <span class="name">HAIXIANG</span>
            </span>
        </div>
        <section ref="markdownDoc" data-doc class="markdown-body">
            <slot></slot>
        </section>
        <footer>
            <div class="endorse-wrapper">
                <img src="../assets/images/endorse.jpeg" alt="endorse-me">
                <span>ENDORSE AUTHOR</span>
            </div>
        </footer>
    </div>
</template>

<script>
    import hljs from 'highlight.js'
    import 'highlight.js/styles/atom-one-light.css'
    import '../assets/styles/markdown.css'

    export default {
        name: "DocPost",
        mounted() {
            this.highlight()
        },
        methods: {
            jumpToGithub() {
                window.location.href = 'https://github.com/Haixiang6123'
            },
            highlight() {
                let blocks = this.$refs.markdownDoc.querySelectorAll('pre code')

                blocks.forEach((block) => {
                    hljs.highlightBlock(block)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-post {
    position: relative;
    padding: 10px 20px 0;
    margin: 7vh 3vw 2vh auto;
    width: 70vw;
    background: rgba(252, 246, 229, 0.95);

    .author {
        display: flex;
        position: fixed;
        top: 7vh;
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

    footer {
        margin-top: 70px;
        display: flex;
        justify-content: center;
        .endorse-wrapper {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #eee;
            border-bottom: none;
            transition: all .3s;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;

            img {
                width: 40px;
                height: 40px;
                border-top-left-radius: $--border-radius-base;
            }

            span {
                display: inline-flex;
                height: 40px;
                align-items: center;
                padding: 0 30px;
                background: rgba(0, 0, 0, 0.6);
                color: $--color-white;
                font-family: overwatch,serif;
                border-top-right-radius: $--border-radius-base;
                transition: all .3s;
            }

            &:hover {
                border-color: rgba(0, 0, 0, 0.6);
                span {
                    background: $--color-white;
                    color: rgba(0, 0, 0, 0.5);
                }
            }
        }
    }
}
</style>