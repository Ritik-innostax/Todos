const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  
    trim: true       
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],  
    default: 'pending'              
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'], 
    default: 'medium'               
  },
  createdAt: {
    type: Date,
    default: Date.now  
  },
  dueDate: {
    type: Date,
    required: false
  }
});


const Todo = mongoose.model('Todo', todoSchema);


module.exports = Todo;
