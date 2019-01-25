<template>
    <div class="doc-board-wrapper">
        <transition name="fade">
            <ul ref="board" v-show="isShow" class="board">
                <li v-for="message in messages" :key="message.id">[Note]: {{message.attributes.content}}</li>
            </ul>
        </transition>

        <div class="input-wrapper" :class="inputWrapperClasses">
            <span>[Note]: </span>
            <input
                v-model="newMessage"
                @focus="onFocus"
                @blur="isShow = false"
                @keyup.enter="addNewMessage"
                class="input"
                placeholder="Leave me a message!"
                type="text">
        </div>
    </div>
</template>

<script>
    import DB from '../../db/index'
    export default {
        name: "DocBoard",
        data() {
            return {
                isShow: false,
                newMessage: '',
                messages: []
            }
        },
        computed: {
            inputWrapperClasses() {
                return {'input-wrapper-active': this.isShow}
            }
        },
        mounted() {
            DB.getMessages((messages) => {
                this.messages = messages
            })
        },
        methods: {
            onFocus() {
                this.isShow = true

                this.scrollToBottom()
            },
            addNewMessage() {
                // If is empty then return
                if (!this.newMessage) {
                    return
                }
                // If is XSS
                if (/(\b)(on\S+)(\s*)=|javascript|(<\s*)(\/*)script/.test(this.newMessage)) {
                    this.$owAlert({
                        title: 'INVALID CHARACTER',
                        message: 'Message may contain invalid characters',
                        type: 'danger'
                    })
                    return
                }
                // Send new message to server
                DB.addMessage(this.newMessage)

                // Add new message locally
                console.log(this.newMessage)
                this.messages.push({
                    id: Date.now(),
                    attributes: {
                        content: this.newMessage
                    }
                })

                this.newMessage = ''

                this.scrollToBottom()
            },
            scrollToBottom() {
                this.$nextTick(() => {
                    this.$refs.board.scrollTop = this.$refs.board.scrollHeight;
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.doc-board-wrapper {
    .board, .input-wrapper {
        border-radius: $--border-radius-base;
        color: #26AEE6;
        background: rgba(0, 0, 0, 0.7);
    }

    .board {
        padding: 8px;
        max-height: 18vh;
        overflow: auto;
    }

    .input-wrapper {
        display: flex;
        padding: 0 8px;
        align-items: center;
        margin-top: 6px;
        height: 32px;
        opacity: $--less-opacity;
        transition: opacity .3s;

        &-active, &:hover {
            opacity: 1;
        }

        .input {
            padding-left: 4px;
            height: 100%;
            flex: 1;
            display: block;
            background: transparent;
            border: none;
            font-size: 1em;
            color: $--color-white;
            caret-color: $--color-white;
            outline: none;
        }
    }
}
</style>