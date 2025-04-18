import mongoose from 'mongoose'
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  }
})

export const TodoModel = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)