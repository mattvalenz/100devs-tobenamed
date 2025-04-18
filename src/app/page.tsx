import  getTodos  from './_db/controllers/todo';

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <h1>Hello world</h1>
      {todos.map((todo, index) => <p key={todo.id}>{todo.todo}</p>)}
    </>
  );
}
