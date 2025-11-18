import { getAllTodos, createTodo, updateTodoStatus } from "../services/todoService";
import { Todo, TodoUpdate} from "../models/Todo";

//resolver jest niejako pośrednikiem między zapytaniem grapha a metodami w serwisach.
//jest on odpowiedzialny za zwracanie odpowiednich danych jako res
//nazwy funkcji wewnątrz resolvera muszą odpowiadac nazwą znajdującym się w schema.ts wewnątrz type Query oraz type Mutation

export const root = {
    todos: async (): Promise<Todo[]> => {
        return await getAllTodos();
    },
    addTodo: async ({input}: {input: Todo}): Promise<Todo> => {
        return await createTodo(input);
    },
    updateTodoStatus: async ({input}: {input: TodoUpdate}): Promise<Todo> => {
        return await updateTodoStatus(input);
    }
}