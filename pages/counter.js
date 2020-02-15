import Layout from '../components/MyLayout';
import {useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button onClick={() => setCount(count - 1)}>
        Subtract
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>

      </div>
    </Layout>
  );
}