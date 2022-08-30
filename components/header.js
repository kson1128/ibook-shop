import Link from 'next/link';

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>All Books</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Login</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;
