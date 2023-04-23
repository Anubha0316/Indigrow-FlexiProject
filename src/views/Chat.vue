<template>
    <div class="chat-container">
        <div class="chat-messages" ref="chatMessages">
            <div v-for="(message, index) in messages" :key="index" class="chat-message"
                :class="{ 'my-message': message.isMine }">
                <div class="message-content">{{ message.content }}</div>
                <div class="message-time">{{ message.time }}</div>
            </div>
        </div>
        <div class="chat-input">
            <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message here" />
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            messages: [
                { content: 'Hey there!', time: '10:00 AM', isMine: false },
                { content: 'Hi! How can I help you?', time: '10:01 AM', isMine: true },
                { content: 'I have a question about your product.', time: '10:02 AM', isMine: false },
                { content: 'Sure thing. What do you need help with?', time: '10:03 AM', isMine: true },
            ],
            newMessage: '',
        };
    },
    methods: {
        sendMessage() {
            if (this.newMessage) {
                this.messages.push({
                    content: this.newMessage,
                    time: this.getTime(),
                    isMine: true,
                });
                this.newMessage = '';
                this.$nextTick(() => {
                    this.$refs.chatMessages.scrollTop = this.$refs.chatMessages.scrollHeight;
                });
            }
        },
        getTime() {
            const now = new Date();
            return `${now.getHours()}:${now.getMinutes()}`;
        },
    },
};
</script>

<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.chat-messages {
    flex-grow: 1;
    overflow-y: auto;
}

.chat-message {
    margin-bottom: 10px;
    max-width: 80%;
    padding: 10px;
    border-radius: 10px;
    background-color: #f2f2f2;
}

.my-message {
    align-self: flex-end;
    background-color: #0084ff;
    color: #fff;
}

.message-content {
    font-size: 14px;
}

.message-time {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
}

.chat-input {
    padding: 10px;
    border-top: 1px solid #ccc;
}

.chat-input input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 10px;
}
</style>  