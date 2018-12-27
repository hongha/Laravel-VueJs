<!-- <template>
    <div id="my-text">
        <p ref="dom-element">{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        updated() {
            console.log(+this.$refs['dom-element'].textContent === this.counter)
        },
        // beforeUpdate() {
        //     console.log(this.counter)
        // },
        created() {
            setInterval(() => {
                this.counter++
            }, 1000)
        }
    }
</script>

<style lang="scss" scoped>
</style>
 -->
 <template>
    <div>
        <div>
            Name: {{ person.name }}
        </div>
        <div>
            Nick name: {{ person.nickname }}
        </div>
        <div>
            <button @click="changeName">Change Name</button>
        </div>
        <div>
            <button @click="changeNickname">Change Nick Name</button>
        </div>
        <div>
            <button @click="changeNicknameProperly">Change NIck name properly</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
          person: {
                name: 'Edson'
            }
        }
    },
    methods: {
        changeName() {
            this.person.name = 'Arantes';
        },
        changeNickname() {
            this.person.nickname = Math.random().toString(36).substring(7);
            this.$forceUpdate()
        },
        changeNicknameProperly() {
            Vue.set(this.person, 'nickname', 'Louis');
        }
    }
}
</script>

<style lang="scss" scoped>
</style>