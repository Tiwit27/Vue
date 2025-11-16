import Vue from 'vue';

export default Vue.extend({
    name: "TodoItem",
    props:{
        id: Number,
        text: String,
        done: Boolean
    },
    data(){
        return{
            data: {
                done : this.done
            }
        }
    },
    methods:{
        ChangeStatus(){
            //funckja zmieniająca aktualny .done
            this.data.done = !this.done;
            this.$emit('updateDone', this.data.done);
            //$emit tworzy customowy event, który następnie jest odbierany w TodoList.vue
        }
    }
})