<template>
    <div class="doc-post">
        <div class="author">
            <img @click="jumpToGithub" class="add-button" src="../../assets/images/add-friend.png" alt="Add">
            <span class="author-info-wrapper">
                <img class="avatar" src="../../assets/images/avatar.png" alt="Avatar">
                <span class="name">HAIXIANG</span>
            </span>
        </div>
        <section ref="markdownDoc" data-doc :class="{'markdown-body': useMarkdown}">
            <slot></slot>
        </section>
        <footer>
            <div @click="isShowPayQR = true" @mouseleave="isShowPayQR = false" class="endorse-wrapper">
                <transition name="fade">
                    <img v-if="isShowPayQR" class="payQR" src="../../assets/images/paypal.jpg" alt="payQR">
                </transition>
            </div>
        </footer>
    </div>
</template>

<script>
    import hljs from 'highlight.js'
    import 'highlight.js/styles/atom-one-light.css'
    import '../../assets/styles/markdown.css'

    export default {
        name: "DocPost",
        props: {
            useMarkdown: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                isShowPayQR: false
            }
        },
        mounted() {
            this.highlight()
        },
        methods: {
            jumpToGithub() {
                window.location.href = 'https://haixiang6123.github.io/blog/#/'
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
    @include pc {
        width: 66vw;
        margin: 5vh 3vw 2vh auto;
    }
    @include tablet {
        width: 66vw;
        margin: 5vh 3vw 2vh auto;
    }
    margin: 5vh 3vw;
    position: relative;
    padding: 10px 20px 0;
    background: rgba(252, 246, 229, 0.95);

    .author {
        @include pc {
            display: flex;
        }
        @include tablet {
            display: flex;
        }
        display: none;
        position: fixed;
        top: 5vh;
        right: 3vw;
        z-index: 3;

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
                padding: 0 50px;
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
        margin-top: 40px;
        display: flex;
        justify-content: center;
        .endorse-wrapper {
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #eee;
            border-bottom: none;
            transition: all .3s;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            font-family: overwatch,serif;

            .payQR {
                bottom: calc(100% + 2px);
                position: absolute;
            }

            .icon {
                @include hvFlexCenterMx(inline-flex);
                width: 40px;
                height: 40px;
                background: #3AB2B7;
                color: $--color-white;
                font-size: 1.2em;
                border-top-left-radius: $--border-radius-base;
            }

            .text {
                display: inline-flex;
                height: 40px;
                align-items: center;
                padding: 0 30px;
                background: rgba(0, 0, 0, 0.6);
                color: $--color-white;
                border-top-right-radius: $--border-radius-base;
                transition: all .3s;
            }

            &:hover {
                border-color: rgba(0, 0, 0, 0.4);
                .text {
                    background: $--color-white;
                    color: rgba(0, 0, 0, 0.5);
                }
            }
        }
    }
}
</style>