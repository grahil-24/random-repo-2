const express = require('express');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const connectDB = require("./config/db");
dotenv.config();

const app = express();
app.use(express.json());

connectDB(process.env.DATABASE_URI);

app.use('/api/todos', todoRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
})





