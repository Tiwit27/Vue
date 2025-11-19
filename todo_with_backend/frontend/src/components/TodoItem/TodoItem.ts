import { Todo} from "@/interfaces/Todo";
import Vue, { PropType } from "vue";
import dayjs from "dayjs";
import axios from "axios";

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
        formatedDate(): string{
            return dayjs(Number(this.data.todo.created_at)).format("HH:mm DD.MM.YYYY");
        }
    },
    watch:{
        async "data.todo.completed"(state){
            console.log("TEST1");
            const query = `
                mutation{
                    updateTodoStatus(input: {id: ${this.data.todo.id}, completed: ${state}}){
                        id,
                        completed
                    }
                }
            `;

            const response = await axios.post<{data: {todo: {id: number, completed: boolean}}}>("http://localhost:3000/graphql",{
                query: query
            });
            console.log(response.data.data.todo);
        }
    },
    methods:{

    }
})