export interface Todo{
    id?: number;
    title: string;
    completed: boolean;
    created_at?: Date;
}

export type TodoUpdate = Partial<Pick<Todo, 'completed'>> & {id: number};

//interface jest odwzorowaniem stuktury tabeli w kodzie TS. Dzięki niemu dokładnie wiemy co jest w zmiennej
// którą możemy określić typem "Todo"