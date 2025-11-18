import { Todo } from "@/interfaces/Todo";
import Vue, { PropType } from "vue";
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
        formatedDate(): string{
            return dayjs(Number(this.data.todo.created_at)).format("HH:mm DD.MM.YYYY");
        }
    },
    watch:{
        "data.todo.completed"(state){
            console.log(state);
        }
    },
    methods:{

    }
})