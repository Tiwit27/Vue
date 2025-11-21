import pool from "../db";
import { Todo, TodoUpdate} from "../models/Todo";

//service to miejsce w którym znajdują się wszystkie dokładne implementacje metod, a także 
// bezpośrednia komunikacja z bazą danych przy użyciu SQL

export const getAllTodos = async (): Promise<Todo[]> => {
    const {rows} = await pool.query("SELECT * FROM todos ORDER BY id ASC");
    return rows;
}

export const createTodo = async (todo: Todo): Promise<Todo> => {
    //{rows:[row]} -> rows:[pierwszy_element, drugi_element, ...]
    const {rows:[row]} = await pool.query(
        "INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *",
        [todo.title, todo.completed ?? false]
    );
    return row;
}

export const updateTodoStatus = async (todoUpdate: TodoUpdate): Promise<Todo> => {
    //{rows:[row]} -> rows:[pierwszy_element, drugi_element, ...]
    const {rows:[row]}= await pool.query(
        "UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *",
        [todoUpdate.completed, todoUpdate.id]
    );
    return row;
}