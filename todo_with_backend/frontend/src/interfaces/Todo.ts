export interface Todo{
    id: number;
    title: string;
    completed: boolean;
    created_at: Date;
}

export interface UpdateTodoStatus{
    updateTodoStatus: Pick<Todo, "id" | "completed">;
}
