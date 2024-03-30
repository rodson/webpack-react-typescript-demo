import { useState } from 'react';
import Footer from './components/Footer';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <p>Apaaaaavva</p>
      {count}
      <button
        onClick={() => {
          setCount((count) => ++count);
        }}>
        click
      </button>
      <Footer />
    </main>
  );
}
