<template>
    <div class="row">
        <div class="col-sm-2">
            <ul>
                <li><a href="/calculator">Calculator</a></li>
                <li><a href="#" @click="changeTabValue(0)">Products</a></li>
                <li><a href="#" @click="changeTabValue(1)">V-model</a></li>
                <li><a href="#" @click="changeTabValue(2)">Computed property</a></li>
                <li><a href="#" @click="changeTabValue(3)">Users</a></li>
            </ul>
        </div>
        <div class="col-sm-10">
            <div v-if="tab == 0">
                <ApiCalling></ApiCalling>
            </div>
            <!-- khai bao component con trong component cha -->
            <div v-else-if="tab == 1">
                <Weather></Weather>
            </div>
            <!-- khong can khai bao trong component cha nhung phai khai bao trong app.js -->
            <div v-else-if="tab == 2">
                <computed-property></computed-property>
            </div>
            <div v-else-if="tab == 3">
                <UserDashboard></UserDashboard>
            </div>
        </div>
    </div>
</template>

<script>
    import ApiCalling from './ApiCalling.vue'
    import Weather from './Weather.vue'
    import UserDashboard from './UserDashboard'
    export default {
        data() {
            return {
                tab: 0
            }
        },
        methods: {
            changeTabValue(value) {
                this.tab = value
            }
        },
        components: {
            ApiCalling,
            Weather,
            UserDashboard
        }
    }
</script>

<style lang="scss" scoped>

</style>