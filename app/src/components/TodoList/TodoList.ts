import Vue from 'vue';
import TodoItem from '../TodoItem';

export default Vue.extend({
    name: "TodoList",
    data(){
        return{
            inputTodo: "",
            todos: [] as Todo[],
            id: 1,
            emptyInput: false
        }
    },
    methods:{
        addTodoItem()
        {
            if(this.inputTodo.trim() === "")
            {
                this.emptyInput = true;
                this.inputTodo = ""
                return;
            }
            //funkcja dodawania nowego itemu
            this.todos.push({id: this.id, text: this.inputTodo, done: false});
            this.id++;
            this.inputTodo = ""
        },
        updateDone(id: number, value: boolean)
        {
            //funckja która zostaje wywołania w momencie zmiany parametru done w TodoItem
            const todo = this.todos.find(t => t.id === id);
            if (todo) {
                todo.done = value;
            }
        },
        clearEmptyInputFlag()
        {
            this.emptyInput = false;
        }
    },
    components:{
        TodoItem
    }
})