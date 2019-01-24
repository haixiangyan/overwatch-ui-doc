<template>
    <div class="doc-board-wrapper">
        <transition name="fade">
            <ul ref="board" v-show="isShow" class="board">
                <li v-for="message in messages" :key="message.id">[Note]: {{message.content}}</li>
            </ul>
        </transition>

        <div class="input-wrapper">
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
    export default {
        name: "DocBoard",
        data() {
            return {
                isShow: false,
                newMessage: '',
                messages: [
                    { id: 1, content: 'Hello World' },
                    { id: 2, content: 'Hello World' },
                    { id: 3, content: 'Hello World' },
                    { id: 4, content: 'Hello World' },
                    { id: 5, content: 'Hello World' },
                    { id: 6, content: 'Hello World' },
                    { id: 7, content: 'Hello World' },
                    { id: 8, content: 'Hello World' },
                    { id: 9, content: 'Hello World' },
                    { id: 10, content: 'Hello World' },
                ]
            }
        },
        methods: {
            onFocus() {
                this.isShow = true

                this.scrollToBottom()
            },
            addNewMessage() {
                this.messages.push({
                    id: this.messages.length + 1,
                    content: this.newMessage
                })

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
        background: rgba(0, 0, 0, 0.5);
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