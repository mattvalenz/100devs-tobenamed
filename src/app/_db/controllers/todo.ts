import  connectDB  from '../connection';
import  TodoModel  from '../models/Todo';

const getTodos = async () => {
  await connectDB();
  const todoItems = await TodoModel.find();
  return todoItems;
};

export default getTodos