import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "todo_db",
    password: "conn809",
    port: 5432,
});

export default pool;