import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button type="button" onClick={() => setCount((prev) => prev + 1)}>{count}</button>;
}
