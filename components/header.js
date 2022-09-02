import Link from 'next/link';
import allProducts from './allProducts';

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/api/allbooks">
          <a>All Books</a>
        </Link>
      </li>
      <li>
        <Link href="/api/login">
          <a>Login</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;
