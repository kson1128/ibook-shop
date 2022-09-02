import Link from 'next/link';

function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/api/allBooks">
          <a>Shop All Books</a>
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

export default Navbar;
