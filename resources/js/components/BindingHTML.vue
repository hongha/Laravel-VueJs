<template>
    <div class="binding-html">
<!--         <div class="text-title" :class="{active: isActive, hide: isHide, bold: isBold}">
            This is text
        </div> -->
<!--         <div class="text-title" :class="[activeClass, boldClass]">
            This is text
        </div> -->
<!--         <div class="text-title" :class="classObject" :style="{backgroundColor: color}">
            This is text
        </div> -->
        <div class="text-title" :class="classObject" :style="{display: ['-webkit-box', '-ms-flexbox', 'flex']}">
            This is text
        </div>
        <div>
            <button @click="isActive = true">Active text</button>
        </div>
        <div>
            <button @click="isHide = true">Active text</button>
        </div>
        <div>
            <button @click="isBold = true">Active text</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                color: 'blue',
                isActive: false,
                isHide: false,
                isBold: false,
                activeClass: 'active',
                boldClass: 'bold',
                classObject: {
                    active: true,
                    bold: true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.active {
    color: red;
}
.hide {
    display: none;
}
.bold {
    font-weight: bold;
}
</style>