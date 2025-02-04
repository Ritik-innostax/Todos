const Todo = require('../Model/Todo.js');





module.exports.getalltodo =async  (req, res)=>{
    const alltodo= await Todo.find();
        console.log(alltodo);
        res.status(200).json({ Alltodo: alltodo});
    
    };
    module.exports.createtodo =async  (req, res)=>{
        console.log("post request came");   
        const newTodo = new Todo({
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                priority: req.body.priority,
                dueDate: req.body.dueDate,
                createdAt: new Date(),
                dueDate:new Date(),
    
        }); 
         await newTodo.save();
       
    
    
        console.log("post request came");
        // res.json(newTodo);
        res.status(200).json(newTodo);
    
  
        
        };


        module.exports.SingleTodo =async  (req, res)=>{
            const {id}=req.params;
            console.log("id", id);  
            const singletodo= await Todo.findById(id);
            if(!singletodo){
                return res.status(404).json({message:"Todo not found"});
            }
            console.log("found", singletodo );
            res.status(200).json(singletodo);
            
            };

            module.exports.Updatetodo =async  (req, res)=>{
                const {id}= req.params;
                const updatetodo= await Todo.findById(id); 
                
                if(!updatetodo){
                    return res.status(404).json({message:"Todo not found"});
                }
                
                updatetodo.title=req.body.title || updatetodo.title;
                
                updatetodo.description=req.body.description || updatetodo.description;
                
                updatetodo.status=req.body.status || updatetodo.status;
                
                updatetodo.priority=req.body.priority || updatetodo.priority;
                
                updatetodo.dueDate=req.body.dueDate || updatetodo.dueDate;
                
                updatetodo.updatedAt=new Date();
                
                    const savedTodo= await updatetodo.save();
                    res.status(200).json(savedTodo);
                
                
                
                };


                 module.exports.deletetodo =async  (req, res)=>{
                    const {id}=req.params;
                    console.log("id", id);  
                    const deletedTodo= await Todo.findByIdAndDelete(id);
                    if(!deletedTodo){
                        return res.status(404).json({message:"Todo not found"});
                    }
                    console.log("deleted", deletedTodo );
                    res.status(200).json(deletedTodo);
                
                
                
                };