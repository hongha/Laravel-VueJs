<template>
    <div id="computed-property">
        <select class="form-control" v-model="selectedCity">
            <optgroup v-for="city in cities">
                <option  :value="city">{{city}}</option>
            </optgroup>
        </select>
        <h3>{{selectedCity}}</h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cities: ['matsue', 'hanoi', 'tokyo', 'london', 'saigon', 'danang'],
                selectedCity: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>