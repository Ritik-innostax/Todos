const express = require('express');
const router =express.Router();
const wrapAsync = require("../utils/wrapasync.js");
const ExpressError = require("../utils/Expresserror.js");
const Todo = require('../Model/Todo.js');
const Todocontroller = require('../Controller/Todo.js');


router.get("/getalltodo" ,  wrapAsync(Todocontroller.getalltodo));

  router.post("/createtodo", wrapAsync(Todocontroller.createtodo));
  router.get("/SingleTodo/:id", wrapAsync(Todocontroller.SingleTodo));  
  router.put("/updatetodo/:id", wrapAsync(Todocontroller.Updatetodo));
  router.delete("/deletetodo/:id", wrapAsync(Todocontroller.deletetodo));
module.exports = router;