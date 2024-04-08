const express=require("express");
const app=express();


const mongoose=require("mongoose");
app.use(express.json());
const mongoUrl="mongodb+srv://admin:admin@cluster0.et9uamq.mongodb.net/?retryWrites=true&w=majority"

//connet to database
mongoose.connect(mongoUrl).then(()=>{
    console.log("Database Connected!");
}).catch((e)=>{
    console.log(e);
})

//call to router
const userRouter = require('./routers/userRouter');
const newsRouter = require('./routers/newsRouter');
const productRouter = require('./routers/productRouter');
const gradeRouter = require('./routers/gradeRouter');


//Routers
app.use('/users', userRouter);
app.use('/news', newsRouter);
app.use('/products', productRouter);
app.use('/grades', gradeRouter);


//start server
app.listen(5009 ,()=>{
    console.log("Node JS server has been Started.");
})