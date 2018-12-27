<template>
    <div class="event-handling">
        <!-- <div>Current Number: {{ counter }}</div> -->
        <!-- <button @click="increaseCounter(50)">CLick</button> -->
        <!-- <div @click="alertHello">
            <button @click.stop="alertWelcome">CLick</button>
        </div> -->
<!--         <form @submit.prevent="sayWelcome('doan hong ha')">
            <button type="submit">Submit</button>
        </form> -->
        <!-- <button type="submit" @click.stop.prevent="sayWelcome('aaaa')">Submit</button> -->
        <!-- <button type="submit" @click.once="sayWelcome('aaaa')">Submit</button> -->
        <!-- <div v-on:scroll.passive="onScroll">...</div> -->
        <input @keyup.sayHello="alertHello">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            increaseCounter(number) {
                this.counter += number
            },
            alertHello() {
                alert('Hello')
            },
            alertWelcome() {
                alert('Welcome')
            },
            sayWelcome(text) {
                alert(text)
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>