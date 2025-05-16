import Profile from '@/components/Profile';
import Quest from '@/components/Quest';
import getTodos from './_db/controllers/todo';

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <h1>Hello world</h1>
      {todos.map(todo => (
        <p key={todo.id}>{todo.todo}</p>
      ))}

      <h2 className="text-2xl text-center">Quest component:</h2>

      <div className="w-[600px] m-auto">
        <Quest
          questData={{
            description: 'Add 3 people to your hitlist',
            progress: 2,
            goal: 3,
            icon: '/linkedin.png',
            reward: 10,
          }}
        />
      </div>

      <h2 className="text-2xl text-center">Profile Page:</h2>
      <Profile
        variant="main"
        userData={{
          username: 'John',
          level: 2,
          xp: 200,
          profilePicURI: 'https://picsum.photos/id/237/150/150',
        }}
      />

      <h2 className="text-2xl text-center mt-10">Leaderboard:</h2>
      <div className="w-[400px] m-auto">
        <Profile
          variant="compact"
          userData={{
            username: 'Jane',
            level: 7,
            xp: 500,
            profilePicURI: 'https://picsum.photos/id/237/150/150',
          }}
        />
        <Profile
          variant="compact"
          userData={{
            username: 'Jack',
            level: 10,
            xp: 700,
            profilePicURI: 'https://picsum.photos/id/237/150/150',
          }}
        />
      </div>
    </>
  );
}
