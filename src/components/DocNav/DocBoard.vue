<template>
    <div class="doc-board-wrapper">
        <transition name="fade">
            <ul ref="board" v-show="isShow" class="board">
                <li :class="itemColors[index]"
                    v-for="(message, index) in messages"
                    :key="message.id">
                    [{{getFormattedDate(message.createdAt)}}]: {{message.attributes.content}}
                </li>
            </ul>
        </transition>

        <div class="input-wrapper" :class="inputWrapperClasses">
            <span :class="[mainColor]">[Note]: </span>
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
                messages: [],
                colors: ['green', 'blue', 'orange'],
                itemColors: [],
                mainColor: ''
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

                this.initRandomColors(messages)
            })
        },
        methods: {
            getRandomColor() {
                const randomNum = Math.floor(Math.random() * Math.floor(3));
                return this.colors[randomNum]
            },
            onFocus() {
                this.isShow = true

                this.scrollToBottom()
            },
            initRandomColors(messages) {
                for (let i = 0; i < messages.length; i++) {
                    this.itemColors.push(this.getRandomColor())
                }

                this.mainColor = this.getRandomColor()
            },
            getFormattedDate(dateObj) {
                if (typeof dateObj !== 'object') {
                    dateObj = new Date(dateObj)
                }
                const year = dateObj.getFullYear()
                let month = dateObj.getMonth() + 1
                let date = dateObj.getDate()
                month = (month < 10 ? '0' : '') + month
                date = (date < 10 ? '0' : '') + date
                return `${month}-${date}-${year}`
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
                this.messages.push({
                    id: Date.now(),
                    attributes: {
                        content: this.newMessage
                    },
                    createdAt: new Date()
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
.green {
    color: #8db974 !important;
}
.blue {
    color: #26AEE6 !important;
}
.orange {
    color: #f1903f !important;
}
.doc-board-wrapper {
    z-index: 2;
    .board, .input-wrapper {
        border-radius: $--border-radius-base;
        background: rgba(0, 0, 0, 0.7);
    }

    .board {
        padding: 4px 8px;
        max-height: 18vh;
        overflow: auto;
        z-index: 3;
        li {
            padding: 4px 0;
            color: white;
        }
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