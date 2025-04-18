import { connectDB } from "../connection"
import { TodoModel } from "../models/Todo"

export const getTodos = async ()=>{
    await connectDB()
    const todoItems = await TodoModel.find()
    return todoItems
}