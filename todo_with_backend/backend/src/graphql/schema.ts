import { buildSchema } from "graphql";

//zadeklarowanie schema
//OPIS SCHEMA:
// type Todo - odwzorowanie tabeli z db w schema
// type Query - specjalny typ zawierający funkcje SELECT
// input TodoInput - odpowiednik interface, używany jako obiekt do przekazywania danych w type Mutation (asp.net DTO)
// type Mutation - specjalny typ zawierający funkcje INSERT, DELETE, UPDATE

//"Pola" a właściwie funkcje w specjalnych typach (Query oraz Mutation) muszą mięc zadeklarowane funkcje
// o identycznej nazwie w resolvers.ts
export const schema = buildSchema(`
    type Todo {
        id: Int!
        title: String!
        completed: Boolean!
        created_at: String
    }

    type Query {
        todos: [Todo]
    }

    input TodoInput {
        title: String!
        completed: Boolean
    }

    input TodoUpdateStatusInput {
        id: Int!
        completed: Boolean!
    }

    type Mutation {
        addTodo(input: TodoInput): Todo
        updateTodoStatus(input: TodoUpdateStatusInput): Todo
    }
`)