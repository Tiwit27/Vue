import { Priority } from "./Priority";

export interface Todo{
    id: number;
    title: string;
    completed: boolean;
    created_at: Date;
    priority: Priority;
}

export interface UpdateTodoStatus{
    updateTodoStatus: Pick<Todo, "id" | "completed">;
}
