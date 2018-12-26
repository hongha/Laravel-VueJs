<template>
    <div class="conditional-rendering">
<!--         <div class="block-1" v-if="isActive == false">
            This is block 1
        </div>
        <div class="block-2" v-else>
            This is block 2
        </div>
        <div>
            <button @click="isActive = !isActive">Button</button>
        </div> -->


        <!-- start v-else-if -->
        <!-- <div class="block-1" v-if="currentBlock == 1">
            This is block 1
        </div>
        <div class="block-2" v-else-if="currentBlock == 2">
            This is block 2
        </div>
        <div class="block-3" v-else>
            This is block 3
        </div>
        <div>
            <button @click="showBlock(1)">Button 1</button>
        </div>
        <div>
            <button @click="showBlock(2)">Button 2</button>
        </div>
        <div>
            <button @click="showBlock(3)">Button 3</button>
        </div> -->
        <!-- end v-else-if -->


        <!-- start v-show -->
        <div class="block-1" v-show="isActive == false">
            This is block 1
        </div>
        <div class="block-2" v-show="isActive == true">
            This is block 2
        </div>
        <div>
            <button @click="isActive = !isActive">Button</button>
        </div>
        <!-- end v-show -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: true
                // currentBlock: 1
            }
        },
        methods: {
            toggleActive() {
                if(this.isActive == true) {
                    this.isActive = false
                }
                else {
                    this.isActive = true
                }
            },
            showBlock(number) {
                this.currentBlock = number
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>