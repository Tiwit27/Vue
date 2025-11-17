import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import { root } from "./graphql/resolvers";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true
}))

//stworzenie jednego domyślnego endpointu, który wykonuje wszystkie zapytania i zmiany
app.use("/graphql", graphqlHTTP({
    schema,//schemat stworzony przez nas
    rootValue: root,//root = resolver
    graphiql: true,//włączenie graficznego wyglądu na endpoincie (ułatwia testy)
}))

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})