<template>
    <div id="computed-property">
        <p>message: {{message}}</p>
        <p>reversed message: {{reversedMessage}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'a b c d e f'
            }
        },
        computed: {
            reversedMessage() {
                return this.message.split(' ').reverse().join(' ')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>