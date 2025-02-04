const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./Model/Todo');
// const wrapasync = require('./Controller/utils/wrapasync');
const wrapAsync = require("./utils/wrapasync.js");
const ExpressError = require("./utils/Expresserror.js");
const Todos= require("./Routes/Todo.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8000;
async function main() {
    try {
        
        await mongoose.connect('mongodb://localhost:27017/todoDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        // console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}
main().then(() =>{
    console.log("database connected successfully ");
}).catch((err)=>{
  console.error("Error connecting to database", err);
});



app.use((req, res, next) => {

    
    next();
  });




app.use("/api/Todo", Todos);;


       
    
    
    


app.all("*", (req, res, next) => {
    next(new ExpressError(404, "page not found"));
  });
  
  app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrongg" } = err;
    res.status(statusCode).send(message);
  });

 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
