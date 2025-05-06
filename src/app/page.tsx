import getTodos from './_db/controllers/todo';

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <h1>Hello world</h1>
      {todos.map((todo) => <p key={todo.id}>{todo.todo}</p>)}
    </>
  );
}
