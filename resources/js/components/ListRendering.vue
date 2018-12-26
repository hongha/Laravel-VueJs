<template>
    <div class="list-rendering">
        <ul>
            <li v-for="(food, index) in foods">
                {{ food.name }} - at index {{ index }}
            </li>
        </ul>
        <ul>
            <li v-for="(value, key) of myInfo">
                {{ key }} - {{ value }}
            </li>
        </ul>
        <div>
            <span v-for="n in 10">{{ n }} </span>
        </div>
        <!-- <example-component v-for="food in fodds" :key="food.name"></example-component> -->
        <ul>
            <li v-for="todo in listCompleteTodo">
                {{ todo.name }} - {{ todo.isComplete }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                foods: [
                    { name: 'Hamburger' },
                    { name: 'Sandwich' },
                    { name: 'Chicken chop' },
                ],
                myInfo: {
                    name: 'DOAN HONG HA',
                    age: 24,
                    country: 'vietnam'
                },
                todos: [
                    {
                        name: 'todo 1',
                        isComplete: true
                    },
                    {
                        name: 'todo 2',
                        isComplete: false
                    },
                    {
                        name: 'todo 3',
                        isComplete: true
                    }
                ]
            }
        },
        computed: {
            listCompleteTodo() {
                return this.todos.filter(item => item.isComplete)
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>