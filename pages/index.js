import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Book 1', 'Book2', 'Book3'];

  const [counts, setCount] = useState(0);

  function handleClick() {
    setCount(counts + 1);
  }

  return (
    <div>
      <Header title="Books" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Count ({counts})</button>
    </div>
  );
}
