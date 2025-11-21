import { Todo, UpdateTodoStatus} from "@/interfaces/Todo";
import Vue, { PropType } from "vue";
import axios from "axios";
import { Response } from "@/interfaces/Response";

export default Vue.extend({
    props:{
        todo: {
            type: Object as PropType<Todo>,
            required: true
        }
    },
    data(){
        return{
            data:{
                todo: {...this.todo}
            }
        }
    },
    computed:{
        todoStatusText(): string{
            return this.todo.completed ? "Done" : "Todo";
        },
        todoButtonClass(): string{
            return this.todo.completed ? "btn-danger" : "btn-success";
        },
        todoButtonText(): string{
            return this.todo.completed ? "Cancel" : "Mark as done";
        },
        formatedDate(): string{
            return new Date(this.todo.created_at).toLocaleString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            })
        }
    },
    methods:{
        async updateStatus(){
            const newStatus = !this.data.todo.completed;
            const query = `
                mutation{
                    updateTodoStatus(input: {id: ${this.todo.id}, completed: ${newStatus}}){
                        id,
                        completed
                    }
                }
            `;

            const response = await axios.post<Response<UpdateTodoStatus>>("http://localhost:3000/graphql",{
                query: query
            });
            if(response.status === 200)
            {
                this.data.todo.completed = response.data.data.updateTodoStatus.completed;
                this.$emit("updateStatus", {...this.data.todo});
            }
        },
        async deleteTodo(){
            const query = `
                mutation{
                    deleteTodo(input: {id: ${this.todo.id}}){
                        id,
                        title,
                        completed,
                        created_at
                    }
                }
            `
            const response = await axios.post<Response<Todo>>("http://localhost:3000/graphql",{
                query: query
            });

            if(response.status === 200)
            {
                this.$emit("deleteTodo", this.todo.id);
            }
        },
        updateData(){
            this.data.todo = this.todo;
        }
    },
    mounted(){
        this.updateData();
    }
})