<template>
    <div class="my-component">
        <div>Message type: {{ message.type }}</div>
        <div>Message text: {{ message.text }}</div>
        <div><button @click="changeType">Change type</button></div>
        <div><button @click="changeText">Change text</button></div>
        <!-- <div>{{ sayHello(message) }}</div> -->
        <!-- <div>{{ reverseMessage }}</div> -->
        <!-- <div><button @click="sayHello">say hello</button></div>  -->
        <!-- <div><button @click="sayHi">say hi</button></div> -->
        <!-- <div><button @click="changeMessage">change message</button></div> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: {
                    type: 'greeting',
                    text: 'how are you?'
                }
            }
        },
        methods: {
            sayHello(text) {
                return text.toUpperCase()
            },
            sayHi() {
                alert('say Hi')
            },
            changeMessage() {
                this.message.text = 'this is new message'
            },
            changeType() {
                this.message.type = 'this is new type'
            },
            changeText() {
                this.message.text = 'this is new text'
            }
        },
        computed: {
            reverseMessage() {
                return this.message.split('').reverse().join('')
            },
            getType() {
                return this.message.type
            },
            getText() {
                return this.message.text
            }
        },
        watch: {
            getType() {
                console.log('type changed')
            },
            getText() {
                console.log('text changed')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-component {
        color: red;
    }
</style>