const express=require("express");
const cors=require("cors");
const  colors=require("colors");
const morgan=require("morgan");
const dotenv=require("dotenv");
const connectDb = require("./config/connectDb");


//config....
dotenv.config();

//connection from database....
 connectDb();

//rest object....
const app=express();

//middleware...
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes...
app.use("/api/v1/users",require("./routes/userRoutes"));

//transaction.....
app.use("/api/v1/transaction",require('./routes/transactionroutes'));

//port
const PORT=8080|| process.env.PORT;

//listen server....
app.listen(PORT,()=>{
     console.log(`server is running at the port number${PORT}`);
})