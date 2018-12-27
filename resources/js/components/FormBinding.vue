<template>
    <div class="form-input-binding">
        <div class="text">
            {{ message }}
        </div>
        <div class="input-form">
<!--             <input type="radio" v-model="message" value="one">
            <input type="radio" v-model="message" value="two"> -->
<!--             <select v-model="message">
                <option disabled="">Choose one</option>
                <option value="one">One</option>
                <option value="two">Two</option>
            </select> -->
            <!-- <input type="text" :placeholder="placeholder" :value="value" name=""> -->
            <!-- <input v-model.lazy="message" > -->
            <!-- <input type="number" v-model.number="message" name=""> -->
            <input type="number" v-model.trim="message" name="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: '',
                placeholder: 'This is placeholder',
                value: 'This is value'
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>