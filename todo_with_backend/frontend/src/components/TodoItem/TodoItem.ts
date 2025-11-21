import { Todo} from "@/interfaces/Todo";
import Vue, { PropType } from "vue";
import axios from "axios";
import dayjs from "dayjs";

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
            return new Date(this.data.todo.created_at).toLocaleString(undefined, {
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
                    updateTodoStatus(input: {id: ${this.data.todo.id}, completed: ${newStatus}}){
                        id,
                        completed
                    }
                }
            `;

            const response = await axios.post<{data: {todo: {id: number, completed: boolean}}}>("http://localhost:3000/graphql",{
                query: query
            });

            if(response.status === 200)
            {
                this.data.todo.completed = newStatus;
                this.$emit("updateStatus", {...this.data.todo});
            }
        }
    }
})