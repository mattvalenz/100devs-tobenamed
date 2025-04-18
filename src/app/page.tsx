import { getTodos } from "./_db/controllers/todo";


export default async function Home() {
  const todos = await getTodos()
  console.log(todos)
  return (
    <>
    <h1>Hello world</h1>
    {todos.map((todo, index) => <p key={index}>{todo.todo}</p>)}
    </>
  );
}
